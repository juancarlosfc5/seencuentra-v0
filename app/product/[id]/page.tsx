import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetailView from "@/components/product-detail-view"
import { productDetails } from "@/lib/data"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productDetail = productDetails[params.id]

  if (!productDetail) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />
      <main>
        <ProductDetailView product={productDetail} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(productDetails).map((id) => ({
    id: id,
  }))
}
