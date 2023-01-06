import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(
      path.join(`posts/${slug}.mdx`),
      'utf8'
    );
    const { data } = matter(fileContents);
    return {
      data,
      slug,
    };
  });

  return allPostsData;
};

export default getPosts;
