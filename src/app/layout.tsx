import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Nirina",
  description: "Un portfolio créé avec Next.js et Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="fr" className="h-full">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="container flex-1 mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>)
  ;
}