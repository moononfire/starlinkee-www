"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_SECONDS,
  checkAdminPassword,
  createAdminSession,
  safeAdminPath,
} from "@/lib/adminAuth";

export async function adminLogin(formData: FormData) {
  const next = safeAdminPath(String(formData.get("next") ?? ""));
  const password = String(formData.get("password") ?? "");
  const session = checkAdminPassword(password) ? createAdminSession() : null;
  if (!session) {
    redirect(`${next}${next.includes("?") ? "&" : "?"}e=1`);
  }
  (await cookies()).set(ADMIN_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS,
  });
  redirect(next);
}
