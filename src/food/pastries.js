export default [
	{
		name: 'Burger',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cscassets.com%2Frecipes%2Flarge_cknew%2Flarge_23976.jpg&f=1&nofb=1',
		options: [
			{text: 'small', price: 5, qty: 0},
		]
	},
].map(item => ({
	...item,
	category: 'pastries'
}))
