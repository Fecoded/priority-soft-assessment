// Core
import { Suspense } from "react";
import { Metadata } from "next";

// Layout
import { Shifts } from "@src/layout";

export const metadata: Metadata = {
  title: "Shifts",
  description: "",
};

export default function LocationsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Shifts />
    </Suspense>
  );
}
