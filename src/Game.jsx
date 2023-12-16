import React from "react";
import style from "./game.module.css";
import { useState } from "react";
 const Game = ({ question, step, setStep, base }) => {

	const [message, setMessage] = useState("");
	const [visible, setVisible] = useState(true);

	const checkAnswer = (event) => {
		if (event.target.innerText === question.correctAnswer) {
			setTimeout (() => {
				setMessage("")
				if  (step !== base.length - 1) {
					setStep(step + 1);

				} else {
					setVisible(false)
					setMessage("Вы выйграли!")
				}

			}, 1000)
			setMessage("Правильно!")
		} else {
			setMessage("Неправильно!")
			setTimeout (() => setMessage(""), 1000)
		}
	}

	return (
		<div>
			{visible? <div>
				<h1>{question.title}</h1>
				<div className={style.answers}>
					{question.answers.map((answer , index) => (
						<button onClick={checkAnswer} key={index}>{answer}</button>
					))}
				</div>
			</div> : null}

			{message ? <h1>{message}</h1> : null}
		</div>
	);
}

export default Game