import Header from "@/components/header"
import Footer from "@/components/footer"
import EntrepreneurGrid from "@/components/entrepreneur-grid"
import { entrepreneurs } from "@/lib/data"

export default function HistoriasEmprendedorasPage() {
  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-naranja-mostaza/10 to-azul-verdoso/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-rojo-calido">Historias Emprendedoras</h1>
              <p className="text-xl text-gris-suave max-w-3xl mx-auto leading-relaxed">
                Conoce a los artesanos y emprendedores que dan vida a cada producto. Cada historia es única, cada
                creación tiene un propósito.
              </p>
            </div>
          </div>
        </section>

        {/* Entrepreneurs Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EntrepreneurGrid entrepreneurs={entrepreneurs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
