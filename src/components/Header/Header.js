import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<>
			<header className='py-4 shadow'>
				<div className='container '>
					<div className='d-flex justify-content-between '>
						<Link className='text-white text-decoration-none fs-4' to={"/"}>
							The Rick and Morty
						</Link>
						<nav>
							<ul className='d-flex gap-4'>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? "text-white fs-5"
												: "text-white text-decoration-none fs-5"
										}
										to='/'
									>
										Charakters
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? "text-white fs-5"
												: "text-white text-decoration-none fs-5"
										}
										to='/epizod'
									>
										Epizod
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? "text-white fs-5"
												: "text-white text-decoration-none fs-5"
										}
										to='/location'
									>
										Location
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};
