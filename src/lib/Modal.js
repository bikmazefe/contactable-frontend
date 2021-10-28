import React from "react";

const Modal = ({ children, isOpen, setOpen, title, action = null }) => {
  return (
    <div class={`modal ${isOpen && "is-active"}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{title}</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => setOpen(false)}
          ></button>
        </header>
        <section class="modal-card-body">{children}</section>
        <footer class="modal-card-foot">
          {action !== null && (
            <button class="button is-success" onClick={action}>
              Save changes
            </button>
          )}
          <button class="button" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
