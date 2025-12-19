import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from './../../img/icons/logo.svg';
import './header.css';

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
				<div className="header__logo">
					<Link to="/">
					<img src={logoImg} alt="Logo" />
					</Link>
					<Link to="/">
						<span>Fashion</span>
					</Link>
				</div>					
				<nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
						<ul>
							<li>
								<a href="#!" onClick={closeMenu}>
									CATALOGUE
								</a>
							</li>
							<li>
								<a href="#!" onClick={closeMenu}>
									FASHION
								</a>
							</li>
							<li>
								<a href="#!" onClick={closeMenu}>
									FAVOURITE
								</a>
							</li>
							<li>
								<a href="#!" onClick={closeMenu}>
									LIFESTYLE
								</a>
							</li>
							<li>
								<a href="#!" className="header__nav-btn" onClick={closeMenu}>
									SIGN UP
								</a>
							</li>
						</ul>
					</nav>

					<button
						className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
						type="button"
						aria-label="Toggle navigation"
						aria-expanded={isMenuOpen}
						onClick={toggleMenu}
					>
						<span />
						<span />
						<span />
					</button>

				</div>
			</div>
		</header>
	);
}

export default Header;