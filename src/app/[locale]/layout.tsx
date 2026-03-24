import ClientLayout from "@/components/layout/ClientLayout";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ProfileCard from "@/components/layout/ProfileCard";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berke Özbek | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, TypeScript and Tailwind CSS. Available for freelance and full-time positions.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Berke Özbek" }],
  openGraph: {
    title: "Berke Özbek | Frontend Developer",
    description: "Frontend developer specializing in React, Next.js, TypeScript and Tailwind CSS.",
    url: "https://berkeozbek.com",
    siteName: "Berke Özbek Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <div className="flex flex-col md:flex-row gap-4 p-6 md:max-w-[1400px] mx-auto">
              <ProfileCard />
              <Card className="md:w-[1100px] md:mx-auto">
                <Navbar />
                <main className="">
                  <ClientLayout>{children}</ClientLayout>
                </main>
              </Card>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
