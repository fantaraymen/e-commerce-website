"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { Product, useCart } from "@/context/cart-context"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between py-4">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {product.name}
              </h2>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
            </div>
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Prix</span>
                <span className="text-3xl font-bold text-primary">
                  {product.price.toLocaleString()} DT
                </span>
              </div>
              <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}