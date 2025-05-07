import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Shashank Parchure",
  description: "Created by Shashank Parchure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${geistSans.variable} ${geistMono.variable} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >{children}
        
      </body>
    </html>
  );
}
