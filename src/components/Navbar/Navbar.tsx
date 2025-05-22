import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Menu, QuestionMark } from '../svg';
import { navbarItems } from './config';

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const [word, setWord] = useState('');
  const wordRef = useRef(word);

  const [showMenu, setShowNavigation] = useState(false);

  const debouncedSearch = useCallback(
    (value: string) => {
      router.push({
        pathname: '/',
        hash: value,
      });
    },
    [router]
  );

  useEffect(() => {
    const handleCloseNavList = () => {
      setShowNavigation(false);
    };

    window.addEventListener('resize', handleCloseNavList);
    window.addEventListener('scroll', handleCloseNavList);
    return () => {
      window.removeEventListener('resize', handleCloseNavList);
      window.removeEventListener('scroll', handleCloseNavList);
    };
  }, []);

  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  useEffect(() => {
    if (router.pathname === '/') {
      const timer = setTimeout(() => {
        debouncedSearch(word);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [word, router.pathname, debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleShowNavList = () => {
    setShowNavigation(!showMenu);
  };

  // There will be animation when resizing, use -right-full to make it animate offscreen.
  const menuDisplay = showMenu ? 'scale-100 -right-6' : 'scale-0 -right-full';

  return (
    <nav className="fixed h-16 w-screen border-b border-slate-700 bg-slate-900/95 px-6 text-slate-100">
      <div className="w-screen-xl relative mx-auto flex h-full max-w-screen-xl justify-between">
        <div className="flex items-center">
          <div className="select-none whitespace-nowrap text-3xl font-bold hover:text-white">
            <Link href="/">新典</Link>
          </div>
          <div className={`menu ${menuDisplay}`}>
            <div className="flex flex-col px-5 py-2 sm:flex-row">
              {navbarItems.map(
                ({ path, pathName }): JSX.Element => (
                  <Link key={path} href={path}>
                    <a className="rounded py-2 px-2 hover:bg-slate-400 hover:font-medium hover:text-black sm:mx-2">
                      {pathName}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="item-center flex">
            <div className="flex items-center px-4">
              {router.pathname === '/' && (
                <input
                  className={`input-search-word focus:shadow-outline focus:outline-none sm:w-52`}
                  onChange={handleInputChange}
                  placeholder="search"
                  inputMode="text"
                  type="text"
                  value={word}
                />
              )}
            </div>
            <button className="hidden text-white hover:text-gray-100 sm:block">
              <QuestionMark />
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="block text-white hover:text-slate-100 focus:text-slate-100 focus:outline-none"
              onClick={handleShowNavList}
              type="button"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
