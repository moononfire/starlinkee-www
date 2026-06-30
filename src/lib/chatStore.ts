import { Redis } from "@upstash/redis";

export type ChatMessage = {
  id: string;
  sender: "user" | "owner";
  text: string;
  ts: number;
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = (sessionId: string) => `chat:${sessionId}`;
const TTL = 60 * 60 * 24 * 7; // 7 dni

export async function getMessages(sessionId: string): Promise<ChatMessage[]> {
  const raw = await redis.get<ChatMessage[]>(KEY(sessionId));
  return raw ?? [];
}

export async function addMessage(
  sessionId: string,
  msg: Omit<ChatMessage, "id" | "ts">
): Promise<ChatMessage> {
  const messages = await getMessages(sessionId);
  const newMsg: ChatMessage = {
    ...msg,
    id: crypto.randomUUID(),
    ts: Date.now(),
  };
  messages.push(newMsg);
  await redis.set(KEY(sessionId), messages, { ex: TTL });
  return newMsg;
}
