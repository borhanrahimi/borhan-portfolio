import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Borhan Rahimi | Observability & Software Engineer",
  description:
    "Portfolio of Borhan Rahimi, an Observability Platform Engineering intern at Costco IT building reliable platforms and full-stack applications.",
  keywords: [
    "Borhan Rahimi",
    "observability engineer",
    "platform engineer",
    "software engineer",
    "Dynatrace",
    "DQL",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Borhan Rahimi" }],
  creator: "Borhan Rahimi",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Borhan Rahimi | Observability & Software Engineer",
    description:
      "Observability, platform engineering, and full-stack software projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
