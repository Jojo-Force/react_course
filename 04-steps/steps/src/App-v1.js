import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
    </div>
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
  function stepSub() {
    setStep((s) => s - 1);
  }

  function stepAdd() {
    setStep((s) => s + 1);
  }

  function countSub() {
    setCount((s) => s - step);
  }

  function countAdd() {
    setCount((s) => s + step);
  }
  return (
    <div>
      <div>
        <button onClick={stepSub}>-</button>
        <span>Step:{step}</span>
        <button onClick={stepAdd}>+</button>
      </div>
      <div>
        <button onClick={countSub}>-</button>
        <span>Count:{count}</span>
        <button onClick={countAdd}>+</button>
      </div>
      {count === 0 && <span>Today </span>}
      {count > 0 && <span>{count} days from today </span>}
      {count < 0 && <span>{-count} days ago was </span>}
      <span>is {isoDate}</span>
    </div>
  );
}

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(arr);

  // const step = 1;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    //if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
