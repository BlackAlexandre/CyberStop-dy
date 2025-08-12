"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function EnvironmentSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/modern-gaming-setup-rgb.png",
      title: "Estações Gaming Premium",
      description: "PCs de última geração com placas RTX 4080",
    },
    {
      src: "/console-gaming-area.png",
      title: "Área de Consoles",
      description: "PlayStation 5 e Xbox Series S/X",
    },
    {
      src: "/private-gaming-room-neon.png",
      title: "Salas Privadas",
      description: "Ambientes exclusivos para grupos",
    },
    {
      src: "/professional-streaming-setup.png",
      title: "Estúdio de Streaming",
      description: "Equipamentos profissionais para criadores",
    },
    {
      src: "/neon-snack-area.png",
      title: "Área de Convivência",
      description: "Espaço para relaxar e socializar",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="environment" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">
            Ambiente e Estrutura
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossos espaços projetados para oferecer a melhor experiência gamer da região.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 overflow-hidden">
              <img
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{images[currentImage].title}</h3>
                <p className="text-gray-300">{images[currentImage].description}</p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-primary" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Equipamentos Premium</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PCs com RTX 4080 e Ryzen 9</li>
                <li>• Monitores 144Hz 1ms</li>
                <li>• Periféricos gamer profissionais</li>
                <li>• Cadeiras ergonômicas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Consoles Next-Gen</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PlayStation 5 com SSD</li>
                <li>• Xbox Series S/X</li>
                <li>• Controles sem fio premium</li>
                <li>• TVs 4K HDR 120Hz</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Infraestrutura</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Internet 1Gb fibra óptica</li>
                <li>• Ar condicionado central</li>
                <li>• Sistema de som surround</li>
                <li>• Iluminação RGB personalizada</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">Veja Nosso Sistema em Ação</h3>
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 flex items-center justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-black">
                <Play className="w-6 h-6 mr-2" />
                Assistir Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
