import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloude Skill Platform",
  description: "Enterprise Claude skills catalog with department and industry packaging insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
