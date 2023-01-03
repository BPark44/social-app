import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMP
  const comments = [
    {
      id: 1,
      desc: "That's no rocket...",
      name: "Jeff Bezos",
      userId: 1,
      profilePicture:
        "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment..." />
        <button>Submit</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
            <span className="date">48 minutes ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
