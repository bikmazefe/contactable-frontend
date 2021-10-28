import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./lib/AuthContext";
import { useHistory } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useAuth();
  const history = useHistory();

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/sessions`,
        { user: inputs },
        { withCredentials: true }
      )
      .then((res) => {
        handleLogin(res.data.user);
        toast.success(`Welcome, ${res.data.user.email}`)
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Something went wrong.");
      });
  }

  return (
    <div className="form-wrapper p-3">
      <h2 className="title is-3">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={inputs.email}
              name="email"
              onChange={handleChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={inputs.password}
              name="password"
              onChange={handleChange}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control buttons mt-4">
            <button className="button is-success" disabled={loading}>
              Login
            </button>
            <Link
              to="/signup"
              className="button is-link is-light"
              aria-disabled={loading}
            >
              ...or sign up
            </Link>
          </p>
        </div>
      </form>
      <article className="message is-info mt-3 demo-msg">
        <div className="message-header">
          <p>Info</p>
        </div>
        <div className="message-body">
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
