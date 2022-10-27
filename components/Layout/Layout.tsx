/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-white flex flex-col h-screen">
      <div className="mx-auto max-w-7xl px-4 border-b-[1px] border-gray-100 w-full">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center justify-start">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />
            <span className="ml-3">Futura</span>
          </Link>
          <nav className="flex space-x-8 ml-4">
            <Link
              href="/"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[250px] overflow-y-auto px-6 py-6">
          <div className="flex flex-col mb-4">
            <h4 className="text-base font-medium mb-1">Overview</h4>
            <Link href="/" className="text-sm font-light py-2">
              Introduction
            </Link>
            <Link href="/getting-started" className="text-sm font-light py-2">
              Getting started
            </Link>
            <Link href="/" className="text-sm font-light py-2">
              Styling
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-medium mb-1">Components</h4>
            <Link
              href="/components/accordion"
              className="text-sm font-light py-2"
            >
              Accordion
            </Link>
            <Link href="/components/button" className="text-sm font-light py-2">
              Button
            </Link>
            <Link href="/components/table" className="text-sm font-light py-2">
              Table
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-16 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
