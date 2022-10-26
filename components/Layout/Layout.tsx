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
          <Link href="/">
            <a className="flex items-center justify-start">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              />
              <span className="ml-3">Futura</span>
            </a>
          </Link>
          <nav className="flex space-x-8 ml-4">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[250px] overflow-y-auto px-6 py-6">
          <div className="flex flex-col mb-4">
            <h4 className="text-base font-medium mb-1">Overview</h4>
            <Link href="/">
              <a className="text-sm font-light py-2">Introduction</a>
            </Link>
            <Link href="/">
              <a className="text-sm font-light py-2">Getting started</a>
            </Link>
            <Link href="/">
              <a className="text-sm font-light py-2">Styling</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-medium mb-1">Components</h4>
            <Link href="/components/accordion">
              <a className="text-sm font-light py-2">Accordion</a>
            </Link>
            <Link href="/components/button">
              <a className="text-sm font-light py-2">Button</a>
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
