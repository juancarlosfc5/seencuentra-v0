import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Producto no encontrado</h1>
            <p className="text-lg text-gris-suave max-w-2xl mx-auto">
              Lo sentimos, el producto que buscas no existe o ha sido removido de nuestra plataforma.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-rojo-calido hover:bg-rojo-calido/90">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a la tienda
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
