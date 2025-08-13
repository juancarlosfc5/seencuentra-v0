"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import SearchFilters from "@/components/search-filters"
import TestimonialsSection from "@/components/testimonials-section"
import CommentsForm from "@/components/comments-form"
import HeroSection from "@/components/hero-section"
import { products, categories } from "@/lib/data"
import type { Product } from "@/types"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000])

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.entrepreneur.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesLocation = !selectedLocation || product.location === selectedLocation
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedLocation, priceRange])

  const locations = Array.from(new Set(products.map((p) => p.location)))

  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />

      <main>
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SearchFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            categories={categories}
            locations={locations}
          />

          <ProductGrid products={filteredProducts} />
        </div>

        <TestimonialsSection />
        <CommentsForm />
      </main>

      <Footer />
    </div>
  )
}
