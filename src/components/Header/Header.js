import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
		<div className="header">
			<h1 className="logo">eAcademy</h1>
			<h5 className="slogan">An online learning platform.</h5>
			<div className="cart-icon">
				<a href="#cart" style={{ scrollBehavior: "smooth" }}>
					<FontAwesomeIcon icon={faShoppingCart} />
				</a>
			</div>
		</div>
	);
};

export default Header;