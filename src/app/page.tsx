import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "Traksta" },
  description:
    "The elite route-generation tool for runners and walkers that transforms any distance into a perfectly optimized, instantly navigable path.",
};

export default function Page() {
  return <HomePage />;
}
