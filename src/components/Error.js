import React from "react";

const Error = ({ errors = [] }) => {
  if (!errors.length) return null;
  return (
    <>
      {errors.map((error, index) => (
        <p className="help is-danger" key={`error${index}`}>
          {error}
        </p>
      ))}
    </>
  );
};

export default Error;
