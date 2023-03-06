import Link from 'next/link';
import {
  AiOutlineHome,
  AiOutlineBlock,
  AiOutlineFire,
  AiOutlineMenu,
} from 'react-icons/ai';
import { BiCategoryAlt, BiBookmark } from 'react-icons/bi';

import MenuButton from './MenuButton';

const Nav = () => {
  return (
    <>
      <nav className="mx-16">
        <div className="flex items-center justify-center py-5">
          <div className="flex-grow"></div>
          <Link
            href="/"
            className="mt-5 text-4xl font-bold text-turquoise-blue">
            MDX Blog
          </Link>
          <div className="flex-grow"></div>
          <div className="mt-7">
            {/* get it outside of here and make it absolute */}
            <MenuButton />
          </div>
        </div>

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
