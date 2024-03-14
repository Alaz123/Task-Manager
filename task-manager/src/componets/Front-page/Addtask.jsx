import React from "react";

function Addtask() {
	const createTask = async () => {
		try {
			const response = await fetch(`https://task-manager-server-b2rh.onrender.com/task/create`, {
				method: "post",
			});
			// console.log(response)
			// const data = await response.text();

			if (response.ok) {
				window.location.href = "/";
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
			action="https://task-manager-server-b2rh.onrender.com/task/create"
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
