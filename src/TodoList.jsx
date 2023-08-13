import React, { useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function TodoList(props) {
  const [clicked, setClicked] = useState(false);

  function clickedCheck() {
    setClicked((current) => !current);
  }

  return (
    <div className="list">
      <li style={{ textDecoration: clicked && "line-through" }}>
        {props.text}
      </li>
      <button type="checkbox" onClick={clickedCheck}>
        <BorderColorIcon fontSize="medium" />
      </button>{" "}
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <DeleteTwoToneIcon fontSize="medium" />
      </button>
    </div>
  );
}
