"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setErrorMessage("")

    const form = new FormData(event.currentTarget)
    const name = form.get("name")
    const business = form.get("business")
    const city = form.get("city")
    const contact = form.get("contact")
    const message = form.get("message")

    const payload = {
      name: String(name || ""),
      email: String(contact || ""),
      message: `Business: ${business || "N/A"}\nCity: ${city || "N/A"}\nContact: ${contact || "N/A"}\n\n${message || ""}`,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setIsSubmitted(true)
      event.currentTarget.reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Get Your Free Quote
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            Tell us about your business and we'll get back within 24 hours
          </p>
        </div>

        <div className="bg-card p-5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-border shadow-xl shadow-primary/5">
          {isSubmitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Thank you!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="business" className="text-sm">
                    Business Name
                  </Label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Smith's Restaurant"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="city" className="text-sm">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Los Angeles"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="contact" className="text-sm">
                    Phone or Email
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="(555) 123-4567"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="message" className="text-sm">
                  Tell us about your project
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are your goals?"
                  rows={3}
                  className="resize-none"
                />
              </div>

              {errorMessage ? (
                <p className="text-sm text-red-500">{errorMessage}</p>
              ) : null}

              <Button
                type="submit"
                size="lg"
                className="w-full text-sm sm:text-base py-5 sm:py-6"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Get My Free Quote"}
                <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
