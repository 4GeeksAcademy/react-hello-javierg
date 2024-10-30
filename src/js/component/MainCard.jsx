import Card from "./Card";
import React from "react";

const MainCard = () => {
	return (
        <div className="card w-100 mb-3">
      <div className="card-body">
        <h1 className="card-title">A Warm Welcome!</h1>
        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero expedita sequi ab numquam voluptas, et accusantium fugit. Recusandae deserunt, voluptatibus asperiores fuga non sapiente architecto animi error facilis sed adipisci.</p>
        <a href="#" className="btn btn-primary">Call to action!</a>
      </div>
    </div>
	);
};


export default MainCard;