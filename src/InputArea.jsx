import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function submitNote() {
    props.onAdd(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText}></input>
      <button onClick={submitNote}>
        <AddCircleOutlinedIcon fontSize="inherit" />
      </button>
    </div>
  );
}
