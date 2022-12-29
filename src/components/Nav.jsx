import Link from 'next/link';
import styles from '../../styles/Link.module.css';

const Nav = () => {
  return (
    <nav>
      <div className="flex items-center justify-center px-8 py-5 mx-8 md:mx-16 md:justify-start">
        <div className="flex items-end space-x-8">
          <Link className={'text-3xl py-1' + ` ${styles.link}`} href="#">
            MDX Blog
          </Link>
          <Link
            className={'hidden text-xl md:block py-1' + ` ${styles.link}`}
            href="#">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
