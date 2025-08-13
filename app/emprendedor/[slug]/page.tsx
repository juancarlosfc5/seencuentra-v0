import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EntrepreneurProfile from "@/components/entrepreneur-profile"
import { entrepreneurs } from "@/lib/data"

interface EntrepreneurPageProps {
  params: {
    slug: string
  }
}

export default function EntrepreneurPage({ params }: EntrepreneurPageProps) {
  // Convert slug back to entrepreneur (simple mapping for demo)
  const entrepreneur = entrepreneurs.find((e) => e.id === params.slug)

  if (!entrepreneur) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-blanco-marfil">
      <Header />
      <main>
        <EntrepreneurProfile entrepreneur={entrepreneur} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return entrepreneurs.map((entrepreneur) => ({
    slug: entrepreneur.id,
  }))
}
