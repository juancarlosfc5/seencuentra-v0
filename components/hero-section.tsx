import { Search, Heart, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-rojo-calido/10 to-naranja-mostaza/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-rojo-calido">Descubre productos únicos</h1>
            <p className="text-xl md:text-2xl text-gris-suave max-w-3xl mx-auto leading-relaxed">
              Conecta directamente con emprendedores locales y conoce la historia detrás de cada creación artesanal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-verde-natural/20 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-verde-natural" />
              </div>
              <h3 className="font-semibold text-gray-900">Explora</h3>
              <p className="text-sm text-gris-suave text-center">Encuentra productos únicos de emprendedores locales</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-azul-verdoso/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-azul-verdoso" />
              </div>
              <h3 className="font-semibold text-gray-900">Conecta</h3>
              <p className="text-sm text-gris-suave text-center">Habla directamente con los creadores vía WhatsApp</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-naranja-mostaza/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-naranja-mostaza" />
              </div>
              <h3 className="font-semibold text-gray-900">Apoya</h3>
              <p className="text-sm text-gris-suave text-center">Impulsa el emprendimiento local sin comisiones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
