"use client"

import { Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <nav className="flex items-center gap-6">
          <a href="/" className="font-semibold text-foreground hover:text-foreground/80">
            Home
          </a>
        </nav>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Input type="text" placeholder="Search..." className="pr-10 bg-background border-border" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <Button variant="ghost" className="flex items-center gap-2">
          <span className="font-medium">My Cart</span>
          <div className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Button>
      </div>
    </header>
  )
}
