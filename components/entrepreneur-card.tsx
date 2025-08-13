"use client"

import Image from "next/image"
import { MapPin, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Entrepreneur } from "@/types"

interface EntrepreneurCardProps {
  entrepreneur: Entrepreneur
}

export default function EntrepreneurCard({ entrepreneur }: EntrepreneurCardProps) {
  const handleClick = () => {
    window.location.href = `/emprendedor/${entrepreneur.id}`
  }

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-100 overflow-hidden">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={entrepreneur.photo || "/placeholder.svg"}
          alt={entrepreneur.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{entrepreneur.name}</h3>
          <p className="text-sm opacity-90">{entrepreneur.businessName}</p>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gris-suave">
            <MapPin className="w-4 h-4" />
            <span>{entrepreneur.location}</span>
          </div>

          <p className="text-gris-suave text-sm leading-relaxed line-clamp-3">{entrepreneur.story}</p>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleClick} className="flex-1 bg-rojo-calido hover:bg-rojo-calido/90 text-white" size="sm">
            Ver historia completa
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-verde-natural text-verde-natural hover:bg-verde-natural hover:text-white bg-transparent"
            onClick={(e) => {
              e.stopPropagation()
              const message = encodeURIComponent(
                `Hola ${entrepreneur.name}! Vi tu perfil en seencuentra.com y me gustaría conocer más sobre tus productos.`,
              )
              const whatsappUrl = `https://wa.me/${entrepreneur.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
