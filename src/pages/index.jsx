import Nav from '../components/Nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <main className="mx-24 mt-7">
        <PostList posts={posts} />
      </main>
    </>
  );
}

const PostList = ({ posts }) => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post, index) => {
        return <Post post={post} index={index} />;
      })}
    </div>
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
