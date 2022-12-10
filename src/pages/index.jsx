import Nav from '../components/Nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <main className="mx-24 mt-7">
        <div>
          {posts.map((post, index) => {
            return <Post post={post} index={index} />;
          })}
        </div>
      </main>
    </>
  );
}

const Post = ({ post, index }) => {
  return (
    <>
      <Link href={'/' + post.slugs} passHref key={index}>
        <div className="flex justify-between pl-5 my-6 border border-stone-700 rounded-md bg-gradient-to-r from-[#1a1a1a] to-yellow-900 h-128">
          <div className="flex-grow">{post.frontMatter.title}</div>
          <div className="w-4/12">
            <Image
              className="rounded-r"
              src={post.frontMatter.thumbnailUrl}
              width="500"
              height="400"></Image>
          </div>
        </div>
      </Link>
    </>
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
