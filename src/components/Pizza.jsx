export default function Pizza({ pizzaData }) {
	return (
		<ul className="pizzas">
			{pizzaData.map((pizza) => (
				<li
					className={`pizza${pizza.soldOut ? " sold-out" : ""}`}
					key={pizza.name}
				>
					<img src={pizza.photoName} alt={pizza.name} />
					<div>
						<h3>{pizza.name}</h3>
						<p>{pizza.ingredients}</p>
						<span>{pizza.soldOut ? "sold out" : pizza.price}</span>
					</div>
				</li>
			))}
		</ul>
	);
}
