import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/043/120/123/large/wizix-nakamoto-master-full.jpg?1636383169"
                alt=""
              />
              <span>Satoshi Nakamoto</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://tvline.com/wp-content/uploads/2018/08/jerry-seinfeld-season-10-interview.jpg"
                alt=""
              />
              <span>Jerry Seinfeld</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.usmagazine.com/wp-content/uploads/2020/07/Jermaine-Cole-J-Cole-Confirms-He-Has-2-Kids.jpg?quality=86&strip=all"
                alt=""
              />
              <p>
                <span>J. Cole </span>
                Liked your photo
              </p>
            </div>
            <span>5 mins ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://people.com/thmb/-tYoI68hIxqBp81DtklJvogDZzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/mac-miller-81-96676f9c42a34bfc801059afe0269b86.jpg"
                alt=""
              />
              <p>
                <span>Mac Miller </span>
                Posted a new video
              </p>
            </div>
            <span>37 mins ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2010/07/04/1101536a.jpg"
                alt=""
              />
              <p>
                <span>Steve Carell </span>
                Liked your photo
              </p>
            </div>
            <span>49 mins ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.self.com/photos/621e7eda86a565b86fdb8d70/master/pass/1373905219"
                alt=""
              />
              <p>
                <span>Ryan Reynolds </span>
                Posted a status
              </p>
            </div>
            <span>2 hours ago</span>
          </div>
        </div>
        <div className="item">
          <span>Friends Online</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.usmagazine.com/wp-content/uploads/2020/07/Jermaine-Cole-J-Cole-Confirms-He-Has-2-Kids.jpg?quality=86&strip=all"
                alt=""
              />
              <div className="online" />
              <span>J. Cole </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://people.com/thmb/-tYoI68hIxqBp81DtklJvogDZzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/mac-miller-81-96676f9c42a34bfc801059afe0269b86.jpg"
                alt=""
              />
              <div className="online" />
              <span>Mac Miller </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2010/07/04/1101536a.jpg"
                alt=""
              />
              <div className="online" />
              <span>Steve Carell </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.self.com/photos/621e7eda86a565b86fdb8d70/master/pass/1373905219"
                alt=""
              />
              <div className="online" />
              <span>Ryan Reynolds </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
