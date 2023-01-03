import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';

const components = { SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div className="p-8 mx-16 mt-10 rounded-md md:mx-24 bg-gunmetal">
      <h1 className="flex font-serif text-4xl font-medium text-white">
        {title}
      </h1>
      <p className="pt-2 pb-2 text-gray-400">{date}</p>
      <br />
      <div className="prose prose-invert max-w-none">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
