import type { Product, ProductDetail, Entrepreneur, Testimonial, Category } from "@/types"

export const categories: Category[] = [
  { id: "1", name: "Artesanías", slug: "artesanias" },
  { id: "2", name: "Comida Casera", slug: "comida-casera" },
  { id: "3", name: "Textiles", slug: "textiles" },
  { id: "4", name: "Joyería", slug: "joyeria" },
  { id: "5", name: "Servicios", slug: "servicios" },
  { id: "6", name: "Decoración", slug: "decoracion" },
]

export const entrepreneurs: Entrepreneur[] = [
  {
    id: "1",
    name: "María González",
    businessName: "Tejidos María",
    photo: "/artesana-tejiendo.png",
    story:
      "Desde pequeña aprendí el arte del tejido de mi abuela. Cada pieza que creo lleva años de tradición familiar y amor por preservar nuestras raíces.",
    whatsapp: "+573001234567",
    location: "Bogotá, Colombia",
    products: [],
  },
  {
    id: "2",
    name: "Carlos Ramírez",
    businessName: "Sabores de Casa",
    photo: "/smiling-male-chef.png",
    story:
      "Mi pasión por la cocina tradicional me llevó a crear productos caseros que rescatan los sabores de nuestra infancia.",
    whatsapp: "+573007654321",
    location: "Medellín, Colombia",
    products: [],
  },
  {
    id: "3",
    name: "Ana Lucía Torres",
    businessName: "Joyas Ancestrales",
    photo: "/placeholder-090fm.png",
    story: "Cada joya que diseño cuenta una historia. Uso técnicas ancestrales combinadas con diseños contemporáneos.",
    whatsapp: "+573009876543",
    location: "Cartagena, Colombia",
    products: [],
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Ruana Artesanal de Lana",
    price: 85000,
    image: "/colorful-wool-ruana.png",
    entrepreneur: "María González",
    category: "Textiles",
    location: "Bogotá",
  },
  {
    id: "2",
    name: "Mermelada de Mora Casera",
    price: 12000,
    image: "/artesanal-blackberry-jam.png",
    entrepreneur: "Carlos Ramírez",
    category: "Comida Casera",
    location: "Medellín",
  },
  {
    id: "3",
    name: "Collar de Plata con Esmeraldas",
    price: 150000,
    image: "/elegant-silver-emerald-necklace.png",
    entrepreneur: "Ana Lucía Torres",
    category: "Joyería",
    location: "Cartagena",
  },
  {
    id: "4",
    name: "Canasta de Palma Tejida",
    price: 35000,
    image: "/natural-woven-palm-basket.png",
    entrepreneur: "María González",
    category: "Artesanías",
    location: "Bogotá",
  },
  {
    id: "5",
    name: "Salsa de Ají Casera",
    price: 8000,
    image: "/salsa-aji-picante-frasco.png",
    entrepreneur: "Carlos Ramírez",
    category: "Comida Casera",
    location: "Medellín",
  },
  {
    id: "6",
    name: "Aretes de Filigrana",
    price: 45000,
    image: "/delicate-gold-filigree-earrings.png",
    entrepreneur: "Ana Lucía Torres",
    category: "Joyería",
    location: "Cartagena",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Laura Martínez",
    message: "Encontré productos únicos y de calidad. Me encanta poder contactar directamente con los emprendedores.",
    rating: 5,
  },
  {
    id: "2",
    name: "Diego Herrera",
    message: "La plataforma es muy fácil de usar y los productos son auténticos. Recomiendo totalmente.",
    rating: 5,
  },
  {
    id: "3",
    name: "Carmen Rodríguez",
    message: "Excelente iniciativa para apoyar a los emprendedores locales. Productos de gran calidad.",
    rating: 5,
  },
]

export const productDetails: { [key: string]: ProductDetail } = {
  "1": {
    ...products[0],
    description:
      "Ruana tejida a mano con lana 100% natural. Diseño tradicional con toques modernos. Perfecta para el clima frío bogotano. Cada pieza es única y lleva el sello de la tradición familiar.",
    whatsapp: "+573001234567",
    relatedProducts: [products[3], products[1], products[5]],
  },
  "2": {
    ...products[1],
    description:
      "Mermelada artesanal elaborada con moras frescas de la región. Sin conservantes artificiales. Perfecta para desayunos y postres. Receta familiar transmitida por generaciones.",
    whatsapp: "+573007654321",
    relatedProducts: [products[4], products[0], products[2]],
  },
  "3": {
    ...products[2],
    description:
      "Collar único en plata 925 con esmeraldas naturales colombianas. Diseño contemporáneo inspirado en técnicas ancestrales. Cada pieza es certificada y viene con garantía.",
    whatsapp: "+573009876543",
    relatedProducts: [products[5], products[0], products[1]],
  },
  "4": {
    ...products[3],
    description:
      "Canasta tejida a mano con palma natural de la región. Perfecta para decoración o uso funcional. Técnica ancestral transmitida por generaciones de artesanos.",
    whatsapp: "+573001234567",
    relatedProducts: [products[0], products[2], products[4]],
  },
  "5": {
    ...products[4],
    description:
      "Salsa de ají picante elaborada con ingredientes frescos y naturales. Receta tradicional familiar. Perfecta para acompañar cualquier comida. Sin conservantes artificiales.",
    whatsapp: "+573007654321",
    relatedProducts: [products[1], products[3], products[5]],
  },
  "6": {
    ...products[5],
    description:
      "Aretes de filigrana en oro elaborados con técnicas tradicionales. Cada par es único y hecho completamente a mano. Diseño elegante que combina tradición y modernidad.",
    whatsapp: "+573009876543",
    relatedProducts: [products[2], products[0], products[4]],
  },
}
