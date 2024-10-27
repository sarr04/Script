import { useState } from "react";

const input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(inputValue);
  //   };

  return (
    <div>
      <label htmlFor="textInput"></label>
      <input
        id=""
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border-b p-2 rounded"
      />
    </div>
  );
};

export default input;
