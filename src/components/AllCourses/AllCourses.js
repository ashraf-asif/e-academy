import React from "react";
import "./AllCourses.css";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import coursesArray from "../../CourseData/Courses";
import { useState } from "react";

const AllCourses = () => {
	const [courses, setCourses] = useState(coursesArray);
	const [cart, setCart] = useState([]);

	const handleAddToCart = (course) => {
		if ([...cart].includes(course)) {
			alert("This course is already added to cart.")
		} else {
			const newCart = [...cart, course];
			setCart(newCart);
		}
	};

	return (
		<div className="all-courses">
			<div className="course-container">
				{courses.map((course) => (
					<Course
						course={course}
						key={course.key}
						handleAddToCart={handleAddToCart}
					></Course>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default AllCourses;
