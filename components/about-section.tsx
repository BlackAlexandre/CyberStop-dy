"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Lock, Smartphone, Gift, Users, Monitor } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Zap,
      title: "Entrada Automática",
      description: "Sistema de acesso por cartão sem necessidade de atendimento humano",
    },
    {
      icon: Lock,
      title: "Bloqueio Inteligente",
      description: "Computadores bloqueiam automaticamente quando o tempo acaba",
    },
    {
      icon: Smartphone,
      title: "App de Controle",
      description: "Gerencie créditos, horários e reservas pelo aplicativo",
    },
    {
      icon: Gift,
      title: "Sistema de Pontos",
      description: "Acumule pontos a cada uso e troque por brindes exclusivos",
    },
    {
      icon: Users,
      title: "Salas Privadas",
      description: "Ambientes reservados para grupos e streaming profissional",
    },
    {
      icon: Monitor,
      title: "Equipamentos Premium",
      description: "PCs gamers, consoles next-gen e periféricos de alta qualidade",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">Sobre Nós</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A Cyber_Stop será a maior e mais inovadora lan house 100% automatizada da cidade. Revolucionamos a
            experiência gamer com tecnologia de ponta e automação completa.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-4">Inovação e Tecnologia</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa lan house representa o futuro do entretenimento digital. Com um sistema completamente automatizado,
              oferecemos uma experiência única onde a tecnologia trabalha para você.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Desde o momento que você entra até quando sai, tudo é controlado digitalmente. Sem filas, sem espera, sem
              complicações. Apenas você, seus jogos favoritos e a melhor infraestrutura da região.
            </p>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border border-primary/30">
              <h4 className="text-xl font-semibold text-primary mb-2">Nossa Missão</h4>
              <p className="text-gray-300">
                Proporcionar a melhor experiência gamer da cidade através da inovação, automação e tecnologia de ponta,
                criando um ambiente onde cada jogador se sinta em casa.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 flex items-center justify-center">
              <img
                src="/futuristic-gaming-setup.png"
                alt="Ambiente futurista da Cyber_Stop"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-60"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
