import React from "react"
import SEO from "@/components/seo"
import { Navigation } from "@/components/navigation"
import { Banner } from "@/components/banner"
import { AboutUs } from "@/components/about-us"
import { Collection } from "@/components/collection"
import { Footer } from "@/components/footer"

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Navigation />
      <Banner />
      <AboutUs />
      <Collection />
      <Footer />
    </>
  )
}

export default Home
