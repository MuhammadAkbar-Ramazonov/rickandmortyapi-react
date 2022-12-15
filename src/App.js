import { useEffect, useState } from "react";
import "./main.css";
function App() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isEror, setisEror] = useState(false);

	console.log(loading, isEror);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/?page=1")
			.then((response) => response.json())
			.then((json) => {
				setTodos(json);
				console.log(json.results);
				setLoading(false);
			})
			.catch((err) => {
				setisEror(true);
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<div className='wrapper mt-5'>
				<h1 className='text-center mb-5 text-success'>The Rick and Morty API</h1>
				<ul className='row list-unstyled'>
					{todos.results?.map((item) => (
						<li className='col-4 mb-5 shadow' key={item.id}>
							<div className='d-flex item-inner rounded shadow'>
								<img
									className='rounded me-3'
									src={item.image}
									width={200}
									height={150}
									alt={item.name}
								/>
								<div className="p-3">
									<h3 className='text-success fw-bold mb-4 fs-4'>{item.name}</h3>
									<p className='text-primary fw-bold'>Gender: {item.gender}</p>
									<p className='text-primary fw-bold'>Species: {item.species}</p>
									<p className='text-primary fw-bold'>Status: {item.status}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
