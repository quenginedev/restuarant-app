export default [
	{
		name: 'Burger',
		image: 'https://2.bp.blogspot.com/-xxWNX6y36M0/XKcpGmXAWLI/AAAAAAABE38/6tqOkUSbvTAKTpGWa2wO_W2sykCCqDAuACLcBGAs/s400/burger-king-stacker-king.jpg',
		options: [
			{text: 'small', price: 20, qty: 0},
			{text: 'medium', price: 35, qty: 0},
			{text: 'bossu', price: 50, qty: 0}
		]
	}, {
		name: 'Chips',
		image: 'https://files.ozbargain.com.au/n/64/178864l.jpg?h=6d903eec',
		options: [
			{text: 'small', price: 20, qty: 0},
			{text: 'medium', price: 35, qty: 0}
		]
	}
].map(item => ({
	...item,
	category: 'fast food'
}))
