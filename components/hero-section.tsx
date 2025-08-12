"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Trophy } from "lucide-react"
import { ClientRegistrationModal } from "./client-registration-modal"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center cyber-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Principal */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6 neon-border">
            <span className="text-4xl font-display font-bold text-black">CS</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold gradient-text neon-glow mb-4">Cyber_Stop</h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">Lan House 100% Automatizada</p>
        </div>

        {/* Descrição */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            A maior e mais inovadora lan house da cidade. Tecnologia de ponta, automação completa e a melhor experiência
            gamer que você já viu.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-primary/20">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">100% Automatizada</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-primary/20">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Segurança Total</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-primary/20">
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Equipamentos Premium</span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ClientRegistrationModal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold px-8 py-4 text-lg neon-border group"
            >
              Solicitar Cartão de Cliente
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ClientRegistrationModal>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4 text-lg bg-transparent"
            onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Planos e Preços
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-accent hover:text-accent/80 hover:bg-accent/10 px-8 py-4 text-lg"
            onClick={() => document.getElementById("environment")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conhecer o Ambiente
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
