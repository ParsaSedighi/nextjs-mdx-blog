const popular = () => {
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

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default popular;
