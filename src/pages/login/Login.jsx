import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Me.</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          alias aliquam hic reiciendis tempora voluptatibus repudiandae
          voluptates corrupti in inventore laboriosam necessitatibus molestias
          sint, eveniet culpa quam officiis et. Numquam!
          <p></p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {/* Temp login function */}
            <Link to="/">
              <button>Login</button>
            </Link>
            {/* <button onClick={handleLogin}>Login</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
