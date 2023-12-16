import "./App.css";
import Game from "./Game.jsx";
import { useState } from "react";

function App() {
  const base = [
    {
      title: "2 + 2 =",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "4",
    },
    {
      title: "2 + 3 =",
      answers: ["1", "3", "5", "10"],
      correctAnswer: "5",
    },
  ];

  const [step, setStep] = useState(0);
  const question = base[step];

  return (
    <div className="App">
      <Game question={question} step={step} setStep={setStep} base={base} />
    </div>
  );
}

export default App;
