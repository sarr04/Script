import { useState } from "react";
import NavBar from "../../components/NavBar";

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
      <NavBar
        buttonClass="bg-gradient-to-b from-blue-300 to-purple-500 hover:bg-blue-700"
        imageSrc="/img/Logoblue.svg"
      />

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
