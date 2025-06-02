import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mubin Developer - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, Docker, Kubernetes, and microservices architecture. View my projects and experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Microservices",
  ],
  authors: [{ name: "MUBIN" }],
  openGraph: {
    title: "Mubin - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in modern web technologies and cloud infrastructure",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
