'use client';

import { useState, useEffect } from 'react';
import { Eye, ShoppingCart, Share2, Heart, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LIVESTREAMS } from '@/lib/mocks/mockLivestreams';

type HostType = 'human' | 'ai-avatar' | 'stylized' | 'voice-only';

interface ChatMessage {
	id: string;
	username: string;
	message: string;
	color: string;
}

const initialMessages: ChatMessage[] = [
	{
		id: '1',
		username: 'ozymandioz',
		message: 'do you have any discount?',
		color: 'text-amber-400',
	},
	{
		id: '2',
		username: 'minameowmeow',
		message: 'how much is this?',
		color: 'text-pink-400',
	},
];

interface FloatingHeart {
	id: number;
	x: number;
}

export function LivestreamPlayer({ productId, viewType, presenterType }) {
	// replace this with some kind of fetching later
	const livestreamObject = LIVESTREAMS.find(
		(stream) =>
			stream.productId === productId && stream.hostType === presenterType,
	);

	const [hostType, setHostType] = useState<HostType>('ai-avatar');
	const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
	const [newMessage, setNewMessage] = useState('');
	const [viewerCount, setViewerCount] = useState(232);
	const [hearts, setHearts] = useState<FloatingHeart[]>([]);
	const [isLiked, setIsLiked] = useState(false);

	// Simulate viewer count fluctuation
	useEffect(() => {
		const interval = setInterval(() => {
			setViewerCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const sendMessage = () => {
		if (!newMessage.trim()) return;
		const newMsg: ChatMessage = {
			id: Date.now().toString(),
			username: 'you',
			message: newMessage,
			color: 'text-green-400',
		};
		setMessages((prev) => [...prev.slice(-4), newMsg]);
		setNewMessage('');
	};

	const addHeart = () => {
		const newHeart: FloatingHeart = {
			id: Date.now(),
			x: Math.random() * 40,
		};
		setHearts((prev) => [...prev, newHeart]);
		setTimeout(() => {
			setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
		}, 2000);
	};

	const getHostLabel = () => {
		switch (hostType) {
			case 'human':
				return null;
			case 'ai-avatar':
				return 'AI';
			case 'stylized':
				return 'Avatar';
			case 'voice-only':
				return 'Audio';
			default:
				return null;
		}
	};

	return (
		<div className="space-y-3">
			{/* Sale Banner */}
			<div className="bg-foreground text-background text-center py-2 px-4 rounded-t-lg font-bold text-lg">
				SUPER SALE UP TO 50%
			</div>

			{/* Video Container */}
			<div className="bg-[#1a1a1a] rounded-b-lg overflow-hidden">
				{/* Host Info Bar */}
				<div className="flex items-center justify-between px-3 py-2 bg-[#1a1a1a]">
					<div className="flex items-center gap-3">
						<Avatar className="h-10 w-10 border-2 border-background/20">
							<AvatarImage src="/streamer-host-avatar.jpg" />
							<AvatarFallback>H</AvatarFallback>
						</Avatar>
						<div>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-white text-sm">
									{livestreamObject.hostName}
								</span>
								{getHostLabel() && (
									<Badge
										variant="secondary"
										className="text-xs px-1.5 py-0 bg-white/20 text-white"
									>
										{getHostLabel()}
									</Badge>
								)}
							</div>
							<span className="text-xs text-white/60">1234k followers</span>
						</div>
					</div>
					<div className="flex items-center gap-1 text-white">
						<span className="text-sm font-medium">{viewerCount}</span>
						<span className="text-xs text-white/60">watchers</span>
						<Eye className="h-4 w-4 ml-1" />
					</div>
				</div>

				{/* Video Area */}
				<div className="relative aspect-[9/12] bg-[#1a1a1a]">
					{/* Host Display */}
					{livestreamObject?.videoUrl ? (
						<video
							src={livestreamObject.videoUrl}
							className="block h-full w-full object-cover object-center"
							autoPlay
							loop
							muted
							playsInline
							preload="metadata"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center">
							{hostType === 'voice-only' ? (
								<div className="flex flex-col items-center gap-4">
									<div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
										<div className="w-16 h-16 rounded-full bg-white/20 animate-pulse" />
									</div>
									<span className="text-white/60 text-sm">Audio Only</span>
								</div>
							) : (
								<div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
									<svg
										className="w-20 h-20 text-[#1a1a1a]"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
									</svg>
								</div>
							)}
						</div>
					)}

					{/* Floating Hearts */}
					<div className="absolute right-4 bottom-20 w-12">
						{hearts.map((heart) => (
							<div
								key={heart.id}
								className="absolute animate-float-up text-red-500"
								style={{ right: `${heart.x}px` }}
							>
								<Heart className="h-5 w-5 fill-current" />
							</div>
						))}
					</div>

					{/* Chat Overlay */}
					<div className="absolute bottom-16 left-3 right-16 space-y-1">
						{messages.slice(-3).map((msg) => (
							<div
								key={msg.id}
								className="text-sm bg-black/40 backdrop-blur-sm rounded px-2 py-1"
							>
								<span className={`font-medium ${msg.color}`}>
									{msg.username}:
								</span>
								<span className="text-white/90 ml-1">{msg.message}</span>
							</div>
						))}
					</div>
				</div>

				{/* Bottom Controls */}
				<div className="flex items-center gap-2 p-3 bg-[#1a1a1a]">
					<Button
						variant="ghost"
						size="icon"
						className="text-white hover:bg-white/10"
					>
						<ShoppingCart className="h-5 w-5" />
					</Button>
					<div className="flex-1 relative">
						<Input
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
							placeholder="What are you thinking?..."
							className="bg-[#2a2a2a] border-none text-white placeholder:text-white/40 pr-10"
						/>
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-white/60 hover:text-white hover:bg-transparent"
							onClick={sendMessage}
						>
							<Send className="h-4 w-4" />
						</Button>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="text-white hover:bg-white/10"
					>
						<Share2 className="h-5 w-5" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="text-white hover:bg-white/10"
						onClick={() => {
							setIsLiked(!isLiked);
							addHeart();
						}}
					>
						<Heart
							className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
						/>
					</Button>
				</div>
			</div>

			{/* Host Type Selector (for experiment control) */}
			{/* <div className="bg-muted rounded-lg p-3">
				<p className="text-xs text-muted-foreground mb-2 font-medium">
					Experiment: Host Condition
				</p>
				<div className="flex flex-wrap gap-2">
					{(['human', 'ai-avatar', 'stylized', 'voice-only'] as HostType[]).map(
						(type) => (
							<Button
								key={type}
								variant={hostType === type ? 'default' : 'outline'}
								size="sm"
								onClick={() => setHostType(type)}
								className="text-xs capitalize"
							>
								{type.replace('-', ' ')}
							</Button>
						),
					)}
				</div>
			</div> */}
		</div>
	);
}
