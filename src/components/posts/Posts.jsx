import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  //TEMP

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
