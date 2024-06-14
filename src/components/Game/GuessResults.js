import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "./Guess";

const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        return (
          <Guess key={row.toString()} guess={guesses[row]} answer={answer} />
        );
      })}
    </div>
  );
};

export default GuessResults;
