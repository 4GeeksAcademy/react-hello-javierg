import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MainCard from "./MainCard";

//create your first component
const Home = () => {
	return (
	<div className="container-home">
		<NavBar/>
		<Main/>
		<Footer/>
	</div>
	);
};

export default Home;
