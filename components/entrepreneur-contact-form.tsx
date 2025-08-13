"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import type { Entrepreneur } from "@/types"

interface EntrepreneurContactFormProps {
  entrepreneur: Entrepreneur
}

export default function EntrepreneurContactForm({ entrepreneur }: EntrepreneurContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
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
      description: `Tu mensaje ha sido enviado a ${entrepreneur.name}. Te contactará pronto.`,
    })

    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <Mail className="w-6 h-6 text-rojo-calido" />
          Envía un mensaje a {entrepreneur.name}
        </CardTitle>
        <p className="text-gris-suave">
          ¿Tienes alguna pregunta específica? Envía un mensaje directo y {entrepreneur.name} te responderá pronto.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Tu nombre *
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe tu nombre"
                className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Tu email *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Tu mensaje *
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Hola ${entrepreneur.name}, me interesa conocer más sobre...`}
              rows={5}
              className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-rojo-calido hover:bg-rojo-calido/90 text-white px-8"
              size="lg"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-gris-suave text-center">
            Tu mensaje será enviado directamente a {entrepreneur.name}. Respetamos tu privacidad y no compartimos tu
            información.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
