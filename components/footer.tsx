import { Heart, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-rojo-calido lowercase">seencuentra.com</h3>
            <p className="text-gris-suave text-sm leading-relaxed">
              Conectando compradores con emprendedores locales. Cada producto tiene una historia que contar.
            </p>
            <div className="flex items-center text-sm text-gris-suave">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 mx-1 text-rojo-calido fill-current" />
              <span>para emprendedores</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Enlaces rápidos</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm">
                Tienda
              </a>
              <a
                href="/quienes-somos"
                className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm"
              >
                Quiénes somos
              </a>
              <a
                href="/historias-emprendedoras"
                className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm"
              >
                Historias emprendedoras
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Sponsors placeholder */}
            <div className="pt-4">
              <p className="text-xs text-gris-suave mb-2">Con el apoyo de:</p>
              <div className="flex space-x-4 opacity-60">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-sm text-gris-suave">© 2024 seencuentra.com. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
