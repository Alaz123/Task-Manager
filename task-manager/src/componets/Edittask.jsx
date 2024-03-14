import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Edittask = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [completed, setCompleted] = useState(false);
	const [time, settime] = useState("");

	useEffect(() => {
		const fetchTask = async () => {
			try {
				const response = await fetch(
					`https://task-manager-server-b2rh.onrender.com/task/${id}`,
					{
						method: "GET",
					}
				);
				const data = await response.json();

				setName(data[0].task_name);
				setCompleted(data[0].completed);
				settime(data[0].time_zone);
			} catch (error) {
				console.error("Error fetching task:", error);
			}
		};

		fetchTask();
	}, [id]);

	const edit = async (taskId, updatedName, updatedCompleted, updatedTime) => {
		try {
			const response = await fetch(
				`https://task-manager-server-b2rh.onrender.com/task/${taskId}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: updatedName,
						completed: updatedCompleted,
						time: updatedTime,
					}),
				}
			);

			if (response.ok) {
				console.log("Task updated successfully");
			} else {
				console.log("Error updating task");
			}
		} catch (error) {
			console.log("Error: unable to update task", error);
		}
	};

	return (
		<form className="single-task-form">
			<h4>Edit Task</h4>
			<div className="form-control">
				<label>Task ID</label>
				<p className="task-edit-id">{id}</p>
			</div>
			<div className="form-control">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={name}
					// placeholder={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="completed">Completed</label>
				<input
					type="checkbox"
					name="completed"
					checked={completed}
					onChange={(e) => setCompleted(e.target.checked)}
					className="task-edit-completed"
				/>
			</div>
			<div className="form-control">
				<label htmlFor="time-zone">time_zone</label>
				<input
					type="datetime-local"
					name="time"
					value={time}
					onChange={(e) => settime(e.target.value)}
					// className="task-edit-completed"
				/>
			</div>
			<button
				type="submit"
				className="block btn task-edit-btn"
				onClick={() => edit(id, name, completed, time)}
			>
				Edit
			</button>
			<div className="form-alert"></div>
			<Link to="/" className="btn back-link">
				Back to tasks
			</Link>
		</form>
	);
};

export default Edittask;
