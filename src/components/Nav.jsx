import Link from 'next/link';
import { useState } from 'react';

import { AiOutlineHome, AiOutlineBlock, AiOutlineFire } from 'react-icons/ai';
import { BiCategoryAlt, BiBookmark } from 'react-icons/bi';

import Hamburger from 'hamburger-react';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="mx-16">
        <div className="absolute right-5 top-9 md:hidden">
          <Hamburger
            color="#66FCF1"
            onToggle={() => {
              toggleMenu();
            }}
            rounded
          />
        </div>
        <div className="flex items-center justify-center py-5">
          <div className="flex-grow"></div>
          <Link
            href="/"
            className="mt-5 text-4xl font-bold text-turquoise-blue">
            MDX Blog
          </Link>
          <div className="flex-grow"></div>
        </div>

        <nav
          className={
            showMenu
              ? `block opacity-100 transition-all md:hidden`
              : `absolute -z-50 opacity-0 transition-all md:hidden`
          }>
          <div className="p-6 rounded-lg md:mx-24 bg-gunmetal">
            <ul className="mx-8 space-y-1">
              <li key="1">
                <Link
                  href="#"
                  className="flex items-center justify-center py-4 text-white transition-all rounded hover:text-gray-200 hover:bg-raisin-black">
                  {/* <AiOutlineHome className="w-4" /> */}
                  <p>Home</p>
                </Link>
              </li>
              <li key="2">
                <Link
                  href="#"
                  className="flex items-center justify-center py-4 space-x-2 text-white transition-all rounded hover:text-gray-200 hover:bg-raisin-black">
                  {/* <AiOutlineBlock className="w-4" /> */}
                  <p>All posts</p>
                </Link>
              </li>
              <li key="3">
                <Link
                  href="#"
                  className="flex items-center justify-center py-4 space-x-2 text-white transition-all rounded hover:text-gray-200 hover:bg-raisin-black">
                  {/* <AiOutlineFire className="w-4" /> */}
                  <p>Popular</p>
                </Link>
              </li>
              <li key="4">
                <Link
                  href="#"
                  className="flex items-center justify-center py-4 space-x-2 text-white transition-all rounded hover:text-gray-200 hover:bg-raisin-black">
                  {/* <BiCategoryAlt className="w-4" /> */}
                  <p>Categories</p>
                </Link>
              </li>
              <li key="5">
                <Link
                  href="#"
                  className="flex items-center justify-center py-4 space-x-2 text-white transition-all rounded hover:text-gray-200 hover:bg-raisin-black">
                  {/* <BiBookmark className="w-4" /> */}
                  <p>Bookmarks</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="justify-center hidden mt-5 space-x-16 text-lg text-white md:flex">
          <li key="1">
            <Link
              className="flex items-center space-x-1 hover:text-cadet-blue"
              href="/">
              <AiOutlineHome className="w-4" />
              <p>Home</p>
            </Link>
          </li>
          <li key="2">
            <Link
              className="flex items-center space-x-1 hover:text-cadet-blue"
              href="/posts">
              <AiOutlineBlock className="w-5" />
              <p>All posts</p>
            </Link>
          </li>
          <li key="3">
            <Link
              className="flex items-center space-x-1 hover:text-cadet-blue"
              href="/popular">
              <AiOutlineFire className="w-4" />
              <p>Popular</p>
            </Link>
          </li>
          <li key="4">
            <Link
              className="flex items-center space-x-1 hover:text-cadet-blue"
              href="/categories">
              <BiCategoryAlt className="w-4" />
              <p>Categories</p>
            </Link>
          </li>
          <li key="5">
            <Link
              className="flex items-center space-x-1 hover:text-cadet-blue"
              href="/bookmarks">
              <BiBookmark className="w-4" />
              <p>Bookmarks</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
