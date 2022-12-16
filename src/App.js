import { List } from "./components/List";
import "./main.css";
function App() {
	return (
		<div>
			<div className='wrapper mt-5'>
				<h1 className='text-center mb-5 text-success'>
					The Rick and Morty API
				</h1>
				<List />
			</div>
		</div>
	);
}

export default App;
