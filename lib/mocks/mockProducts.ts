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
	{
		id: '9',
		title: 'Premium Toothbrush',
		price: 9.99,
		image: '/images/product-toothbrush.png',
		isLive: true,
	},
	{
		id: '10',
		title: 'Philips Sonicare 4100 Series Electric Toothbrush',
		price: 79.99,
		description: [
			'The C2 Optimal Plaque brush head with soft, flexible, stain-removal bristles helps whiten and polish your teeth; it also removes up to 700% better plaque than a manual toothbrush',
			'Electric toothbrush for adults providing gentle yet effective cleaning: the Advanced Sonic Technology pulses fluid between teeth and along the gumline for even more effective oral care',
			'Safe and gentle electric toothbrush with pressure sensor: if you apply too much pressure, the handle will pulse slightly, reminding you to ease off the pressure, protecting your teeth and gums',
			"Optimize your routine: EasyStart for a gradual, gentle increase in brushing power, SmarTimer informing when you've reached 2 minutes, and QuadPacer to brush each section of a mouth for 30 seconds",
			"Brush head replacement reminder tracks how often and how hard you brush, then notifies you when it's time to replace the brush head once it's time; dental professionals recommend changing your brush head regularly",
		],
		image: 'assets/products/product-toothbrush.png',
		isLive: true,
	},
	{
		id: '11',
		title:
			'Anker Nano Portable Charger, 45W 10000mAh with 2.3 ft Retractable Cable',
		price: 45.99,
		description: [
			'45W Power Delivery: The Anker Nano Portable Charger delivers a powerful 45W output, allowing you to quickly charge your devices on the go. It can charge smartphones, tablets, and even some laptops with USB-C charging capabilities.',
			'Compact and Portable: With its sleek and compact design, the Anker Nano is easy to carry in your pocket, bag, or purse. It’s perfect for travel, commuting, or any time you need a quick boost of power.',
			'Built-in Retractable Cable: The Anker Nano comes with a convenient 2.3 ft retractable cable, eliminating the need to carry extra cables. Simply pull out the cable when you need it and retract it back when you’re done.',
		],
		image: 'assets/products/product-anker-charger.png',
		isLive: true,
	},
	{
		id: '12',
		title: 'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
		price: 299.99,
		description: [
			'Industry-leading noise cancellation technology that blocks out ambient noise, allowing you to focus on your music or calls.',
			'30-hour battery life with quick charge capability, providing hours of uninterrupted listening.',
			'Premium sound quality with deep bass and clear highs, delivering an immersive audio experience.',
		],
		image: 'assets/products/product-sony-headphones.png',
		isLive: true,
	},
	{
		id: '13',
		title:
			'JBL Vibe Beam - True Wireless JBL Deep Bass Sound Earbuds, Bluetooth 5.2, Water & Dust Resistant',
		price: 79.99,
		description: [
			'True Wireless Freedom: Enjoy the freedom of wireless listening with the JBL Vibe Beam earbuds. With Bluetooth 5.2 connectivity, you can easily connect to your devices and experience a seamless audio experience without any wires.',
			'JBL Deep Bass Sound: Experience powerful and immersive sound with JBL’s signature deep bass technology. The Vibe Beam earbuds deliver rich, clear audio that brings your music to life, whether you’re listening to your favorite tunes or taking calls.',
			'Water & Dust Resistant: The JBL Vibe Beam earbuds are designed to withstand your active lifestyle. With an IPX7 rating, they are water-resistant and can be submerged in water up to 1 meter for 30 minutes, making them perfect for workouts, outdoor activities, or even a rainy day.',
		],
		image: 'assets/products/product-jbl-earbuds.png',
		isLive: true,
	},
];

export { PRODUCTS };
