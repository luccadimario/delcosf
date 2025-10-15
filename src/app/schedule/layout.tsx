import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule - Delco Science Fair 2026",
  description:
    "View the complete schedule for the 2026 Delco Science Fair including important dates, event timeline, and venue information.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
