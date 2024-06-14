import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess, answer }) => {
  const localGuess = guess != undefined ? guess.split("") : range(5);
  const checkHashes = checkGuess(guess, answer);

  const classForCharacter = (char) => {
    if (guess == undefined) return;
    return checkHashes.find((hash) => hash.letter == char).status;
  };

  return (
    <p className="guess">
      {localGuess.map((char, index) => {
        return (
          <span
            key={index.toString()}
            className={`cell ${classForCharacter(char)}`}
          >
            {!Number.isInteger(char) ? char : null}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
