"use server"

import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  // TODO: Implement actual Prisma login logic
  console.log("Mock login for:", formData.get("email"));
  // Redirect to dashboard
  redirect("/dashboard");
}

export async function registerUser(formData: FormData) {
  // TODO: Implement actual Prisma registration logic
  console.log("Mock register for:", formData.get("email"));
  // Redirect to dashboard
  redirect("/dashboard");
}
