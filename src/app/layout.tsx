import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import localFont from "next/font/local";
import type { ReactNode } from "react";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
