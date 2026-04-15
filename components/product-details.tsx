'use client';

import { useMemo, useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { PRODUCTS } from '@/lib/mocks/mockProducts';
import { logEvent } from './utils/analytics';
import AnalyticsTracker from './AnalyticsTracker';

const colors = [
	{ value: 'black', label: 'Black' },
	{ value: 'white', label: 'White' },
	{ value: 'navy', label: 'Navy' },
	{ value: 'olive', label: 'Olive' },
];

type ProductDetailsProps = {
	productId: string;
	presenterType?: string;
	viewType?: string;
};

export function ProductDetails({
	productId,
	viewType,
	presenterType,
}: ProductDetailsProps) {
	const [selectedColor, setSelectedColor] = useState('');
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [addedToCart, setAddedToCart] = useState(false);

	const product = useMemo(
		() => PRODUCTS.find((p) => p.id === productId),
		[productId],
	);

	console.log(product);

	const handleWishlist = () => {
		if (!isWishlisted) {
			logEvent('ADDED_TO_WISHLIST', {
				product_id: product?.id,
				product_name: product?.title,
			});
		} else {
			logEvent('REMOVED_FROM_WISHLIST', {
				product_id: product?.id,
				product_name: product?.title,
			});
		}

		setIsWishlisted(!isWishlisted);
	};

	const handleAddToCart = () => {
		if (addedToCart) return;
		logEvent('ADDED_TO_CART', {
			product_id: product?.id,
			product_name: product?.title,
		});
		setAddedToCart(true);
	};

	if (!product) {
		return (
			<div className="space-y-4">
				<div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center">
					<p className="text-muted-foreground">Product not found</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<AnalyticsTracker isAiStream={presenterType} mediaType={viewType} />
			<div className="space-y-4">
				{/* Product Image */}
				<div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Product Info */}
				<div className="space-y-3">
					<div className="flex items-start justify-between gap-4">
						<h1 className="text-2xl font-bold text-foreground">
							{product.title}
						</h1>
						<span className="text-2xl font-bold text-foreground">
							${product.price}
						</span>
					</div>

					<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
						{product.description.map((line, index) => (
							<li key={index}>
								<p className="text-muted-foreground leading-relaxed">{line}</p>
							</li>
						))}
					</ul>

					{/* Color Selector */}
					<Select value={selectedColor} onValueChange={setSelectedColor}>
						<SelectTrigger className="w-full border-2 border-foreground bg-background">
							<SelectValue placeholder="Select Color" />
						</SelectTrigger>
						<SelectContent>
							{colors.map((color) => (
								<SelectItem key={color.value} value={color.value}>
									{color.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* Add to Cart & Wishlist */}
					<div className="flex items-center gap-3">
						<Button
							className="flex-1 h-12 text-base font-semibold border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background"
							onClick={handleAddToCart}
						>
							Add To Cart
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="h-12 w-12 border-2 border-foreground bg-transparent"
							onClick={handleWishlist}
						>
							<Heart
								className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
							/>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
