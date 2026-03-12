// Core
import { Suspense } from "react";
import { Metadata } from "next";

// Layout
import { AuthRegister } from "@src/layout";

export const metadata: Metadata = {
  title: "Register",
  description: "",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthRegister />
    </Suspense>
  );
}
