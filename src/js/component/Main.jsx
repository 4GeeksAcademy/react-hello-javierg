import Card from "./Card";
import React from "react";
import MainCard from "./MainCard";

const Main = () => {
	return (
        <div className="container mt-4 text-center">
        <MainCard />
        <div className="row d-flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
	);
};


export default Main;