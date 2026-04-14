// interface LivestreamItem {
// 	id: string;
// 	hostName: string;
// 	hostType: 'human' | 'ai_avatar' | 'stylized_avatar' | 'voice_only';
// 	hostImage: string;
// 	thumbnailImage: string;
// 	title: string;
// 	viewerCount: number;
// 	productId?: string;
// }

const LIVESTREAMS = [
	{
		id: 'live-human-0',
		hostName: 'Sarah Chen',
		hostType: 'human',
		hostImage: '/images/live-host-1.jpg',
		thumbnailImage: '/images/live-host-1.jpg',
		videoUrl: '/assets/human_sample.mp4',
		title: 'Electric Toothbrush - Unboxing & Review',
		viewerCount: 1243,
		productId: '9',
	},
	{
		id: 'live-human-0',
		hostName: 'Aria',
		hostType: 'ai',
		hostImage: '/images/live-host-2.jpg',
		thumbnailImage: '/images/live-host-2.jpg',
		videoUrl: '/assets/ai_sample.mp4',
		title: 'Electric Toothbrush - Unboxing & Review',
		viewerCount: 1243,
		productId: '9',
	},
	{
		id: 'live-1',
		hostName: 'Sarah Chen',
		hostType: 'human',
		hostImage: '/images/live-host-1.jpg',
		thumbnailImage: '/images/live-host-1.jpg',
		title: 'Sneaker Drop - Exclusive Deals',
		viewerCount: 1243,
		productId: '1',
	},
	{
		id: 'live-2',
		hostName: 'ai Host Nova',
		hostType: 'ai_avatar',
		hostImage: '/images/live-host-4.jpg',
		thumbnailImage: '/images/live-host-4.jpg',
		title: 'Tech Essentials - Headphones',
		viewerCount: 876,
		productId: '2',
	},
	{
		id: 'live-3',
		hostName: 'PixelPal',
		hostType: 'stylized_avatar',
		hostImage: '/images/live-host-3.jpg',
		thumbnailImage: '/images/live-host-3.jpg',
		title: 'Accessories Haul - Bags & Wallets',
		viewerCount: 542,
		productId: '3',
	},
	{
		id: 'live-4',
		hostName: 'The Voice',
		hostType: 'voice_only',
		hostImage: '',
		thumbnailImage: '/images/product-watch.jpg',
		title: 'Watch Review - Classic Timepieces',
		viewerCount: 328,
		productId: '4',
	},
	{
		id: 'live-5',
		hostName: 'Marcus Rivera',
		hostType: 'human',
		hostImage: '/images/live-host-2.jpg',
		thumbnailImage: '/images/live-host-2.jpg',
		title: 'Streetwear - Jackets & Tees',
		viewerCount: 2105,
		productId: '5',
	},
	{
		id: 'live-6',
		hostName: 'ai Host Aria',
		hostType: 'ai_avatar',
		hostImage: '/images/live-host-4.jpg',
		thumbnailImage: '/images/live-host-4.jpg',
		title: 'Sunglass Style Guide',
		viewerCount: 415,
		productId: '6',
	},
];

export { LIVESTREAMS };
