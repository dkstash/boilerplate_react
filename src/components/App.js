import React from "react";
import Header from "./header/Header"; // Key shortcut - imp <tab>
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";

const App = () => {
	// Use fragments, short syntax is <></>
	return (
		<>
			<Header />
			<Navbar />
			<Main />
			<Footer />
		</>
	);
};

export default App;
