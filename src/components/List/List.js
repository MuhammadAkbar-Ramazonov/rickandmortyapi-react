import React from "react";
import { useEffect, useState } from "react";

export function List() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isEror, setisEror] = useState(false);

	console.log(loading, isEror);
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/?page=1")
			.then((response) => response.json())
			.then((json) => {
				setTodos(json);
				setLoading(false);
			})
			.catch((err) => {
				setisEror(true);
				setLoading(false);
			});
	}, []);
	return (
		<>
			{loading && <h1 className='text-success'>Loading...</h1>}
			{isEror && <h1 className='text-success'>Error...</h1>}
			{todos.length !== 0 && (
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
								<div className='p-3'>
									<h3 className='text-success fw-bold mb-4 fs-4'>
										{item.name}
									</h3>
									<p className='text-primary fw-bold'>Gender: {item.gender}</p>
									<p className='text-primary fw-bold'>
										Species: {item.species}
									</p>
									<p className='text-primary fw-bold'>Status: {item.status}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
