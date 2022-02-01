import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import { Menu, QuestionMark } from '../svg';
import { useAppDispatch } from 'features/hook';
import { getDefinitions } from 'features/dictionary/dictionary.service';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const [showNavigation, setShowNavigation] = useState(false);
  const [word, setWord] = useState('算計');

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getDefinitions(word));
  }, [word]);

  const handleChangeWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const navigationDisplay = showNavigation ? '' : 'hidden';
  const navigationMdStyle = 'md:static md:flex md:items-center md:justify-between md:shadow-none';

  return (
    <nav className="fixed h-16 w-screen bg-white px-6 shadow-md">
      <div className="w-screen-xl relative mx-auto flex h-full max-w-screen-xl justify-between">
        <div className="flex items-center">
          <div className="whitespace-nowrap text-3xl font-bold text-gray-800 hover:text-gray-800">新典</div>
          <div className={`absolute top-16 -right-6 bg-white shadow-md ${navigationMdStyle} ${navigationDisplay}`}>
            <div className="flex flex-col px-5 md:flex-row">
              <Link href="/">
                <a className="rounded py-2 px-2 text-gray-800 hover:bg-gray-900 hover:font-medium hover:text-gray-100 md:mx-2">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="rounded py-2 px-2 text-gray-800 hover:bg-gray-900 hover:font-medium hover:text-gray-100 md:mx-2">
                  About
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="item-center flex">
            <div className="flex items-center">
              <input
                className="focus:shadow-outline mx-4 h-10 rounded bg-gray-900 px-2 text-lg leading-tight text-gray-400 placeholder-gray-200 focus:outline-none"
                onChange={handleChangeWord}
                placeholder="search"
                type="text"
                value={word}
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
