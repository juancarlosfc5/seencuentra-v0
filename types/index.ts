export interface Product {
  id: string
  name: string
  price: number
  image: string
  entrepreneur: string
  category: string
  location: string
}

export interface ProductDetail extends Product {
  description: string
  whatsapp: string
  relatedProducts: Product[]
}

export interface Entrepreneur {
  id: string
  name: string
  businessName: string
  photo: string
  story: string
  whatsapp: string
  location: string
  products: Product[]
}

export interface Testimonial {
  id: string
  name: string
  message: string
  rating: number
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface Category {
  id: string
  name: string
  slug: string
}
