import React from "react";
import { getInitials } from "../lib/contactHelpers";

const Alphabet = ({ contacts }) => {
  function handleClick(initial) {
    document
      .getElementById(`title${initial}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <p className="panel-tabs">
      {getInitials(contacts).map((initial) => (
        <a key={initial} onClick={() => handleClick(initial)}>
          {initial}
        </a>
      ))}
    </p>
  );
};

export default Alphabet;
