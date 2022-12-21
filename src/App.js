import { Route, Routes } from "react-router-dom";
// import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./main.css";
import { Charakters } from "./Pages/Charakters/Charakters";
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Charakters />} />
				<Route path='/epizod' element={"kmf"} />
				<Route path='/location' element={"aj"} />
			</Routes>
			<div className='wrapper mt-5'>

			</div>
		</div>
	);
}

export default App;