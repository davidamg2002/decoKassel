import React from "react";
import { Link } from "react-router-dom";

const LoginContent = () => {
  return (
    <div>
      <div className="login-content-header">
        <button className="login-btn">Login</button>
        <p>
          New customer ?
          <Link to="/form">
            <span className="form-link"> Sign up now</span>
          </Link>
        </p>
      </div>
      <div className="login-content-footer">
        <ul className="login-sublinks">
          <li>
            <Link to="/">my profile</Link>
          </li>
          <li>
            <Link to="/">order</Link>
          </li>
          <li>
            <Link to="/">Restitute</Link>
          </li>
          <li>
            <Link to="/">help & support</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginContent;
