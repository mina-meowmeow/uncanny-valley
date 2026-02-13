interface Product {
	id: string;
	title: string;
	price: number;
	image: string;
	isLive: boolean;
}

const PRODUCTS: Product[] = [
	{
		id: '1',
		title: 'Minimal Runner Sneakers',
		price: 89.99,
		image: '/images/product-sneakers.jpg',
		isLive: true,
	},
	{
		id: '2',
		title: 'Classic Black Watch',
		price: 199.99,
		image: '/images/product-watch.jpg',
		isLive: false,
	},
	{
		id: '3',
		title: 'Leather Crossbody Bag',
		price: 149.99,
		image: '/images/product-bag.jpg',
		isLive: true,
	},
	{
		id: '4',
		title: 'Aviator Sunglasses',
		price: 59.99,
		image: '/images/product-sunglasses.jpg',
		isLive: false,
	},
	{
		id: '5',
		title: 'Wireless Headphones Pro',
		price: 249.99,
		image: '/images/product-headphones.jpg',
		isLive: true,
	},
	{
		id: '6',
		title: 'Bomber Jacket',
		price: 179.99,
		image: '/images/product-jacket.jpg',
		isLive: false,
	},
	{
		id: '7',
		title: 'Slim Leather Wallet',
		price: 49.99,
		image: '/images/product-wallet.jpg',
		isLive: false,
	},
	{
		id: '8',
		title: 'Essential Cotton Tee',
		price: 29.99,
		image: '/images/product-tshirt.jpg',
		isLive: false,
	},
];

export { PRODUCTS };
