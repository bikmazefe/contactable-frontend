import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from "react/cjs/react.development";
import Modal from "../lib/Modal";
import Form from "./Form";

const New = ({ fetchData, isOpen, setOpen }) => {
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
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/contacts`,
        { contact: inputs },
        { withCredentials: true }
      )
      .then(() => {
        setLoading(false);
        setOpen(false);
        toast.success("Contact created!");
        fetchData();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Contact could not be created.");
        setErrors(err.response.data.errors);
      });
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function resetInputs() {
    const empties = Object.keys(inputs).map((key) => [key, ""]);
    setInputs(Object.fromEntries(empties));
  }

  useEffect(() => {
    return () => {
      resetInputs();
      setErrors({});
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title="New Contact">
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

export default New;
