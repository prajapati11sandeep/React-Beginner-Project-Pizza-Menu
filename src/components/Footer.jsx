import React from "react";

export default function Footer() {
	const hour = new Date().getHours();
	const openHours = 12;
	const closingHours = 22;
	const isOpen = hour >= openHours && hour <= closingHours;

	return (
		<footer className="footer">
			{isOpen ? (
				<div className="order">
					<p>We are currently open</p>
					<button className="btn">Order Now</button>
				</div>
			) : (
				<div className="order">
					<p>We are currently closed get back @{openHours} </p>
				</div>
			)}
		</footer>
	);
}
