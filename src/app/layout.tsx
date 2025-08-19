import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathalye Vitoria - Portfolio Profissional",
  description: "Portfolio de Nathalye Vitoria, estudante de Mecatrônica no IFSP e Eletricista de Manutenção Eletroeletrônica no Senai. Especialista em automação, robótica e manutenção industrial.",
  keywords: ["Nathalye Vitoria", "Mecatrônica", "Eletricista", "Automação", "Robótica", "IFSP", "Senai", "Manutenção Industrial"],
  authors: [{ name: "Nathalye Vitoria" }],
  openGraph: {
    title: "Nathalye Vitoria - Portfolio Profissional",
    description: "Estudante de Mecatrônica e Eletricista de Manutenção Eletroeletrônica com foco em automação industrial e robótica.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathalye Vitoria - Portfolio Profissional",
    description: "Especialista em automação, robótica e manutenção industrial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}