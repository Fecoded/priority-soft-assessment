// Core
import { Suspense } from "react";
import { Metadata } from "next";

// Layout
import { Swaps } from "@src/layout";

export const metadata: Metadata = {
  title: "Locations",
  description: "",
};

export default function SwapsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Swaps />
    </Suspense>
  );
}
