import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Query App Movies",
  description: "Application using React Query to get Movies from IMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main className="App">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
