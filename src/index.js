import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props){
	return(
		<li className="tasks-item">{props.taskName}</li>
	);
}

function TasksList(){
	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook",
		"Follow AWS Siklab Pilipinas on Facebook",
		"Follow Zuitt Coding Bootcamp on Facebook"
	];

	return (
		<div>
			<input className="task-input" />
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task} />
				})}
			</ul>
		</div>
	);	
}

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