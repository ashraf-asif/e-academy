import React from "react";
import "./CourseInCart.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseInCart = (props) => {
	const { img, name, price } = props.course;

	return (
		<div className="course-in-cart">
			<img src={img} alt="" style={{ height: "50px" }} />
			<div className="mx-2">
				<h6>{name}</h6>
	      <h6>${price}</h6>
			</div>
		</div>
	);
};

export default CourseInCart;
