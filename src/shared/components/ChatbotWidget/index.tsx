"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useRef } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a friendly assistant for PetBasket 🐶🛒",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full px-4 py-2 shadow-md hover:scale-105 transition-transform"
      >
        {isOpen ? "✖ Close" : "💬 Chat"}
      </Button>

      {/* Chat box */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-h-[75vh] bg-white border rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500">
            PetBasket Assistant 🐾
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages
              .filter((m) => m.role !== "system")
              .map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex w-full ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-pink-100 text-left"
                        : "bg-yellow-100 text-left"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            {loading && (
              <div className="flex justify-start text-xs text-gray-400 italic">
                Assistant is typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t p-2 bg-white">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Type your message..."
            />
            <Button
              onClick={sendMessage}
              variant="outline"
              className="ml-2 text-pink-600 border-pink-300 hover:bg-pink-50"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
