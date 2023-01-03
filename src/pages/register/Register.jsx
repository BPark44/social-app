import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Me.</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          alias aliquam hic reiciendis tempora voluptatibus repudiandae
          voluptates corrupti in inventore laboriosam necessitatibus molestias
          sint, eveniet culpa quam officiis et. Numquam!
          <p></p>
          <span>Do have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
