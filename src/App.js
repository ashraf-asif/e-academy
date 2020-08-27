import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AllCourses from "./components/AllCourses/AllCourses";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<h2 style={{ textAlign: "center", color: "gray" }}>
				Web Development Course
			</h2>
			<AllCourses></AllCourses>
		</div>
	);
}

export default App;
