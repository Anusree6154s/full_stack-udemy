import React from "react";
function Item(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{
        textDecoration: props.flag ? "line-through" : "none"
      }}
    >
      {props.text}
    </li>
  );
}
export default Item;
