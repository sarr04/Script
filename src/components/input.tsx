import React, { useState } from "react";

const BookATicket = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput"></label>
      <input
        id=""
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border-b p-2 rounded"
      />
    </form>
  );
};
