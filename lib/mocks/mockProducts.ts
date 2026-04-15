interface Product {
	id: string;
	title: string;
	price: number;
	image: string;
	description: string[];
}

const PRODUCTS: Product[] = [
	{
		id: '1',
		title: 'Converse Chuck Taylor All Star Sneaker',
		price: 60.0,
		description: [
			'The Ultimate Canvas: From the court to the streets, these are the shoes that defined a culture.',
			'Built for Comfort: Upgraded with OrthoLite cushioning, making them perfect for all-day city exploring.',
			'Iconic Silhouette: That unmistakable profile finished with the signature diamond-pattern sole for maximum grip.',
			'Your Creative Blank Slate: Designed to be worn, scuffed, and styled your way.',
		],
		image: '/assets/products/Shoes.png',
	},
	{
		id: '2',
		title: 'Oral-B iO Series 2 Rechargeable Electric Toothbrush',
		price: 60.0,
		description: [
			'Professional Clean: Get that "dentist clean" feeling in just one touch—perfect for staying photo-ready during the holidays.',
			"Smart Pressure Sensor: The LED ring turns Red if you're too rough and Green when your pressure is just right.",
			'Built-in Precision: Features an integrated 2-minute timer to ensure you hit the dentist-recommended brushing time every single time.',
			'Advanced Tech: Sleek navy design with a magnetic charger and a digital interface for a high-tech grooming experience.',
		],
		image: '/assets/products/Toothbrush.png',
	},
	{
		id: '3',
		title: 'Anker Nano Portable Power Bank',
		price: 60.0,
		description: [
			'Travel-Ready Power: A massive 10,000mAh capacity in a frame 16% smaller than standard models.',
			'No More Tangled Wires: Features a built-in, durable retractable USB-C cable tested for over 20,000 bends.',
			'Lightning Fast: 45W Max output charges an iPhone 16 Pro to 50% in just 27 minutes.',
			'Stay Informed: The smart digital display keeps you updated on exactly how much juice you have left.',
		],
		image: '/assets/products/Powerbank.png',
	},
	{
		id: '4',
		title: 'JBL Vibe Beam Wireless Earbuds',
		price: 60.0,
		description: [
			'Signature Sound: 8mm drivers deliver the famous JBL Deep Bass to keep your energy high all day.',
			'Non-Stop Audio: Up to 32 hours of total battery life; a quick 10-minute charge gives you 2 extra hours of play.',
			'Adventure Proof: IP54-certified water and dust resistance means they handle the beach or the bike trail with ease.',
			'Crystal Clear Calls: VoiceAware technology lets you balance your own voice during hands-free calls.',
		],
		image: '/assets/products/Earbuds.png',
	},
	{
		id: '5',
		title: 'JBL Tune Wireless Over-Ear Headphone',
		price: 60.0,
		description: [
			'Massive Battery: Enjoy up to 76 hours of wireless playtime on a single charge.',
			'Bluetooth 5.3: The latest tech for seamless, high-quality streaming without the messy cords.',
			'Pro-Level Customization: Use the JBL Headphones App to tailor your EQ and sound style to your exact taste.',
			'Foldable Comfort: Lightweight, ergonomic design that folds down for easy travel and storage.',
		],
		image: '/assets/products/Headphones.png',
	},
	{
		id: '6',
		title: 'Smart HEPA Air Purifier',
		price: 60.0,
		description: [
			'Sleep-Mode Silent: Operates as low as 20dB with all lights fully off for a calm, dark environment.',
			'3-Stage Defense: HEPA filtration captures dust, pet dander, and odors through a high-efficiency 360° intake.',
			'Eco-Friendly: Uses only 7W of power, making it perfect for energy-efficient, 24/7 air refreshing.',
			'Safe for Home: Integrated child lock and simple touch controls—no complex app setup required.',
		],
		image: '/assets/products/Air purifier.png',
	},
	{
		id: '7',
		title: 'Hydro Flask 64oz Bottle',
		price: 60.0,
		description: [
			'Ice Cold for 24H: TempShield double-wall vacuum insulation keeps your water chilled all day long.',
			'Pro-Grade Stainless: Durable 18/8 steel ensures pure taste with no flavor transfer between drinks.',
			'Totally Leakproof: The Flex Straw Cap is designed to be tossed in your bag without a single drop escaping.',
			'Monochrome Style: Features a stylish "Surf Blue" color-matched lid and body for a sleek, modern look.',
		],
		image: '/assets/products/Bottle.png',
	},
	{
		id: '8',
		title: 'Tomtoc Navigator Travel Backpack',
		price: 60.0,
		description: [
			'Breeze Through Security: The laptop compartment opens 180° for TSA checks, so you never have to remove your tech.',
			'Maximized Organization: Clamshell "suitcase-style" opening with dedicated slots for a 16" laptop and 13" iPad.',
			'Built for the Long Haul: Features premium YKK zippers and water-resistant fabric to survive the rigors of travel.',
			'Ergonomic Support: 3D padded back panel and chest buckles distribute weight evenly for stress-free transit.',
		],
		image: '/assets/products/Bag.png',
	},
];

export { PRODUCTS };
