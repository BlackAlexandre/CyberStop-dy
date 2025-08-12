"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2, Users, CreditCard, MapPin, Calendar, Phone } from "lucide-react"
import { ClientArea } from "./client-area"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Início", href: "#home", icon: Gamepad2 },
    { name: "Sobre Nós", href: "#about", icon: Users },
    { name: "Planos", href: "#plans", icon: CreditCard },
    { name: "Ambiente", href: "#environment", icon: MapPin },
    { name: "Eventos", href: "#events", icon: Calendar },
    { name: "Contato", href: "#contact", icon: Phone },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-primary/30"
          : "bg-black/80 backdrop-blur-md border-b border-primary/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-black" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">Cyber_Stop</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium hover:neon-glow"
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* Added client area button to navigation */}
            <ClientArea />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center space-x-2 w-full text-left"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              )
            })}
            {/* Added client area to mobile menu */}
            <div className="px-3 py-2">
              <ClientArea />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
