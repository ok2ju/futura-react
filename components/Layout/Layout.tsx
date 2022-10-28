/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import Link from 'next/link';
import { NavItem, MenuSection } from '../../constants/menu';

interface LayoutProps {
  nav: Array<NavItem>;
  menu: Array<MenuSection>;
  children: ReactNode;
}

const Layout = ({ nav, menu, children }: LayoutProps) => {
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
            {nav.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[250px] overflow-y-auto px-6 py-6">
          {menu.map((item, idx) => (
            <div key={idx} className="flex flex-col mb-4">
              <h4 className="text-base font-medium mb-1">{item.section}</h4>
              {item.children.map((child, childIdx) => (
                <Link
                  key={childIdx}
                  href={child.path}
                  className="text-sm font-light py-2"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto px-16 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
