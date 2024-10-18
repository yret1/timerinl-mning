import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Righteous.variable} ${ptSans.variable} antialiased bg-bg`}
      >
        {children}
      </body>
    </html>
  );
}
