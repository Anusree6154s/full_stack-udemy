import React from "react";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
