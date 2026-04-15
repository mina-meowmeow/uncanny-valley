'use client';

import { Card, CardContent } from '@/components/ui/card';
import { PRODUCTS } from '@/lib/mocks/mockProducts';
import Link from 'next/link';

export function RelatedProducts({
	currentProductId,
}: {
	currentProductId?: string;
}) {
	const relatedProducts = PRODUCTS.filter(
		(product) => product.id !== currentProductId,
	).slice(0, 5);

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold text-foreground text-center mb-6">
				Relevant Products
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
				{relatedProducts.map((product) => (
					<Link
						href="/products/[id]"
						as={`/products/${product.id}`}
						key={product.id}
						passHref
					>
						<Card
							key={product.id}
							className="cursor-pointer hover:shadow-md transition-shadow border-border"
						>
							<CardContent className="p-3">
								<div className="aspect-square rounded-md overflow-hidden bg-muted mb-2">
									<img
										src={product.image}
										alt={product.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<p className="text-sm font-medium text-foreground text-center">
									{product.title}
								</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}
