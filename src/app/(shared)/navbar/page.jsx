"use client";

import Link from "next/link";
import { Phone, Search, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));

  if (!pathname.includes("dashboard")) {
    return (
      <nav className="sticky top-0 z-50 w-full bg-white dark:bg-white border-b border-gray-100 dark:border-zinc-800 transition-all">
        <div className="px-20 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex flex-col items-center group cursor-pointer">
              <Image
                src="https://pngimg.com/d/red_bull_PNG1.png"
                alt="Logo"
                width={200}
                height={80}
              />
            </div>

            <ul className="hidden md:flex items-center space-x-8 text-base font-semibold dark:text-black text-slate-600 ">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li className="cursor-pointer hover:text-emerald-500 transition-colors">
                <Search size={18} strokeWidth={2.5} />
              </li>
            </ul>

            <div className="flex items-center space-x-3">
              {/* Phone/Contact (Hidden on small mobile) */}
              <a
                href="tel:+9779841123456"
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-full transition-all"
              >
                <Phone size={16} />
                <span>+977 9841123456</span>
              </a>

              <Link
                href="/sign_in"
                className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign_up"
                className="px-5 py-2.5 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg shadow-emerald-200 dark:shadow-none transition-transform active:scale-95"
              >
                Sign Up
              </Link>

              <button className="md:hidden p-2 text-slate-600 dark:text-zinc-400">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}
