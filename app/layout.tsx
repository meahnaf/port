import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Ahnaf Ali | AI Backend Engineer",
  description: "AI Backend Engineer specializing in LLM systems, RAG pipelines, and scalable backend services. Building intelligent AI applications with FastAPI, Azure, and modern cloud technologies.",
  keywords: ["AI Engineer", "LLM", "RAG", "FastAPI", "Backend Developer", "Azure", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
