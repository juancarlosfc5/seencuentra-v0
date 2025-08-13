"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, MapPin, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductGrid from "@/components/product-grid"
import type { ProductDetail } from "@/types"

interface ProductDetailViewProps {
  product: ProductDetail
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto "${product.name}" que vi en seencuentra.com. ¿Podrías darme más información?`,
    )
    const whatsappUrl = `https://wa.me/${product.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="text-gris-suave hover:text-rojo-calido">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la tienda
          </Link>
        </Button>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-white shadow-sm">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-rojo-calido/10 text-rojo-calido">
                {product.category}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>

            <p className="text-4xl font-bold text-rojo-calido">{formatPrice(product.price)}</p>

            <div className="space-y-3 text-gris-suave">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">Creado por {product.entrepreneur}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{product.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
            <p className="text-gris-suave leading-relaxed">{product.description}</p>
          </div>

          {/* WhatsApp Button */}
          <Card className="border-verde-natural/20 bg-verde-natural/5">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-verde-natural/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-verde-natural" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contacta directamente</h4>
                    <p className="text-sm text-gris-suave">Habla con el emprendedor vía WhatsApp</p>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-verde-natural hover:bg-verde-natural/90 text-white text-lg py-6"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>

                <p className="text-xs text-gris-suave text-center">
                  Al hacer clic serás redirigido a WhatsApp con un mensaje predefinido
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 border-gray-200 hover:bg-gray-50 bg-transparent">
              <Heart className="w-4 h-4 mr-2" />
              Guardar favorito
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Productos similares</h2>
            <p className="text-gris-suave">Otros productos que podrían interesarte</p>
          </div>

          <ProductGrid products={product.relatedProducts} />
        </div>
      )}
    </div>
  )
}
