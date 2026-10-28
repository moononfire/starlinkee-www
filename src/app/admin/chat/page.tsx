import { cookies } from "next/headers";
import AdminLogin from "@/components/admin/AdminLogin";
import ChatClient from "@/components/admin/ChatClient";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/adminAuth";

interface Props {
  searchParams: Promise<{ s?: string; e?: string }>;
}

export default async function AdminChatPage({ searchParams }: Props) {
  const { s, e } = await searchParams;
  if (!verifyAdminSession((await cookies()).get(ADMIN_COOKIE)?.value)) {
    const next = `/admin/chat${s ? `?s=${encodeURIComponent(s)}` : ""}`;
    return <AdminLogin next={next} failed={e === "1"} />;
  }
  return <ChatClient />;
}
