import React from "react";

function Addtask() {
	const createTask = async () => {
		try {
			const response = await fetch(`http://localhost:4000/task/create`, {
				method: "post",
			});
			const data = await response.text();
			if (response.ok) {
				window.location.href = "http://localhost:5173";
			} else {
				console.error("Error inserting task");
			}
			console.log(data);
		} catch (error) {
			console.error("Error on adding task:", error.message);
		}
	};

	

	return (
		<form
			className="task-form"
			action="http://localhost:4000/task/create"
			method="post"
		>
			
			<h4>Task Manager</h4>
			<div className="form-control">
				<input
					type="text"
					name="name"
					className="task-input"
					placeholder="e.g. Learn Node.js"
				/>
				<button
					type="submit"
					className="btn submit-btn"
					onClick={() => {
						createTask();
					}}
				>
					Add
				</button>
			</div>
			<div className="form-alert alert-danger"></div>
		</form>
	);
}

export default Addtask;
