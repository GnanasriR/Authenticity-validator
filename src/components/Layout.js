"use client";
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Student Dashboard' }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;