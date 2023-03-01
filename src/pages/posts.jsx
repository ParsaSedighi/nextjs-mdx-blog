import getPosts from '../../helper/getPosts';
import Dropdown from '../components/Dropdown';

import { useRouter } from 'next/router';
import { useState } from 'react';

const posts = ({ posts }) => {
  const router = useRouter();
  const { filter } = router.query;

  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState(filter);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = (s) => {
    setSortBy(s);
    setOpen(false);
  };

  return (
    <>
      <div className="mx-16 md:mx-24 mt-7">
        <div className="w-1/12">
          <Dropdown options={['Title', 'Date']} />
        </div>
      </div>
    </>
  );
};

export default posts;

const PostList = () => {
  return (
    <>
      <div>yes</div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
