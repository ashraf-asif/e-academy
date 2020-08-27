import React from "react";
import "./Course.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = (props) => {
  const { img, name, description, price } = props.course;
  
	return (
		<div className="course">
			<Card
				style={{
					width: "250px",
					height: "300px",
					border: "none",
					boxShadow: "0 0 40px lightgray",
				}}
			>
				<Card.Img
					variant="top"
					src={img}
					style={{ height: "100px", width: "100px", margin: "auto" }}
				/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Card.Text>$ {price}</Card.Text>
					<Button
						onClick={() => {
							props.handleAddToCart(props.course);
						}}
						variant="outline-primary"
						style={{ padding: "5px 20px" }}
					>
						Add to cart
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Course;
