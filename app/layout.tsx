import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Cyber_Stop - Lan House 100% Automatizada",
  description:
    "A maior e mais inovadora lan house 100% automatizada da cidade. Gaming, streaming e tecnologia de ponta.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${orbitron.variable} ${inter.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
