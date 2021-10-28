import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../lib/Modal";

const History = ({ contact, isOpen, setOpen }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/contacts/${contact.id}`,
          { withCredentials: true }
        )
        .then((res) => setLogs(res.data.logs));
    }
  }, [isOpen]);

  return (
    <Modal title="History" isOpen={isOpen} setOpen={setOpen}>
      <div className="table-container">
        <table className="table is-striped is-fullwidth is-hoverable">
          <thead>
            <tr>
              <td>Event</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={`log${log.id}`}>
                <td>{log.event}</td>
                <td>{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default History;
