"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import type { Category } from "@/types"

interface SearchFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedLocation: string
  onLocationChange: (value: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (value: [number, number]) => void
  categories: Category[]
  locations: string[]
}

export default function SearchFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  priceRange,
  onPriceRangeChange,
  categories,
  locations,
}: SearchFiltersProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const clearFilters = () => {
    onSearchChange("")
    onCategoryChange("all")
    onLocationChange("all")
    onPriceRangeChange([0, 200000])
  }

  return (
    <Card className="mb-8 shadow-sm border-gray-100">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gris-suave w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar productos o emprendedores..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-12 text-base border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Categoría</label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="border-gray-200 focus:border-rojo-calido">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Ubicación</label>
              <Select value={selectedLocation} onValueChange={onLocationChange}>
                <SelectTrigger className="border-gray-200 focus:border-rojo-calido">
                  <SelectValue placeholder="Todas las ubicaciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las ubicaciones</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Rango de precio: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </label>
              <div className="px-2 py-4">
                <Slider
                  value={priceRange}
                  onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                  max={200000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full border-gray-200 hover:bg-gray-50 bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Limpiar filtros
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
