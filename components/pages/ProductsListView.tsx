'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PRODUCTS } from '@/lib/mocks/mockProducts';

export default function ProductListView() {
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold text-foreground text-center mb-8">
				All Products
			</h1>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{PRODUCTS.map((product) => (
					<Link key={product.id} href={`/products/${product.id}`} passHref>
						<Card className="cursor-pointer hover:shadow-md transition-shadow border-border">
							<CardContent className="p-3">
								<div className="relative aspect-square rounded-md overflow-hidden bg-muted mb-2">
									<img
										src={product.image || '/placeholder.svg'}
										alt={product.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<p className="text-sm font-medium text-foreground truncate">
									{product.title}
								</p>
								<p className="text-sm text-muted-foreground">
									${product.price.toFixed(2)}
								</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</main>
	);
}
