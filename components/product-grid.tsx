import ProductCard from "@/components/product-card"
import type { Product } from "@/types"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="space-y-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-4xl text-gray-400">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">No se encontraron productos</h3>
          <p className="text-gris-suave max-w-md mx-auto">
            Intenta ajustar tus filtros de búsqueda para encontrar más productos
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Productos disponibles
          <span className="text-base font-normal text-gris-suave ml-2">
            ({products.length} {products.length === 1 ? "producto" : "productos"})
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
