import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import { useHistory } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const Nav = () => {
  const [active, setActive] = useState(false);
  const { currentUser, handleLogout } = useAuth();
  const history = useHistory();

  function handleClick() {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        handleLogout();
        toast('Bye!', {
          icon: '👋',
        });
        history.push("/login");
      })
      .catch((err) => console.error(err));
  }
  return (
    <nav
      className="navbar p-3 m-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger ${active && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setActive(!active)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active && "is-active"}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {currentUser ? (
                <>
                  <Link to="/" className="button is-ghost">
                    <strong>Contacts</strong>
                  </Link>
                  <a className="button is-light" onClick={handleClick}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login" className="button is-light">
                    Login
                  </Link>
                  <Link to="/signup" className="button is-light">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
