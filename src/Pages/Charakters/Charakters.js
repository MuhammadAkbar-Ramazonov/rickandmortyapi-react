import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export const Charakters = () => {
	const [todos, setTodos] = useState([]);
	console.log(todos);
	const [loading, setLoading] = useState(true);
	const [isEror, setisEror] = useState(false);
	const [page, setPage] = useState(1);
	const [value, setValue] = useState("");
	const [status, setStatus] = useState("alive");
	const [gender, setGender] = useState("male");
	const [species, setSpecies] = useState("");

	let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${value}&status=${status}&gender=${gender}&species=${species}`;
	console.log(api);
	let statusArr = ["alive", "dead", "unknown"];
	let genderArr = ["female", "male", "genderless", "unknown"];
	let speciesArr = ["human"];
	console.log(api);
	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((json) => {
				setLoading(false);
				setTodos(json);
			})
			.catch((err) => {
				setLoading(true);
				setisEror(true);
			});
	}, [api]);
	return (
		<>
			<div className='container'>
				<h1 className='text-center mb-5 text-success'>
					The Rick and Morty API
				</h1>
				<div className='row'>
					<div className='col-4'>
						<div class='accordion' id='accordionExample'>
							<div class='accordion-item'>
								<h2 class='accordion-header' id='headingThree'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										status
									</button>
								</h2>
								<div
									id='collapseThree'
									class='accordion-collapse collapse'
									aria-labelledby='headingThree'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body gap-4 d-flex flex-column'>
										{statusArr.map((element, index) => {
											return (
												<div>
													<input
														onClick={() => setStatus(element)}
														type='radio'
														className='btn-check'
														id={`status-${index}`}
														autoComplete='off'
														name={`element`}
													/>
													<label
														className='btn btn-outline-primary'
														htmlFor={`status-${index}`}
													>
														{element}
													</label>
												</div>
											);
										})}
									</div>
								</div>
							</div>

							<div class='accordion-item'>
								<h2 class='accordion-header' id='headingTwo'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										gender
									</button>
								</h2>
								<div
									id='collapseTwo'
									class='accordion-collapse collapse'
									aria-labelledby='headingTwo'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body d-flex flex-column gap-4'>
										{genderArr.map((element, index) => {
											return (
												<div>
													<input
														onClick={() => setGender(element)}
														type='radio'
														className='btn-check'
														id={`gender-${index}`}
														autoComplete='off'
														name={`elements`}
													/>
													<label
														className='btn btn-outline-primary'
														htmlFor={`gender-${index}`}
													>
														{element}
													</label>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header' id='headingOne'>
									<button
										class='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'
									>
										species
									</button>
								</h2>
								<div
									id='collapseOne'
									class='accordion-collapse collapse show'
									aria-labelledby='headingOne'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body d-flex flex-column gap-4'>
										{speciesArr.map((element, index) => {
											return (
												<div>
													<input
														onClick={() => setSpecies(element)}
														type='radio'
														className='btn-check'
														id={`species-${index}`}
														autoComplete='off'
														name={`elements`}
													/>
													<label
														className='btn btn-outline-primary'
														htmlFor={`species-${index}`}
													>
														{element}
													</label>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-8'>
						<form className='input-group mb-5'>
							<input
								onChange={(evt) => setValue(evt.target.value)}
								className='form-control'
								type='text'
								placeholder='Search..'
							/>
							<button className='btn btn-primary'>Search</button>
						</form>
						{loading && <h1>Loading...</h1>}
						{isEror && <h1>Error...</h1>}
						{todos.length !== 0 && (
							<ul className='row list-unstyled'>
								{todos.results?.map((item) => (
									<li className='col-4 mb-5' key={item.id}>
										<div className='d-flex position-relative flex-column item-inner rounded shadow'>
											<img
												className='rounded me-3'
												src={item.image}
												width='100%'
												height={200}
												alt={item.name}
											/>
											<span
												style={{ top: 10, right: 10 }}
												className='badge position-absolute bg-primary'
											>
												{item.status}
											</span>
											<div className='p-3'>
												<h3 className='text-success fw-bold mb-4 fs-4'>
													{item.name}
												</h3>
												<p className='text-primary fw-bold'>
													Gender: {item.gender}
												</p>
												<p className='text-primary fw-bold'>
													Species: {item.species}
												</p>
												<p className='text-primary fw-bold'>
													Location: {item.location.name}
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				<ReactPaginate
					className='pagination gap-3 my-5 justify-content-center'
					forcePage={page === 1 ? 0 : page - 1}
					previousLinkClassName='btn btn-primary'
					nextLinkClassName='btn btn-primary'
					pageClassName='page-item'
					pageLinkClassName='page-link'
					activeClassName='active'
					pageCount={todos.info?.pages}
					previousLabel='prev'
					nextLabel='next'
					onPageChange={(data) => {
						setPage(data.selected + 1);
					}}
				/>
			</div>
		</>
	);
};
