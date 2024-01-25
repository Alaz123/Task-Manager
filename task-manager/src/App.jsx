import React from "react";
import "./assets/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edittask from './componets/Edittask'
import Defaultpage from "./componets/Front-page/Defaultpage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Defaultpage />} />
				<Route path="/edittask/:id" element={<Edittask />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
