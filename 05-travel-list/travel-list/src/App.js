import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
    // <Counter />
  );
}

function Logo() {
  return <h1>⛴Far Away😍</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>"❌"</button>
    </li>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🚩You have X items on your list, add you already packed X (X%)</em>
    </footer>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  const time = new Date(today);
  time.setDate(today.getDate() + count);
  const isoDate = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(isoDate);

  function countSub() {
    setCount((s) => s - step);
  }

  function countAdd() {
    setCount((s) => s + step);
  }
  return (
    <>
      <div>
        <div>
          <input
            value={step}
            type="range"
            min="0"
            max="10"
            onChange={(e) => setStep(Number(e.target.value))}
          />
          {step}
        </div>
        <div>
          <button onClick={countSub}>-</button>
          {/* <span>Count:{count}</span> */}
          <input
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={countAdd}>+</button>
        </div>
        {count === 0 && <span>Today </span>}
        {count > 0 && <span>{count} days from today </span>}
        {count < 0 && <span>{-count} days ago was </span>}
        <span>is {isoDate}</span>
      </div>

      {(count !== 0 || step != 1) && (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
}
