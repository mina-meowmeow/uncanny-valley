// 'use client';

// import {
// 	Sheet,
// 	SheetContent,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetFooter,
// } from '@/components/ui/sheet';
// import { Button } from '@/components/ui/button';
// import { useExperiment } from '@/lib/experiment/context';
// import { Trash2, Plus, Minus } from 'lucide-react';
// import { useState } from 'react';

// interface CartSheetProps {
// 	open: boolean;
// 	onOpenChange: (open: boolean) => void;
// }

// export function CartSheet({ open, onOpenChange }: CartSheetProps) {
// 	const { cartItems, removeFromCart, checkout, addToCart } = useExperiment();
// 	const [isCheckingOut, setIsCheckingOut] = useState(false);
// 	const [orderComplete, setOrderComplete] = useState(false);

// 	const total = cartItems.reduce((sum, item) => {
// 		const price = item.product?.price || 0;
// 		return sum + price * item.quantity;
// 	}, 0);

// 	const handleCheckout = async () => {
// 		setIsCheckingOut(true);
// 		const result = await checkout();
// 		setIsCheckingOut(false);
// 		if (result) {
// 			setOrderComplete(true);
// 			setTimeout(() => {
// 				setOrderComplete(false);
// 				onOpenChange(false);
// 			}, 3000);
// 		}
// 	};

// 	const updateQuantity = async (item: (typeof cartItems)[0], delta: number) => {
// 		const newQuantity = item.quantity + delta;
// 		if (newQuantity <= 0) {
// 			await removeFromCart(item.id);
// 		} else {
// 			await addToCart(item.product_id, newQuantity, item.color || undefined);
// 		}
// 	};

// 	return (
// 		<Sheet open={open} onOpenChange={onOpenChange}>
// 			<SheetContent className="flex flex-col">
// 				<SheetHeader>
// 					<SheetTitle>Your Cart</SheetTitle>
// 				</SheetHeader>

// 				{orderComplete ? (
// 					<div className="flex-1 flex flex-col items-center justify-center gap-4">
// 						<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
// 							<svg
// 								className="w-8 h-8 text-green-600"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 							>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth={2}
// 									d="M5 13l4 4L19 7"
// 								/>
// 							</svg>
// 						</div>
// 						<p className="text-lg font-medium">Order Complete!</p>
// 						<p className="text-sm text-muted-foreground text-center">
// 							This was a simulated purchase for research purposes. No actual
// 							transaction occurred.
// 						</p>
// 					</div>
// 				) : cartItems.length === 0 ? (
// 					<div className="flex-1 flex items-center justify-center">
// 						<p className="text-muted-foreground">Your cart is empty</p>
// 					</div>
// 				) : (
// 					<>
// 						<div className="flex-1 overflow-y-auto py-4 space-y-4">
// 							{cartItems.map((item) => (
// 								<div
// 									key={item.id}
// 									className="flex gap-3 p-3 bg-muted/50 rounded-lg"
// 								>
// 									<div className="w-16 h-16 rounded bg-muted overflow-hidden flex-shrink-0">
// 										{item.product?.images?.[0] && (
// 											<img
// 												src={item.product.images[0] || '/placeholder.svg'}
// 												alt={item.product.title}
// 												className="w-full h-full object-cover"
// 											/>
// 										)}
// 									</div>
// 									<div className="flex-1 min-w-0">
// 										<p className="font-medium text-sm truncate">
// 											{item.product?.title}
// 										</p>
// 										{item.color && (
// 											<p className="text-xs text-muted-foreground">
// 												{item.color}
// 											</p>
// 										)}
// 										<p className="text-sm font-semibold mt-1">
// 											${item.product?.price?.toFixed(2)}
// 										</p>
// 									</div>
// 									<div className="flex flex-col items-end gap-2">
// 										<Button
// 											variant="ghost"
// 											size="icon"
// 											className="h-6 w-6"
// 											onClick={() => removeFromCart(item.id)}
// 										>
// 											<Trash2 className="h-3 w-3" />
// 										</Button>
// 										<div className="flex items-center gap-1">
// 											<Button
// 												variant="outline"
// 												size="icon"
// 												className="h-6 w-6 bg-transparent"
// 												onClick={() => updateQuantity(item, -1)}
// 											>
// 												<Minus className="h-3 w-3" />
// 											</Button>
// 											<span className="w-6 text-center text-sm">
// 												{item.quantity}
// 											</span>
// 											<Button
// 												variant="outline"
// 												size="icon"
// 												className="h-6 w-6 bg-transparent"
// 												onClick={() => updateQuantity(item, 1)}
// 											>
// 												<Plus className="h-3 w-3" />
// 											</Button>
// 										</div>
// 									</div>
// 								</div>
// 							))}
// 						</div>

// 						<SheetFooter className="border-t pt-4">
// 							<div className="w-full space-y-4">
// 								<div className="flex justify-between text-lg font-semibold">
// 									<span>Total</span>
// 									<span>${total.toFixed(2)}</span>
// 								</div>
// 								<Button
// 									className="w-full"
// 									onClick={handleCheckout}
// 									disabled={isCheckingOut}
// 								>
// 									{isCheckingOut ? 'Processing...' : 'Checkout (Simulated)'}
// 								</Button>
// 								<p className="text-xs text-muted-foreground text-center">
// 									This is a research simulation. No real purchase will be made.
// 								</p>
// 							</div>
// 						</SheetFooter>
// 					</>
// 				)}
// 			</SheetContent>
// 		</Sheet>
// 	);
// }
