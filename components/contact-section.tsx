"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { ClientRegistrationModal } from "./client-registration-modal"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">Contato</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco e venha conhecer a revolução do gaming em Guaratuba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Telefone / WhatsApp</h3>
                    <p className="text-gray-300">(41) 99567-9807</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Endereço</h3>
                    <p className="text-gray-300">Rua Ponta Grossa, 263</p>
                    <p className="text-gray-300">Centro - Guaratuba/PR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Horário de Funcionamento</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Segunda a Sexta: 14h às 23h</p>
                      <p>Sábado: 10h às 24h</p>
                      <p>Domingo: 14h às 22h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Localização</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-gray-300">Mapa do Google Maps</p>
                    <p className="text-sm text-gray-400">Rua Ponta Grossa, 263 - Centro</p>
                    <p className="text-sm text-gray-400">Guaratuba/PR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border border-primary/30">
              <h3 className="text-xl font-semibold text-primary mb-4">Informações Importantes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Estacionamento gratuito disponível</li>
                <li>• Acesso para pessoas com deficiência</li>
                <li>• Área de alimentação no local</li>
                <li>• Wi-Fi gratuito para clientes</li>
                <li>• Sistema de segurança 24h</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">Pronto para a Experiência?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Venha conhecer a lan house mais inovadora da região. Agende sua visita ou solicite seu cartão de cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClientRegistrationModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
                >
                  Solicitar Cartão de Cliente
                </Button>
              </ClientRegistrationModal>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
