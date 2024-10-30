import React from "react";

const Card = () => {
	return (
        <div className="col-12 col-md-3 d-flex justify-content-center">

        <div className="card" style={{ width: "18rem" }}>
        <img src="https://tse3.mm.bing.net/th?id=OIP.2HjZ-0JSzTsEcvUdlpRKtgHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </div>
	);
};



export default Card;