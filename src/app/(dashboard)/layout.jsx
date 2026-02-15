import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "../lib/assets";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 gap-4 h-screen">
        <div className="bg-gray-800 col-span-2">
          <div className="p-4 flex items-center justify-center py-6">
            <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={80} />
            </Link>
          </div>
          <ul>
            <Link
              href="/user_dashboard/user_home"
              className="block p-4 hover:bg-gray-900"
            >
              User Home
            </Link>
            <Link
              href="/user_dashboard/product_management"
              className="block p-4 hover:bg-gray-900"
            >
              Product Management
            </Link>
          </ul>
        </div>
        <div className="col-span-7">{children}</div>
      </div>
    </div>
  );
}
