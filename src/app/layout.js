// src/app/layout.js
import './globals.css';

export const metadata = {
  title: "Student Dashboard",
  description: "Blockchain Certificate Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
