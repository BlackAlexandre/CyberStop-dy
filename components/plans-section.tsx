"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Diamond } from "lucide-react"

export function PlansSection() {
  const hourlyRates = [
    { service: "Computador", price: "R$ 8,50", unit: "/hora" },
    { service: "Xbox Series S", price: "R$ 9,00", unit: "/hora" },
    { service: "PlayStation 5", price: "R$ 9,50", unit: "/hora" },
    { service: "Impressão P&B", price: "R$ 0,50", unit: "/página" },
    { service: "Impressão Colorida", price: "R$ 1,00", unit: "/página" },
    { service: "Digitação", price: "R$ 2,00", unit: "/página" },
    { service: "Xerox", price: "R$ 0,30", unit: "/página" },
    { service: "Scanner", price: "R$ 1,50", unit: "/documento" },
  ]

  const monthlyPlans = [
    {
      name: "Silver",
      icon: Star,
      price: "R$ 89,90",
      period: "/mês",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "20% desconto em todas as horas",
        "Acesso prioritário aos equipamentos",
        "1 hora grátis por semana",
        "Suporte técnico preferencial",
      ],
    },
    {
      name: "Gold",
      icon: Crown,
      price: "R$ 149,90",
      period: "/mês",
      color: "from-yellow-400 to-yellow-600",
      popular: true,
      benefits: [
        "35% desconto em todas as horas",
        "Acesso VIP aos equipamentos",
        "3 horas grátis por semana",
        "Reserva antecipada de salas",
        "Participação em torneios exclusivos",
        "Brindes mensais",
      ],
    },
    {
      name: "Diamond",
      icon: Diamond,
      price: "R$ 229,90",
      period: "/mês",
      color: "from-blue-400 to-purple-600",
      benefits: [
        "50% desconto em todas as horas",
        "Acesso ilimitado premium",
        "6 horas grátis por semana",
        "Sala privada garantida",
        "Coaching gamer gratuito",
        "Kit gamer exclusivo",
        "Eventos VIP",
      ],
    },
  ]

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">Planos e Preços</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para sua experiência gamer. Preços justos e benefícios exclusivos.
          </p>
        </div>

        {/* Hourly Rates */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Preços por Hora</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hourlyRates.map((rate, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">{rate.service}</h4>
                  <div className="text-2xl font-bold text-primary">{rate.price}</div>
                  <div className="text-sm text-gray-400">{rate.unit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Planos Mensais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <Card
                  key={index}
                  className={`relative bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                    plan.popular ? "ring-2 ring-primary neon-border scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-accent text-black px-4 py-1 rounded-full text-sm font-bold">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full mt-6 ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black"
                          : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-black"
                      }`}
                    >
                      Escolher {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
