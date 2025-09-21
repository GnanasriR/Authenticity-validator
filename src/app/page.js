"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to the Blockchain Certificate System</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Student Dashboard */}
        <Link
          href="/student"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.57L12 20l-7-2 1-4" />
          </svg>
          <span className="text-xl">Student Dashboard</span>
        </Link>

        {/* Employer Portal */}
        <Link
          href="/employer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v4M5 11h14M5 19h14" />
          </svg>
          <span className="text-xl">Employer Portal</span>
        </Link>
      </div>
    </div>
  );
}
