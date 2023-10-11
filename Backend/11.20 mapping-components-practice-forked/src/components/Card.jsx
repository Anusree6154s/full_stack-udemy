import React from "react";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.title}</span>
        </dt>
        <dd>{props.text}</dd>
      </div>
    </dl>
  );
}

export default Card;
