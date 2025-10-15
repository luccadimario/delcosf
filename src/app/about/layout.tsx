import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Delco Science Fair",
  description:
    "Learn about the Delco Science Fair - 67 years of inspiring young scientists and innovators in Delaware County.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
