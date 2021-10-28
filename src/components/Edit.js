import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "../lib/Modal";

const Edit = ({ contact = null, isOpen, setOpen, fetchData }) => {
  const [inputs, setInputs] = useState({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    axios
    .patch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/contacts/${contact.id}`,
      { contact: inputs },
      { withCredentials: true }
      )
      .then(() => {
        setLoading(false);
        toast.success("Contact updated!");
        setOpen(false);
        fetchData();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Contact could not be updated.");
        setErrors(err.response.data.errors);
      });
    }
    
    function handleChange(e) {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
    
    useEffect(() => {
      if (contact) {
        setInputs({
          email: contact.email,
          phone: contact.phone,
          first_name: contact.first_name,
          last_name: contact.last_name,
        });
      }
    }, [isOpen, contact]);
    
    if (!isOpen) return null;
    
    return (
      <Modal isOpen={isOpen} setOpen={setOpen} title="Edit Contact" withAction>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={inputs.first_name}
              onChange={handleChange}
              name="first_name"
              required
            />
          </div>
          {errors?.first_name && (
            <p className="help is-danger">{errors.first_name}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={inputs.last_name}
              onChange={handleChange}
              name="last_name"
              required
            />
          </div>
          {errors?.last_name && (
            <p className="help is-danger">{errors.last_name}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              value={inputs.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          {errors?.email && <p className="help is-danger">{errors.email}</p>}
        </div>
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="+905382259787"
              value={inputs.phone}
              onChange={handleChange}
              name="phone"
              required
            />
          </div>
          {errors?.phone && <p className="help is-danger">{errors.phone}</p>}
        </div>
        <div className="control">
          <button className="button is-primary" disabled={loading}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Edit;
