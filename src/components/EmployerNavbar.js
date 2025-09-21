"use client";

import Link from "next/link";

export default function EmployerNavbar() {
  return (
   <nav className="bg-white shadow-md p-3 sticky top-0 z-50  " >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl text-indigo-800 font-bold cursor-pointer">
            Employer Portal
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
           <Link href="/settings" className="text-gray-700 hover:text-indigo-600">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
