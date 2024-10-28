import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container'>
				<a className='navbar-brand' href='#'>
					RTK CRUD
				</a>

				<div
					className='collapse navbar-collapse justify-content-end'
					id='navbarNav'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Read
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to={'/create'}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Create
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
