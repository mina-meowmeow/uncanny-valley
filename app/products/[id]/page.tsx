'use client';
import { Header } from '@/components/header';
import { ProductDetails } from '@/components/product-details';
import { LivestreamPlayer } from '@/components/livestream-player';
import { RelatedProducts } from '@/components/related-products';

import { useParams } from 'next/navigation';
import { useSession } from '@/lib/contexts/sessionsContext';
export default function ProductPage() {
	const { session } = useSession();
	const params = useParams();

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ProductDetails
						productId={params.id}
						viewType={session?.view_type}
						presenterType={session?.presenter_type}
					/>
					<LivestreamPlayer />
				</div>
				<RelatedProducts />
			</main>
		</div>
	);
}
