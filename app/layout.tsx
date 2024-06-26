import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AuthProvider from "./Provider/AuthProvider";

export const metadata: Metadata = {
  title: "Store App",
  description: "Generated by create next app",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirFont.className} min-h-screen  bg-slate-200`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
