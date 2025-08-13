"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function CommentsForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por tu comentario. Lo revisaremos pronto.",
    })

    setName("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <section className="bg-gradient-to-br from-azul-verdoso/10 to-verde-natural/10 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-sm border-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Comparte tu experiencia</CardTitle>
            <p className="text-gris-suave">Cuéntanos qué te parece nuestra plataforma y cómo podemos mejorar</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Tu nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe tu nombre"
                    className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                  />
                </div>

                <div className="md:flex md:items-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rojo-calido hover:bg-rojo-calido/90 text-white"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar comentario
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Tu mensaje
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Comparte tu experiencia, sugerencias o comentarios..."
                  rows={4}
                  className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido resize-none"
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
