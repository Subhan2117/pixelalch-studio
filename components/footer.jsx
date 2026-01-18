import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <span className="font-serif text-xl tracking-tight text-background">
              PixelAlch Studio
            </span>
            <p className="mt-4 text-background/60 text-sm leading-relaxed">
              We help local businesses get more customers with modern,
              mobile-friendly websites that actually convert.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/80 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@pixelalch.com"
                  className="hover:text-background transition-colors"
                >
                  hello@pixelalch.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Phone className="w-4 h-4" />
                9342342372
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4" />
                Serving local businesses nationwide
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/80 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-background/60 text-sm hover:text-background transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-background/60 text-sm hover:text-background transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-background/60 text-sm hover:text-background transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/60 text-sm hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} PixelAlch Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
