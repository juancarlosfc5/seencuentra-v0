"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, MessageCircle, Heart, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import EntrepreneurContactForm from "@/components/entrepreneur-contact-form"
import type { Entrepreneur } from "@/types"

interface EntrepreneurProfileProps {
  entrepreneur: Entrepreneur
}

export default function EntrepreneurProfile({ entrepreneur }: EntrepreneurProfileProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola ${entrepreneur.name}! Vi tu perfil en seencuentra.com y me gustaría conocer más sobre tus productos.`,
    )
    const whatsappUrl = `https://wa.me/${entrepreneur.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="text-gris-suave hover:text-rojo-calido">
          <Link href="/historias-emprendedoras">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a historias
          </Link>
        </Button>
      </div>

      {/* Profile Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src={entrepreneur.photo || "/placeholder.svg"}
                alt={entrepreneur.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <Card className="border-verde-natural/20 bg-verde-natural/5">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-gray-900">Contacta directamente</h3>
                  <p className="text-sm text-gris-suave">Habla con {entrepreneur.name} vía WhatsApp</p>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-verde-natural hover:bg-verde-natural/90 text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">{entrepreneur.name}</h1>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2 text-rojo-calido">
                  <Store className="w-5 h-5" />
                  <span className="font-semibold">{entrepreneur.businessName}</span>
                </div>
                <div className="flex items-center gap-2 text-gris-suave">
                  <MapPin className="w-5 h-5" />
                  <span>{entrepreneur.location}</span>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Mi Historia</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gris-suave leading-relaxed text-lg">{entrepreneur.story}</p>
              </div>
            </div>

            {/* Additional Story Content */}
            <div className="space-y-6">
              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mi Proceso Creativo</h3>
                  <p className="text-gris-suave leading-relaxed">
                    Cada producto que creo nace de una inspiración única. Utilizo técnicas tradicionales que he
                    perfeccionado a lo largo de los años, combinándolas con toques modernos que reflejan mi
                    personalidad. La calidad y la autenticidad son los pilares de mi trabajo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Por qué elegir mis productos?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-rojo-calido/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-rojo-calido" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Hecho con amor</h4>
                        <p className="text-sm text-gris-suave">Cada pieza lleva mi dedicación y pasión</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-azul-verdoso/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Store className="w-4 h-4 text-azul-verdoso" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Productos únicos</h4>
                        <p className="text-sm text-gris-suave">No encontrarás nada igual en otro lugar</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <EntrepreneurContactForm entrepreneur={entrepreneur} />
    </div>
  )
}
