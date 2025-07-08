import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "Missing 'messages' array" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "anthropic/claude-3-haiku",
      messages: body.messages,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    const err = error as { status?: number; code?: string };
    console.error("[API Error]:", err);

    return NextResponse.json(
      { error: "Something went wrong calling OpenRouter." },
      { status: err.status || 500 }
    );
  }
}