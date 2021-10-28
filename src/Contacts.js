import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useAuth } from "./lib/AuthContext";
import axios from "axios";
import { getInitials, search } from "./lib/contactHelpers";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import History from "./components/History";

const Contacts = () => {
  const [contacts, setContacts] = useState({});
  const [query, setQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  function fetchData() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/contacts`, {
        withCredentials: true,
      })
      .then((res) => {
        setContacts({ ...res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    if (!currentUser) {
      toast.error("You need to login!");
      history.push("/login");
    }
    fetchData();
  }, []);

  return (
    <>
      <nav className="panel is-primary phonebook">
        <p className="panel-heading">My Contacts</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-primary"
              type="text"
              placeholder="Search by name, phone or email..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          {getInitials(contacts).map((initial) => (
            <a key={initial}>{initial}</a>
          ))}
        </p>
        <div className="phonebook__content p-2">
          {Object.entries(contacts).map((contact, index) => (
            <>
              {!query.length && (
                <h3
                  className="subtitle is-5 mt-2 mb-3 ml-3 has-text-primary"
                  key={`title${index}`}
                >
                  {contact[0]}
                </h3>
              )}
              {search(contact[1], query).map((contact) => (
                <Contact
                  key={`contact${contact.id}`}
                  contact={contact}
                  setEditOpen={setEditOpen}
                  setSelectedContact={setSelectedContact}
                  setHistoryOpen={setHistoryOpen}
                />
              ))}
            </>
          ))}
        </div>
      </nav>
      <Edit
        contact={selectedContact}
        isOpen={editOpen}
        setOpen={setEditOpen}
        fetchData={fetchData}
      />
      <History
        contact={selectedContact}
        isOpen={historyOpen}
        setOpen={setHistoryOpen}
      />
    </>
  );
};

export default Contacts;
