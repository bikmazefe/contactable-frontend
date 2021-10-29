import React from "react";
import Error from "./Error";

const Form = ({ handleSubmit, handleChange, inputs, errors, loading }) => {
  return (
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
        <Error errors={errors?.first_name} />
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
        <Error errors={errors?.last_name} />
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
        <Error errors={errors?.email} />
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
        <Error errors={errors?.phone} />
      </div>
      <div className="control">
        <button className="button is-primary" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
