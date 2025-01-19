import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  const toggleItemPacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        toggleItemPacked={toggleItemPacked}
        removeItem={removeItem}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
