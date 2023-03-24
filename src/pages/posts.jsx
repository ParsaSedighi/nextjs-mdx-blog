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
      <div className="mx-16 mt-8 md:mx-24">
        <div className="items-center justify-center w-full md:flex md:flex-row-reverse">
          <div className="flex items-center space-x-10 md:w-1/2">
            <div className="flex-grow">
              <Dropdown
                defaultOption={'Categories'}
                options={[
                  'Category 1',
                  'Category 2',
                  'Category 3',
                  'Category 4',
                ]}
              />
            </div>
            <div className="w-fit">
              <Dropdown defaultOption={'Sort by'} options={['Title', 'Date']} />
            </div>
          </div>
          <div className="justify-center mx-1 mt-5 text-xl text-gray-300 md:m-0 md:w-1/2">
            {0} Posts found
          </div>
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
