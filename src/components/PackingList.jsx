import { useState } from "react";

export default function PackingList({
  items,
  toggleItemPacked,
  removeItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortitems;
  switch (sortBy) {
    case "input":
      sortitems = items;
      break;
    case "description":
      sortitems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortitems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortitems = items;
  }
  return (
    <div className="list">
      <ul>
        {sortitems.map((item) => (
          <Item
            item={item}
            toggleItemPacked={toggleItemPacked}
            removeItem={removeItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description">Sort by descriptions</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, toggleItemPacked, removeItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => toggleItemPacked(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => removeItem(item.id)}> ❌</button>
    </li>
  );
}
