export default function PackingList({ items, toggleItemPacked, removeItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            toggleItemPacked={toggleItemPacked}
            removeItem={removeItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, toggleItemPacked, removeItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => toggleItemPacked(item.id)}
        style={{ color: "White" }}
      >
        {item.packed ? "Pack" : "Unpacked"}
      </button>
      <button onClick={() => removeItem(item.id)}> ❌</button>
    </li>
  );
}
