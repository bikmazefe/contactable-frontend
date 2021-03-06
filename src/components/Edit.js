import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "../lib/Modal";
import Form from "./Form";

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

    return () => setErrors({});
  }, [isOpen, contact]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title="Edit Contact">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputs={inputs}
        errors={errors}
        loading={loading}
      />
    </Modal>
  );
};

export default Edit;
