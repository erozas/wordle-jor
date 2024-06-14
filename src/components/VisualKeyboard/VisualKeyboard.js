import React, { useState } from "react";

import { KEYBOARD_KEYS } from "../../data";
import { groupBy } from "../../utils";

const VisualKeyboard = ({ handleInput, handleSubmit, guess }) => {
  const [visualInput, setVisualInput] = useState("");

  // This returns a hash useful for arranging the keys in the appropriate order.
  // The hash has a key for each of the rows that is associated with an array of keys
  const arrangedKeysByRow = groupBy(KEYBOARD_KEYS, "row");
  const rows = Object.keys(arrangedKeysByRow);

  const handleKeypress = (value, evt) => {
    let visualInputCopy = visualInput;

    if (value == "ENTER") {
      if (visualInputCopy.length < 5) return;
      handleSubmit(evt);
    } else if (value == "DEL") {
      visualInputCopy = visualInput.slice(0, -1);
      setVisualInput(visualInputCopy);
    } else {
      if (visualInputCopy.length + 1 > 5) return;
      visualInputCopy = visualInput + value;
      setVisualInput(visualInputCopy);
    }

    handleInput(visualInputCopy);
  };

  return (
    <div className="keyboard">
      {rows.map((row) => {
        return (
          <div key={row.toString()} className="row">
            {arrangedKeysByRow[row].map((key, index) => {
              return (
                <button
                  key={index.toString()}
                  onClick={(evt) => handleKeypress(key.key, evt)}
                  className={`key ${key.key.toLowerCase()}`}
                >
                  {key.key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default VisualKeyboard;
