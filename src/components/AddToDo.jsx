import React from "react";

export default function AddToDo({ handleSumbit, text, setText }) {
  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}
