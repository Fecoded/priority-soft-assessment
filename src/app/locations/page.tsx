// Core
import { Suspense } from "react";
import { Metadata } from "next";

// Layout
import { Locations } from "@src/layout";

export const metadata: Metadata = {
  title: "Locations",
  description: "",
};

export default function LocationsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Locations />
    </Suspense>
  );
}
