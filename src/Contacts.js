import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useAuth } from "./lib/AuthContext";

const Contacts = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      toast.error("You need to login!");
      history.push("/login");
    }
  }, []);

  return (
    <nav className="panel is-primary">
      <p className="panel-heading">Repositories</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p className="panel-tabs">
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <a className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        marksheet
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        minireset.css
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        daniellowtw/infboard
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        mojs
      </a>
    </nav>
  );
};

export default Contacts;
