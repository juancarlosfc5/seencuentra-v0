"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloatButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hola! Me gustaría conocer más sobre seencuentra.com y los productos disponibles.",
    )
    const whatsappUrl = `https://wa.me/573001234567?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-verde-natural hover:bg-verde-natural/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  )
}
