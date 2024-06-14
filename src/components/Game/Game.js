import React, { useState } from "react";

import Form from "./Form";
import GuessResults from "./GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import VisualKeyboard from "../VisualKeyboard/VisualKeyboard";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleInput = (value) => {
    setGuess(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const guessListCopy = guessList;
    guessListCopy.push(guess);
    setGuessList(guessListCopy);
    setGuess("");

    if (guess == answer) {
      setGameStatus("won");
    } else {
      if (guessList.length == NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      }
    }
  };

  return (
    <>
      {gameStatus == "won" && (
        <Banner status="happy">Ganaste el juego genio.</Banner>
      )}
      {gameStatus == "lost" && (
        <Banner status="sad">Perdiste el juego, salame.</Banner>
      )}
      <GuessResults guesses={guessList} answer={answer} />
      <VisualKeyboard
        guess={guess}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      <Form
        guess={guess}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
