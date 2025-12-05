"use client"

import Link from "next/link"
import { Code2, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Code2 className="size-6" />
          <span>Investia.Tech</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Start
          </Link>
          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Usługi
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Artykuły
          </Link>
          <Link href="/webinars" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Webinary
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            O nas
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu overlay */}
          <div className="fixed top-16 left-0 right-0 bg-background/90 backdrop-blur-sm border-b border-border shadow-lg z-50 md:hidden max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start
              </Link>
              <Link
                href="/services"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Usługi
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Artykuły
              </Link>
              <Link
                href="/webinars"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Webinary
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nas
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
