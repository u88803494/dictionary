import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import { useAppDispatch } from 'features/hook';
import { getDefinitions } from 'features/dictionary/dictionary.service';
import { Menu, QuestionMark } from '../svg';
import { navbarItems } from './config';

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
  }, [dispatch, word]);

  const handleChangeWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const navigationDisplay = showNavigation ? '' : 'hidden';
  const navigationMdStyle = 'md:static md:flex md:items-center md:justify-between md:shadow-none';

  return (
    <nav className="fixed h-16 w-screen border-b border-slate-700 bg-slate-900 px-6 text-gray-100">
      <div className="w-screen-xl relative mx-auto flex h-full max-w-screen-xl justify-between">
        <div className="flex items-center">
          <div className="hover whitespace-nowrap text-3xl font-bold">新典</div>
          <div
            className={`absolute top-[60px] -right-6 bg-slate-900 shadow-md shadow-slate-900 ${navigationMdStyle} ${navigationDisplay}`}
          >
            <div className="flex flex-col px-5 py-2 md:flex-row">
              {navbarItems.map(({ path, pathName }) => (
                <Link key={path} href={path}>
                  <a className="rounded py-2 px-2 hover:bg-slate-400 hover:font-medium hover:text-black md:mx-2">
                    {pathName}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="item-center flex">
            <div className="flex items-center">
              <input
                className="focus:shadow-outline mx-4 h-10 rounded bg-slate-600 px-2 text-lg leading-tight placeholder-gray-200 focus:outline-none"
                onChange={handleChangeWord}
                placeholder="search"
                type="text"
                value={word}
              />
            </div>
            <button className="hidden text-white hover:text-gray-100 md:block">
              <Menu />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="block text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none"
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
