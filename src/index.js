import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TasksList";



function App(){
	const pStyle = {
		"marginBottom": "15px"
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing ToDo-List App</h1>
				<p style={pStyle}>The most simple and amazing togo-list app.</p>
				<TasksList />
			</header>
		</div>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));