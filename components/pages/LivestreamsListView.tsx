'use client';

import { Eye, Radio, Play } from 'lucide-react';
import Link from 'next/link';
import { LIVESTREAMS } from '@/lib/mocks/mockLivestreams';
import { PRODUCTS } from '@/lib/mocks/mockProducts';

function formatViewers(count: number): string {
	if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
	return count.toString();
}

const HOST_TYPE_LABEL: Record<string, string> = {
	human: 'Human',
	ai_avatar: 'AI',
	stylized_avatar: 'Avatar',
	voice_only: 'Audio',
};

function StreamCard({ streamItem }) {
	const relatedProduct = PRODUCTS.find(
		(product) => product.id === streamItem.productId,
	);
	return (
		<Link href="/" className="block group" passHref>
			<div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-foreground">
				<img
					src={streamItem.thumbnailImage || '/placeholder.svg'}
					alt={streamItem.title}
					className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
				/>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />

				{/* Top: LIVE + viewers */}
				<div className="absolute top-2 left-2 right-2 flex items-center justify-between">
					<span className="flex items-center gap-1 bg-destructive text-primary-foreground text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
						<span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
						Live
					</span>
					<span className="flex items-center gap-1 bg-foreground/60 text-background text-[10px] font-medium px-1.5 py-0.5 rounded">
						<Eye className="h-3 w-3" />
						{formatViewers(streamItem.viewerCount)}
					</span>
				</div>

				{/* Host type badge */}
				<span className="absolute top-9 left-2 bg-background/70 text-foreground text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
					{HOST_TYPE_LABEL[streamItem.hostType]}
				</span>

				{/* Hover play icon */}
				<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
						<Play className="h-5 w-5 text-background fill-background ml-0.5" />
					</div>
				</div>

				{/* Bottom: host + pinned product */}

				<div className="absolute bottom-0 left-0 right-0 p-2.5">
					{/* Pinned product */}
					<Link href={`/products/${relatedProduct?.id}`} passHref>
						<div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-md p-1.5 mb-2 hover:bg-background/20 transition-colors">
							<img
								src={relatedProduct?.image || '/placeholder.svg'}
								alt={relatedProduct?.title}
								className="h-8 w-8 rounded object-cover flex-shrink-0"
							/>
							<div className="flex-1 min-w-0">
								<p className="text-background text-[10px] font-medium truncate">
									{relatedProduct?.title}
								</p>
								<p className="text-background text-[11px] font-bold">
									${relatedProduct?.price.toFixed(2)}
								</p>
							</div>
						</div>
					</Link>

					{/* Host info */}
					<div className="flex items-center gap-2">
						{streamItem.hostImage ? (
							<img
								src={streamItem.hostImage || '/placeholder.svg'}
								alt={streamItem.hostName}
								className="h-6 w-6 rounded-full border border-background/30 object-cover flex-shrink-0"
							/>
						) : (
							<div className="h-6 w-6 rounded-full border border-background/30 bg-muted flex items-center justify-center flex-shrink-0">
								<Radio className="h-3 w-3 text-muted-foreground" />
							</div>
						)}
						<p className="text-background text-xs font-medium truncate">
							{streamItem.hostName}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default function LivestreamsListView() {
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold text-foreground text-center mb-8">
				Live Now
			</h1>

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
				{LIVESTREAMS.map((streamItem) => (
					<StreamCard key={streamItem.id} streamItem={streamItem} />
				))}
			</div>
		</main>
	);
}
