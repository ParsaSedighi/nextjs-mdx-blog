import getPosts from '../../helper/getPosts';
import Post from '../components/Post';
import bubbleSort from '../../helper/bubbleSort';

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
  var allPosts = [];
  posts.map((post) => {
    allPosts.push(post);
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
      {sortedPosts}
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
