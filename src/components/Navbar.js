"use client";

import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Student Dashboard
        </Link>
        <div className="flex items-center space-x-4">
           <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-indigo-600">
            Profile
          </Link>
          <Link href="/settings" className="text-gray-700 hover:text-indigo-600">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
