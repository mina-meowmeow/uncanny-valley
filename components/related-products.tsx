"use client"

import { Card, CardContent } from "@/components/ui/card"

const products = [
  { id: "a", name: "Product A" },
  { id: "b", name: "Product B" },
  { id: "c", name: "Product C" },
  { id: "d", name: "Product D" },
  { id: "e", name: "Product E" },
]

export function RelatedProducts() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground text-center mb-6">Relevant Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="cursor-pointer hover:shadow-md transition-shadow border-border">
            <CardContent className="p-3">
              <div className="aspect-square rounded-md overflow-hidden bg-muted mb-2">
                <img
                  src={`/.jpg?height=200&width=200&query=${product.name} fashion item`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-foreground text-center">{product.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
