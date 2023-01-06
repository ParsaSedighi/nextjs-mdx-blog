import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';

import { AiOutlinePushpin } from 'react-icons/ai';
import { useState } from 'react';

export default function Home({ posts }) {
  const [isPinned, setIsPinned] = useState(false);
  if (!isPinned) {
    for (let post of posts) {
      if (post.frontMatter.pin) {
        setIsPinned(true);
        break;
      }
    }
  }
  return (
    <>
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
          <PostList posts={posts} />
        </div>
      </main>
    </>
  );
}

const PostList = ({ className, posts, pinned = false }) => {
  const pinnedPosts = posts.map((post, index) => {
    if (post.frontMatter.pin)
      return (
        <Post className="rounded-md shadow-2xl" post={post} index={index} />
      );
  });

  const restPosts = posts.map((post, index) => {
    if (!post.frontMatter.pin)
      return (
        <Post className="rounded-md shadow-2xl" post={post} index={index} />
      );
  });
  return (
    <ul
      className={
        `grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ` + className
      }>
      {pinned ? pinnedPosts : restPosts}
    </ul>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
