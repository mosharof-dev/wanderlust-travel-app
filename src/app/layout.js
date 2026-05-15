import dns from "node:dns"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBer from "@/components/shared/NavBer";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlast",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBer />
        {/* container mx-auto px-4 sm:px-6 lg:px-8 */}
        <main className="grow ">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
