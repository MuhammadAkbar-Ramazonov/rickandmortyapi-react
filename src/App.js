import { Route, Routes } from "react-router-dom";
// import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./main.css";
import { Epizod } from "./Pages/Epizod";
import { Location } from "./Pages/Location";

import { Charakters } from "./Pages/Charakters/Charakters";
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Charakters />} />
				<Route path='/epizod' element={<Epizod />} />
				<Route path='/location' element={<Location/>} />
			</Routes>
		</div>
	);
}

export default App;
