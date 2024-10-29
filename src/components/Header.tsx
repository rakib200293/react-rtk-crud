import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container'>
				<NavLink to={'/'}>RTK CRUD</NavLink>

				<div
					className='collapse navbar-collapse justify-content-end'
					id='navbarNav'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'nav-link fw-medium active' : 'nav-link'
								}
							>
								Students
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to={'/create'}
								className={({ isActive }) =>
									isActive ? 'nav-link fw-medium active' : 'nav-link'
								}
							>
								Add
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
