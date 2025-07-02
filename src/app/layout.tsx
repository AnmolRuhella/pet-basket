import type { Metadata } from "next";
import "./globals.css";
import Header from "@/shared/components/Header";

export const metadata: Metadata = {
  title: "PetBasket",
  description: "Find your perfect pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
