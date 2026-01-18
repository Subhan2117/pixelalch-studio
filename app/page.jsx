"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { WhoIsThisFor } from "@/components/who-is-this-for"
import { BeforeAfter } from "@/components/before-after"
import { WhatYouGet } from "@/components/what-you-get"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CursorEffects } from "@/components/cursor-effects"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <CursorEffects />
      <div
        className={`splash-overlay ${showSplash ? "is-visible" : "is-hidden"}`}
        aria-hidden="true"
      >
        <div className="text-center">
          <span className="splash-logo">PixelAlch Studio</span>
          <p className="splash-subtitle">
            Websites crafted to feel premium, fast, and unforgettable.
          </p>
        </div>
      </div>
      <div className={`page-reveal ${showSplash ? "is-loading" : "is-ready"}`}>
        <Header />
        <HeroSection />
        <WhoIsThisFor />
        <BeforeAfter />
        <WhatYouGet />
        <ProcessSection />
        <PricingSection />
        <ContactForm showPackageField={false} />
        <Footer />
      </div>
    </main>
  )
}
