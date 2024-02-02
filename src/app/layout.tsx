import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import { getConfiguration } from "@/services/get-configuration";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todays top movies",
  description: "View the latest popular movies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getConfiguration();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100 justify-between sticky top-0 z-10">
          <Link className="btn btn-ghost text-xl" href="/">
            GoTickets Movies
          </Link>
          <a
            href="https://gotickets.com/"
            className="btn btn-outline btn-sm btn-prmary"
            target="_blank"
          >
            GoTickets &#8594;
          </a>
        </div>
        {children}
        <footer className="p-6 bg-base-100 flex justify-center align-middle gap-4 text-neutral-content text-center">
          <p>Content provided by:</p>
          <Image
            src="blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="The movie database"
            width="300"
            height="22"
          />
        </footer>
      </body>
    </html>
  );
}
