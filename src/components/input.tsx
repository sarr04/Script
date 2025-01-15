import { useState } from "react";

const BookATicket = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
export default BookATicket;
