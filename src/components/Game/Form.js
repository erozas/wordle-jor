import React from "react";

const Form = ({ guess, handleInput, handleSubmit }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern={"[A-Za-z]{5}"}
        onChange={(evt) => {
          const uppercased = evt.target.value.toUpperCase();
          handleInput(uppercased);
        }}
      />
    </form>
  );
};

export default Form;
