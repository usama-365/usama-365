import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import Header from "@/components/header/header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Usama | Personal Portfolio",
  description:
    "Meet Usama, a Full Stack Web Engineer & Designer. Dive into secure, modern, and innovative web solutions. Connect for a tech journey together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <ThemeToggleButton />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
