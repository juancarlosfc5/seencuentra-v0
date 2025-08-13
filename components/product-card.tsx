"use client"

import Image from "next/image"
import { MapPin, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleClick = () => {
    // Navigate to product detail page
    window.location.href = `/product/${product.id}`
  }

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-100 overflow-hidden"
      onClick={handleClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-rojo-calido">
            {product.category}
          </span>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-rojo-calido transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-rojo-calido">{formatPrice(product.price)}</p>
        </div>

        <div className="space-y-2 text-sm text-gris-suave">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{product.entrepreneur}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{product.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
