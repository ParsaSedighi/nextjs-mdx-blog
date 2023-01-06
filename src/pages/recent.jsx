import getPosts from '../../helper/getPosts';
import Post from '../components/Post';

const recent = ({ posts }) => {
  return (
    <main>
      <div className="mx-16 mt-12 md:mx-24">
        <PostList posts={posts} />
      </div>
    </main>
  );
};

const PostList = ({ className, posts }) => {
  const postsArr = [];
  const allPosts = posts.map((post, index) => {
    postsArr.push(post);
    return <Post className="rounded-md shadow-2xl" post={post} index={index} />;
  });
  console.log(postsArr);
  return (
    <ul
      className={
        `grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ` + className
      }>
      {allPosts}
    </ul>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default recent;
