import React from "react";

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<button
				onClick={async () => {
					const res = await fetch("/users");
					const data = await res.json();
					console.log(data);
				}}>
				Get Data
			</button>
		</div>
	);
}

export default App;
