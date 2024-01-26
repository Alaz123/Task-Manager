import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Tasks() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await fetch("http://localhost:4000/task");
				const data = await response.json();
				console.log(data.task);
				setTasks(data.task);
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		fetchTasks();
	}, []);

	const handleDelete = (taskId) => {
		fetch(`http://localhost:4000/task/${taskId}`, {
			method: "DELETE",
		})
			.then(() => {
				window.location.href = "/";
			})
			.catch((error) => {
				console.log("Error: unable to delete!! " + error.message);
			});
	};

	return (
		<section className="tasks-container">
			<div className="tasks">
				{tasks.map((task) => (
					<div className="single-task" key={task.id}>
						<h5 class={"flex"}>
							<span className={` ${task.completed ? "task-completed" : ""}`}>
								<i className={`far fa-check-circle `}></i>
							</span>
							<div className={`task-name ${task.completed ? "completed" : ""}`}>
								{task.task_name}
							</div>
						</h5>
						<div className="task-links">
							<Link to={`/edittask/${task.id}`} className="edit-link">
								<i className="fas fa-edit"></i>
							</Link>

							<button
								type="button"
								className="delete-btn"
								onClick={() => handleDelete(task.id)}
							>
								<i className="fas fa-trash"></i>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Tasks;
