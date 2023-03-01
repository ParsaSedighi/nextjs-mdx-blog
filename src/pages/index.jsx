import Post from '../components/Post';

import getPosts from '../../helper/getPosts';
import bubbleSort from '../../helper/bubbleSort';

import {
  AiOutlinePushpin,
  AiOutlineFieldTime,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

export default function Home({ posts }) {
  const [isPinned, setIsPinned] = useState(false);
  if (!isPinned) {
    for (let post of posts) {
      if (post.data.pin) {
        setIsPinned(true);
        break;
      }
    }
  }
  return (
    <main className="pb-7">
      {isPinned ? (
        <div className="p-6 mx-16 mt-12 rounded-lg md:mx-24 bg-gunmetal">
          <div className="flex items-center mb-4 text-lg text-turquoise-blue">
            <AiOutlinePushpin />
            <p className="pl-1">Pinned</p>
          </div>
          <PostList posts={posts} pinned={true} />
        </div>
      ) : (
        ''
      )}

      <div className="mx-16 md:mx-24 mt-7">
        <div className="flex items-center mb-4 ml-4 text-lg text-turquoise-blue">
          <AiOutlineFieldTime />
          <p className="pl-1">Recent</p>
          <div className="flex-grow"></div>
          <Link
            href={{ pathname: '/posts', query: { filter: 'recent' } }}
            className="flex items-center mr-4">
            <p className="pr-1">View More</p>
            <AiOutlineArrowRight />
          </Link>
        </div>
        <PostList posts={posts} />
      </div>
      <div className="mx-16 md:mx-24 mt-7"></div>
    </main>
  );
}

const PostList = ({ className, posts, pinned = false }) => {
  const pinnedPosts = posts.map((post, index) => {
    if (post.data.pin)
      return (
        <Post className="rounded-md shadow-2xl" post={post} index={index} />
      );
  });

  var allPosts = [];
  let temp = 8;
  posts.map((post) => {
    if (temp > 0) {
      allPosts.push(post);
      temp--;
    }
  });

  bubbleSort(allPosts, allPosts.length);

  const sortedPosts = allPosts.map((post, index) => {
    return <Post className="rounded-md shadow-2xl" post={post} index={index} />;
  });
  return (
    <ul
      className={
        `grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ` + className
      }>
      {pinned ? pinnedPosts : sortedPosts}
    </ul>
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
