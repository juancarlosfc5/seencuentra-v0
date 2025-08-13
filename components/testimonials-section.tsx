import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Lo que dicen nuestros usuarios</h2>
          <p className="text-lg text-gris-suave max-w-2xl mx-auto">
            Conoce las experiencias de quienes ya han descubierto productos únicos en nuestra plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-naranja-mostaza text-naranja-mostaza" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300" />
                </div>

                <p className="text-gris-suave leading-relaxed">"{testimonial.message}"</p>

                <div className="pt-2">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
