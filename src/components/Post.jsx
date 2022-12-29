import Link from 'next/link';
import Image from 'next/image';

const Post = ({ post, index }) => {
  return (
    <>
      <Link href={'/blog/' + post.slug} passHref key={index}>
        <div className="relative transition-all group hover:scale-105">
          <Image
            className="object-cover transition-all rounded-md h-56 brightness-[0.15] group-hover:brightness-[0.25] grayscale group-hover:grayscale-0 max-h-56"
            src={post.frontMatter.thumbnailUrl}
            width="500"
            height="400"
          />
          <div className="flex justify-center">
            <div className="absolute text-center top-12">
              <p className="px-3 text-xl text-white">
                {post.frontMatter.title}
              </p>
              <p className="text-xs text-gray-300">{post.frontMatter.date}</p>
              <p className="mx-5 mt-6 text-sm text-gray-200">
                {post.frontMatter.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
