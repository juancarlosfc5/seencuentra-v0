import EntrepreneurCard from "@/components/entrepreneur-card"
import type { Entrepreneur } from "@/types"

interface EntrepreneurGridProps {
  entrepreneurs: Entrepreneur[]
}

export default function EntrepreneurGrid({ entrepreneurs }: EntrepreneurGridProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Nuestros Emprendedores</h2>
        <p className="text-lg text-gris-suave max-w-2xl mx-auto">
          Cada emprendedor tiene una historia única que contar. Conoce a las personas detrás de los productos que amas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entrepreneurs.map((entrepreneur) => (
          <EntrepreneurCard key={entrepreneur.id} entrepreneur={entrepreneur} />
        ))}
      </div>
    </div>
  )
}
