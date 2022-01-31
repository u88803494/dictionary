import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { Menu, QuestionMark } from '../svg';

const Navbar: FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const navigationDisplay = showNavigation ? '' : 'hidden';
  const navigationMdStyle = 'md:static md:flex md:items-center md:justify-between md:shadow-none';

  return (
    <nav className="fixed w-screen h-16 px-6 bg-white shadow-md">
      <div className="relative h-full max-w-screen-xl w-screen-xl mx-auto flex justify-between">
        <div className="flex items-center">
          <div className="text-3xl text-gray-800 font-bold whitespace-nowrap hover:text-gray-800">新典</div>
          <div className={`absolute top-16 -right-6 bg-white shadow-md ${navigationMdStyle} ${navigationDisplay}`}>
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
              <Menu />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              onClick={handleShowNavigation}
              type="button"
            >
              <QuestionMark />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
