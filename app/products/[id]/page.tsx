'use client';
import { Header } from '@/components/header';
import { ProductDetails } from '@/components/product-details';
import { LivestreamPlayer } from '@/components/livestream-player';
import { RelatedProducts } from '@/components/related-products';

import { useParams } from 'next/navigation';
export default function ProductPage() {
	const params = useParams();

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ProductDetails productId={params.id} />
					<LivestreamPlayer />
				</div>
				<RelatedProducts />
			</main>
		</div>
	);
}
