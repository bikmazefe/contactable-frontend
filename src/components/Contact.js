import React from "react";

const Contact = ({
  contact,
  setEditOpen,
  setSelectedContact,
  setHistoryOpen,
}) => {
  function handleEditClick() {
    setSelectedContact(contact);
    setEditOpen(true);
  }

  function handleHistoryClick() {
    setSelectedContact(contact);
    setHistoryOpen(true);
  }

  return (
    <span className="panel-block columns is-flex is-justify-content-space-between">
      <div className="column is-flex isv-centered is-four-fifths">
        <span className="panel-icon">
          <i className="fas fa-address-book fa-2x m-auto"></i>
        </span>
        <div className="tile is-ancestor is-vertical ml-4">
          <span className="has-text-weight-semibold">{`${contact.first_name} ${contact.last_name}`}</span>
          <span className="has-text-grey has-text-weight-medium is-size-7 tile">
            <span>{contact.phone}</span>
          </span>
          <span className="has-text-grey is-size-7 tile">
            <span>{contact.email}</span>
          </span>
        </div>
      </div>
      <div className="column has-text-right">
        <a
          className="has-text-grey ml-2"
          title="History"
          onClick={handleHistoryClick}
        >
          <i className="fas fa-history"></i>
        </a>
        <a
          className="has-text-grey ml-2"
          title="Edit"
          onClick={handleEditClick}
        >
          <i className="far fa-edit"></i>
        </a>
        <a className="has-text-grey ml-2" title="Delete">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </span>
  );
};

export default Contact;
