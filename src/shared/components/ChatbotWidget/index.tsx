'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

//triggered deployment
export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a friendly assistant for PetBasket 🐶🛒' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'assistant', content: "Sorry, something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full px-4 py-2 shadow hover:bg-blue-700"
      >
        {isOpen ? 'Close Chat' : 'Chat'}
      </Button>

      {/* Chat box */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-h-[70vh] bg-white border rounded shadow flex flex-col">
          <div className="p-2 font-semibold bg-blue-100">PetBasket Assistant 🐾</div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages
              .filter(m => m.role !== 'system')
              .map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded max-w-[80%] ${
                    msg.role === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-100 self-start'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            {loading && <div className="text-sm text-gray-400">Thinking...</div>}
          </div>

          <div className="flex border-t p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 border rounded p-1 text-sm"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
