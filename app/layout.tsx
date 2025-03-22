import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const ptSans = localFont({
  src: "./fonts/PTSans-Regular.ttf",
  variable: "--font-pt-sans",
  weight: "100 900",
});
const Righteous = localFont({
  src: "./fonts/Righteous-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Interval | All your timer needs",
  description: "A timer app for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Righteous.variable} ${ptSans.variable} antialiased bg-bg overflow-hidden`}
      >
        {children}
      </body>
      <Script src="https://feedbacked-plugin.onrender.com/script/67debe91455986dacc585469/d8c4d5e3-95e8-4592-9f0e-0b94decb0308" />
    </html>
  );
}
