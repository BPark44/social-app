import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  //TEMP
  const posts = [
    {
      id: 1,
      name: "Elon Musk",
      userId: 1,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      desc: "Launch!",
      img: "http://spaceflightnow.com/wp-content/uploads/2020/01/49399916862_cd676f67f6_o-copy.jpg",
    },
    {
      id: 2,
      name: "Elon Musk",
      userId: 1,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      desc: "Hello and welcome to my first post...",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
