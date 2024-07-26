function ChildComponent({ greeting }: { greeting: string }) {
	return (
	  <div>
		<h2>Child Component</h2>
		<p>{greeting}</p>
	  </div>
	)
}

export default ChildComponent;