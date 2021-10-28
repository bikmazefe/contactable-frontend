import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-wrapper p-3">
      <h2 className="title is-3">Login</h2>
      <form action="">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control buttons mt-4">
            <button class="button is-success">Login</button>
            <Link to="/signup" className="button is-link is-light">
              ...or sign up
            </Link>
          </p>
        </div>
      </form>
      <article class="message is-info mt-3 demo-msg">
        <div class="message-header">
          <p>Info</p>
        </div>
        <div class="message-body">
          You can use these credentials to see the demo with dummy data. <br />
          <strong>Email: </strong>
          <em>user1@example.com</em>
          <br />
          <strong>Password: </strong>
          <em>12345678</em>
          <br />
        </div>
      </article>
    </div>
  );
};

export default Login;
