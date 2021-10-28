import React from "react";

const Modal = ({ children, isOpen, setOpen, title }) => {
  return (
    <div className={`modal ${isOpen && "is-active"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => setOpen(false)}
          ></button>
        </header>
        <section className="modal-card-body">{children}</section>
      </div>
    </div>
  );
};

export default Modal;
