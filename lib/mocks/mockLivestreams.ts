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
		id: 'live-1',
		hostName: 'Sarah Chen',
		hostType: 'human',
		hostImage: '/images/live-host-1.jpg',
		thumbnailImage: '/images/live-host-1.jpg',
		title: 'Sneaker Drop - Exclusive Deals',
		videoUrl: '/assets/ai_sample.mp4',
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
		videoUrl: '/assets/ai_sample.mp4',
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
		videoUrl: '/assets/ai_sample.mp4',
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
		videoUrl: '/assets/ai_sample.mp4',
		viewerCount: 328,
		productId: '4',
	},
	{
		id: 'live-5',
		hostName: 'Marcus Rivera',
		hostType: 'human',
		hostImage: '/images/live-host-2.jpg',
		thumbnailImage: '/images/live-host-2.jpg',
		videoUrl: '/assets/ai_sample.mp4',
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
		videoUrl: '/assets/ai_sample.mp4',
		title: 'Sunglass Style Guide',
		viewerCount: 415,
		productId: '6',
	},
];

export { LIVESTREAMS };
