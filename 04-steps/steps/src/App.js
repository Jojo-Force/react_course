import { use, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [yourService, setYourService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const [bill, setBill] = useState(0);
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service service={yourService} setService={setYourService}>
        How did you like the service?
      </Service>
      <Service service={friendService} setService={setFriendService}>
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <Output
          bill={bill}
          yourService={yourService}
          friendService={friendService}
        />
      )}

      {bill > 0 && (
        <Button
          setBill={setBill}
          setFriendService={setFriendService}
          setYourService={setYourService}
        >
          Reset
        </Button>
      )}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How musch was the bill?</span>
      <input value={bill} onChange={(e) => setBill(e.target.value)}></input>
    </div>
  );
}

function Service({ children, service, setService }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={service}
        onChange={(e) => {
          setService(e.target.value);
        }}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, yourService, friendService }) {
  const tips =
    (Number(bill) * ((Number(yourService) + Number(friendService)) / 2)) / 100;
  const all = Number(bill) + Number(tips);
  return (
    <p>
      <strong>
        You pay ${all}(${bill}+ ${tips}tip)
      </strong>
    </p>
  );
}

function Button({ children, setBill, setFriendService, setYourService }) {
  function onClick() {
    setBill(0);
    setFriendService(0);
    setYourService(0);
  }

  return <button onClick={onClick}>{children}</button>;
}
