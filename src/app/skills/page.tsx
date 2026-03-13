// Core
import { Suspense } from "react";
import { Metadata } from "next";

// Layout
import { Skills } from "@src/layout";

export const metadata: Metadata = {
  title: "Locations",
  description: "",
};

export default function SkillsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Skills />
    </Suspense>
  );
}
