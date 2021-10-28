import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-wrapper p-3">
      <h2 className="title is-3">Sign up</h2>
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
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Confirm password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control buttons mt-4">
            <button class="button is-success">Sign up</button>
            <Link to="/login" className="button is-link is-light">
              ...or login
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

export default Signup;
