import { FC, useState } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const navigationDisplay = showNavigation ? '' : 'hidden';
  const navigationMdStyle =
    'md:static md:flex md:items-center md:justify-between md:shadow-none';

  return (
    <nav className="fixed w-screen h-16 px-6 bg-white shadow-md">
      <div className="relative h-full max-w-screen-xl w-screen-xl mx-auto flex justify-between">
        <div className="flex items-center">
          <div className="text-3xl text-gray-800 font-bold whitespace-nowrap hover:text-gray-800">
            新典
          </div>
          <div
            className={`absolute top-16 -right-6 bg-white shadow-md ${navigationMdStyle} ${navigationDisplay}`}
          >
            <div className="flex flex-col px-5 md:flex-row">
              <Link href="/">
                <a className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">
                  About
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex item-center">
            <div className="flex items-center">
              <input
                className="h-8 mx-4 px-2 leading-tight text-sm text-gray-400 bg-gray-900 rounded placeholder-gray-200 focus:outline-none focus:shadow-outline"
                placeholder="search"
                type="text"
              />
            </div>
            <button className="hidden text-gray-900 hover:text-gray-700 md:block">
              <svg viewBox="0 0 30 30" className="h-6 w-6 fill-current">
                <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM16.25 23.75H13.75V21.25H16.25V23.75ZM18.8375 14.0625L17.7125 15.2125C16.8125 16.125 16.25 16.875 16.25 18.75H13.75V18.125C13.75 16.75 14.3125 15.5 15.2125 14.5875L16.7625 13.0125C17.225 12.5625 17.5 11.9375 17.5 11.25C17.5 9.875 16.375 8.75 15 8.75C13.625 8.75 12.5 9.875 12.5 11.25H10C10 8.4875 12.2375 6.25 15 6.25C17.7625 6.25 20 8.4875 20 11.25C20 12.35 19.55 13.35 18.8375 14.0625Z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              onClick={handleShowNavigation}
              type="button"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
