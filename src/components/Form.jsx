import { useState } from "react";

export default function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuentity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!description) return;
    addItem({ description, quantity: Number(quantity), paked: false });
    setDescription("");
    setQuentity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuentity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
