"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const colors = [
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "navy", label: "Navy" },
  { value: "olive", label: "Olive" },
]

export function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="space-y-4">
      {/* Product Image */}
      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
        <img src="/fashion-product-clothing-item.jpg" alt="Product Image" className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Product title</h1>
          <span className="text-2xl font-bold text-foreground">$xxx</span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>

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
          <Button className="flex-1 h-12 text-base font-semibold border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background">
            Add To Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 border-2 border-foreground bg-transparent"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </div>
    </div>
  )
}
