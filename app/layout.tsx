import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Mounish | Senior Full Stack Developer & Technical Lead",
  description: "Portfolio of Sai Durga Mounish Madireddy, a Senior Full Stack Developer and Technical Lead specializing in Angular, Java, Spring Boot and enterprise modernization.",
  keywords: ["Senior Full Stack Developer", "Angular Developer", "Java Developer", "Spring Boot", "Technical Lead", "Hyderabad"],
  authors: [{ name: "Sai Durga Mounish Madireddy" }],
  openGraph: { title: "Sai Mounish | Senior Full Stack Developer", description: "Modernizing enterprise applications with Angular, Java and Spring Boot.", type: "website", locale: "en_IN" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
