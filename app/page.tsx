"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/landing-page/hero-section"
import EventSection from "@/components/landing-page/event-section"
import InfiniteSlider from "@/components/landing-page/infinite-slider"
import Newsletter from "@/components/landing-page/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Define the phrases to be used in the InfiniteSlider
  const phrases = ["Phrase 1", "Phrase 2", "Phrase 3"] // Add your phrases here

  // Add smooth scrolling and set loaded state
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    // Set loaded state after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      document.documentElement.style.scrollBehavior = ""
      clearTimeout(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white pt-16">
      <Navbar isLoaded={isLoaded} /> {/* Pass isLoaded to enable animations */}
      <HeroSection isLoaded={isLoaded} />
      <EventSection isLoaded={isLoaded} />
      <InfiniteSlider isLoaded={isLoaded} phrases={phrases} />
      <Newsletter isLoaded={isLoaded} />
      <Footer isLoaded={isLoaded} />
    </main>
  )
}

