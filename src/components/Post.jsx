import Link from 'next/link';
import Image from 'next/image';

const Post = ({ className, post, index }) => {
  return (
    <li className={className} key={index}>
      <Link href={'/blog/' + post.slug} passHref>
        <div className="relative transition-all group hover:scale-105">
          <Image
            className="object-cover transition-all rounded-md h-56 brightness-[0.15] group-hover:brightness-[0.25] grayscale group-hover:grayscale-0 max-h-56"
            src={post.frontMatter.thumbnailUrl}
            width="500"
            height="400"
          />
          <div className="flex items-center justify-center group">
            <div className="absolute text-center top-[75px]">
              <p className="px-3 text-xl text-white transition-all group-hover:-translate-y-5">
                {post.frontMatter.title}
              </p>
              <p className="text-xs text-gray-400 transition-all group-hover:-translate-y-5">
                {post.frontMatter.date}
              </p>
              <p className="mx-5 mt-4 text-sm text-gray-200 transition-all opacity-0 group-hover:opacity-100">
                {post.frontMatter.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Post;
