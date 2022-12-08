import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className="flex items-center justify-center px-8 py-5 mx-8 border-b-2 border-stone-600 md:mx-16 md:justify-start">
        <div className="flex items-end space-x-8">
          <Link className="text-3xl" href="#">
            MDX Blog
          </Link>
          <Link className="hidden text-xl md:block" href="#">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
