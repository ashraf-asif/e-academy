import React, { useState } from "react";
import "./Cart.css";
import CourseInCart from "../CourseInCart/CourseInCart";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
	const cart = props.cart;

	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		const Course = cart[i];
		total = total + parseFloat(Course.price);
	}

	let courses = cart.map((course) => {
    
		return (
			<CourseInCart
				course={course}
				key={course.key}
			></CourseInCart>
		);
  });

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className="cart" id="cart">
			<div>
				<h2>Your Cart:</h2>
				<br />
				<div className="products">{courses}</div>
				<h4 className="my-3">Items ordered: {cart.length}</h4>
				<h4>Total price: $ {total.toFixed(2)}</h4>
				<Button onClick={refreshPage} className="px-5 my-2">
					Enroll Now!
				</Button>
			</div>
		</div>
	);
};

export default Cart;
