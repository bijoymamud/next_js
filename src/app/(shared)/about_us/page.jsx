import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div className="h-screen container mx-auto flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">This is the About Us page</h1>

      <Link href="/about_us/our_team">
        <button className="bg-emerald-500 text-white px-4 py-2 font-semibold  cursor-pointer hover:bg-emerald-600 transition-colors">
          Go to Our Team
        </button>
      </Link>
    </div>
  );
}
