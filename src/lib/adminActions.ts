"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_SESSION_SECONDS,
  checkAdminPassword,
  createAdminSession,
  isRealm,
  realmCookie,
  safeAdminPath,
} from "@/lib/adminAuth";

export async function adminLogin(formData: FormData) {
  const next = safeAdminPath(String(formData.get("next") ?? ""));
  const password = String(formData.get("password") ?? "");
  const rawRealm = formData.get("realm");
  const realm = isRealm(rawRealm) ? rawRealm : "admin";
  const session = checkAdminPassword(password, realm) ? createAdminSession(realm) : null;
  if (!session) {
    redirect(`${next}${next.includes("?") ? "&" : "?"}e=1`);
  }
  (await cookies()).set(realmCookie(realm), session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS,
  });
  redirect(next);
}
