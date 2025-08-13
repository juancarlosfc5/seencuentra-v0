import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutUsContent from "@/components/about-us-content"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />
      <main>
        <AboutUsContent />
      </main>
      <Footer />
    </div>
  )
}
