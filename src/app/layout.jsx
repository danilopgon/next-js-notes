import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "danilopgon's Note App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="bg-slate-200 border-gray-200">
            <div className="max-w-screen flex flex-wrap items-center gap-10 mx-auto p-3 py-5">
              <Link href="/">Home</Link>
              <Link href="/notes">Notes</Link>
            </div>
          </nav>
        </header>
        <main className="h-screen w-full flex flex-col justify-start content-center">
          {children}
        </main>
      </body>
    </html>
  );
}
