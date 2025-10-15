import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Delco Science Fair 2026",
  description:
    "Register for the 2026 Delco Science Fair. Free registration for students K-12 in Delaware County. Deadline: February 15, 2025.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
