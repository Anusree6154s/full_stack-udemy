import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1 className="red" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

//challenge
const image = "https://picsum.photos/50/50";
ReactDOM.render(
  <div className="challenge">
    <h1 className="red">My Favourite Foods</h1>
    <ul>
      <li>
        <img
          src="https://images.unsplash.com/photo-1606851682837-019baf2e8da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://media.istockphoto.com/id/638504890/photo/delicious-appetizer-on-rustic-wood-table.jpg?s=612x612&w=is&k=20&c=B8Llc8maYtba5d29AgF2ImbKATRaQtwCkQixpNiOHWY="
          alt=""
        />
      </li>
      <li>
        <img
          src="https://media.istockphoto.com/id/1496117334/photo/spaghetti-bolognese-high-res-stock-images.webp?b=1&s=170667a&w=0&k=20&c=GVrd7qGZekmlMhbwSBEVvNfo8MNaEj3fzvBPjRY272M="
          alt=""
        />
      </li>
      <li>
        <img src={image} alt="" />
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
