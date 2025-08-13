"use client"

import Image from "next/image"
import { Heart, Users, Target, Award, Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactUsForm from "@/components/contact-us-form"

export default function AboutUsContent() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rojo-calido/10 to-naranja-mostaza/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-rojo-calido">Quiénes Somos</h1>
            <p className="text-xl text-gris-suave max-w-3xl mx-auto leading-relaxed">
              Somos una plataforma que cree en el poder de las historias humanas y en la magia de los productos hechos
              con amor y dedicación.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
              <div className="space-y-4 text-lg text-gris-suave leading-relaxed">
                <p>
                  En <span className="font-semibold text-rojo-calido">seencuentra.com</span>, creemos que cada producto
                  artesanal tiene una historia que merece ser contada. Nuestra misión es crear un puente entre los
                  emprendedores locales y las personas que valoran la autenticidad y la calidad.
                </p>
                <p>
                  No somos solo un marketplace, somos una comunidad que celebra la creatividad, apoya el emprendimiento
                  local y preserva las tradiciones artesanales de nuestro país.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/artesanos-trabajando-juntos.png"
                  alt="Artesanos trabajando juntos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Valores</h2>
            <p className="text-lg text-gris-suave max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos y cada relación que construimos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-rojo-calido/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-rojo-calido" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Autenticidad</h3>
                <p className="text-gris-suave text-sm leading-relaxed">
                  Cada producto cuenta una historia real, cada emprendedor comparte su pasión genuina.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-verde-natural/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-verde-natural" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Comunidad</h3>
                <p className="text-gris-suave text-sm leading-relaxed">
                  Construimos relaciones duraderas entre compradores y creadores, fortaleciendo nuestra comunidad local.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-azul-verdoso/20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-azul-verdoso" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Transparencia</h3>
                <p className="text-gris-suave text-sm leading-relaxed">
                  Sin comisiones ocultas, sin intermediarios innecesarios. Conexión directa y honesta.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-naranja-mostaza/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-naranja-mostaza" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Calidad</h3>
                <p className="text-gris-suave text-sm leading-relaxed">
                  Promovemos productos de alta calidad, hechos con dedicación y técnicas tradicionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestro Equipo</h2>
            <p className="text-lg text-gris-suave max-w-2xl mx-auto">
              Un grupo apasionado de personas comprometidas con el emprendimiento local y la artesanía tradicional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/equipo-seencuentra-reunion.png"
                  alt="Equipo de seencuentra en reunión"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Trabajando juntos</h3>
                <p className="text-sm opacity-90">
                  Nuestro equipo colabora estrechamente para crear la mejor experiencia para emprendedores y
                  compradores.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/visita-talleres-artesanos.png"
                  alt="Visitando talleres de artesanos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Conociendo artesanos</h3>
                <p className="text-sm opacity-90">
                  Visitamos talleres y conocemos de primera mano las historias detrás de cada producto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-azul-verdoso/10 to-verde-natural/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Nuestro Impacto</h2>
              <p className="text-lg text-gris-suave max-w-2xl mx-auto">
                Cada compra que realizas a través de nuestra plataforma genera un impacto positivo en la comunidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-rojo-calido">150+</div>
                <div className="text-lg font-semibold text-gray-900">Emprendedores</div>
                <div className="text-sm text-gris-suave">Apoyados en toda Colombia</div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-verde-natural">2,500+</div>
                <div className="text-lg font-semibold text-gray-900">Productos</div>
                <div className="text-sm text-gris-suave">Únicos y artesanales</div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-azul-verdoso">5,000+</div>
                <div className="text-lg font-semibold text-gray-900">Conexiones</div>
                <div className="text-sm text-gris-suave">Entre compradores y creadores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
                <p className="text-lg text-gris-suave">
                  ¿Tienes preguntas, sugerencias o quieres ser parte de nuestra comunidad? Nos encantaría escucharte.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rojo-calido/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-rojo-calido" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gris-suave">hola@seencuentra.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-verde-natural/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-verde-natural" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gris-suave">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-azul-verdoso/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-azul-verdoso" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gris-suave">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="bg-verde-natural hover:bg-verde-natural/90 text-white"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Hola! Me gustaría conocer más sobre seencuentra.com y cómo puedo ser parte de la comunidad.",
                    )
                    const whatsappUrl = `https://wa.me/573001234567?text=${message}`
                    window.open(whatsappUrl, "_blank")
                  }}
                >
                  Contáctanos por WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
