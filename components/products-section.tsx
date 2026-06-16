"use client"

import { useState } from "react"
import Image from "next/image"
import { products, categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Eye } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { ProductModal } from "./product-modal"
import { Product } from "@/context/cart-context"

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  const filteredProducts = activeCategory === "Tous"
    ? products
    : products.filter((product) => product.category === activeCategory)

  return (
    <section id="produits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Notre Collection</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Découvrez nos produits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection soigneuse de meubles et accessoires pour sublimer votre intérieur
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{product.category}</Badge>
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white">Solde</Badge>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full" onClick={() => setSelectedProduct(product)}>
                    <Eye className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="rounded-full" onClick={() => addToCart(product)}>
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary">{product.price.toLocaleString()} DT</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice} DT</span>
                    )}
                  </div>
                  <Button size="sm" onClick={() => addToCart(product)} className="gap-1">
                    <ShoppingCart className="w-4 h-4" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  )
}