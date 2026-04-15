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
	const productId = Array.isArray(params.id) ? params.id[0] : params.id;

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<ProductDetails
						productId={productId}
						viewType={session?.view_type}
						presenterType={session?.presenter_type}
					/>
					<LivestreamPlayer
						productId={productId}
						viewType={session?.view_type}
						presenterType={session?.presenter_type}
					/>
				</div>
				<RelatedProducts currentProductId={productId} />
			</main>
		</div>
	);
}
