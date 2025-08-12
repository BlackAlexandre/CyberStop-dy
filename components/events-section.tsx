"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Trophy, Users, Clock, Star, Gamepad2 } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  type: "tournament" | "event" | "workshop"
  game?: string
  maxParticipants: number
  currentParticipants: number
  prize?: string
  difficulty: "beginner" | "intermediate" | "advanced"
  status: "open" | "full" | "ended"
}

export function EventsSection() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    eventId: "",
  })

  const events: Event[] = [
    {
      id: "1",
      title: "Campeonato de CS2",
      description: "Torneio eliminatório de Counter-Strike 2 com premiação em dinheiro",
      date: "2025-01-15",
      time: "19:00",
      type: "tournament",
      game: "Counter-Strike 2",
      maxParticipants: 32,
      currentParticipants: 18,
      prize: "R$ 1.500",
      difficulty: "intermediate",
      status: "open",
    },
    {
      id: "2",
      title: "Liga de League of Legends",
      description: "Campeonato semanal de LoL com sistema de pontos",
      date: "2025-01-18",
      time: "20:00",
      type: "tournament",
      game: "League of Legends",
      maxParticipants: 50,
      currentParticipants: 35,
      prize: "R$ 2.000",
      difficulty: "advanced",
      status: "open",
    },
    {
      id: "3",
      title: "Noite do Retro Gaming",
      description: "Evento especial com jogos clássicos e nostalgia",
      date: "2025-01-20",
      time: "18:00",
      type: "event",
      maxParticipants: 100,
      currentParticipants: 45,
      difficulty: "beginner",
      status: "open",
    },
    {
      id: "4",
      title: "Workshop de Streaming",
      description: "Aprenda técnicas profissionais de streaming e criação de conteúdo",
      date: "2025-01-22",
      time: "16:00",
      type: "workshop",
      maxParticipants: 20,
      currentParticipants: 12,
      difficulty: "beginner",
      status: "open",
    },
    {
      id: "5",
      title: "Torneio de FIFA 24",
      description: "Campeonato de futebol virtual com transmissão ao vivo",
      date: "2025-01-25",
      time: "19:30",
      type: "tournament",
      game: "FIFA 24",
      maxParticipants: 64,
      currentParticipants: 64,
      prize: "R$ 800",
      difficulty: "intermediate",
      status: "full",
    },
    {
      id: "6",
      title: "Maratona de Minecraft",
      description: "Construção colaborativa de 12 horas com prêmios",
      date: "2025-01-28",
      time: "10:00",
      type: "event",
      game: "Minecraft",
      maxParticipants: 30,
      currentParticipants: 22,
      prize: "Kit Gamer",
      difficulty: "beginner",
      status: "open",
    },
  ]

  const getEventTypeIcon = (type: Event["type"]) => {
    switch (type) {
      case "tournament":
        return Trophy
      case "event":
        return Star
      case "workshop":
        return Users
      default:
        return Calendar
    }
  }

  const getEventTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "tournament":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "event":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "workshop":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-primary/20 text-primary border-primary/30"
    }
  }

  const getDifficultyColor = (difficulty: Event["difficulty"]) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/20 text-green-400"
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-400"
      case "advanced":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const handleRegistration = (eventId: string) => {
    setRegistrationData({ ...registrationData, eventId })
  }

  const submitRegistration = () => {
    // Simulate registration
    alert("Inscrição realizada com sucesso! Você receberá um e-mail de confirmação.")
    setRegistrationData({ name: "", email: "", phone: "", experience: "", eventId: "" })
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">
            Eventos e Campeonatos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participe dos nossos torneios, eventos especiais e workshops. Diversão garantida e prêmios incríveis!
          </p>
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Calendar className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-primary">Janeiro 2025</h3>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {events.map((event) => {
            const Icon = getEventTypeIcon(event.type)
            return (
              <Card
                key={event.id}
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      <Icon className="w-3 h-3 mr-1" />
                      {event.type === "tournament" ? "Torneio" : event.type === "event" ? "Evento" : "Workshop"}
                    </Badge>
                    <Badge className={getDifficultyColor(event.difficulty)}>
                      {event.difficulty === "beginner"
                        ? "Iniciante"
                        : event.difficulty === "intermediate"
                          ? "Intermediário"
                          : "Avançado"}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-primary transition-colors">{event.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{event.description}</p>

                  {event.game && (
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-semibold">{event.game}</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">
                        {event.currentParticipants}/{event.maxParticipants}
                      </span>
                    </div>
                    {event.prize && <div className="text-sm font-semibold text-primary">Prêmio: {event.prize}</div>}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(event.currentParticipants / event.maxParticipants) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Registration Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`w-full ${
                          event.status === "full"
                            ? "bg-gray-600 cursor-not-allowed"
                            : event.status === "ended"
                              ? "bg-red-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black"
                        }`}
                        disabled={event.status !== "open"}
                        onClick={() => handleRegistration(event.id)}
                      >
                        {event.status === "full" ? "Lotado" : event.status === "ended" ? "Encerrado" : "Inscrever-se"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-primary/30 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-primary">Inscrição no Evento</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reg-name" className="text-white">
                            Nome Completo
                          </Label>
                          <Input
                            id="reg-name"
                            value={registrationData.name}
                            onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                            className="bg-gray-900 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="reg-email" className="text-white">
                            E-mail
                          </Label>
                          <Input
                            id="reg-email"
                            type="email"
                            value={registrationData.email}
                            onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                            className="bg-gray-900 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="reg-phone" className="text-white">
                            Telefone
                          </Label>
                          <Input
                            id="reg-phone"
                            value={registrationData.phone}
                            onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                            className="bg-gray-900 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="reg-experience" className="text-white">
                            Experiência no Jogo (opcional)
                          </Label>
                          <Textarea
                            id="reg-experience"
                            value={registrationData.experience}
                            onChange={(e) => setRegistrationData({ ...registrationData, experience: e.target.value })}
                            className="bg-gray-900 border-gray-700 text-white"
                            rows={3}
                          />
                        </div>
                        <Button
                          onClick={submitRegistration}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black"
                        >
                          Confirmar Inscrição
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-center">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-300">Torneios por Mês</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Participantes Ativos</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">R$ 50k+</div>
              <div className="text-sm text-gray-300">Em Prêmios Distribuídos</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-center">
            <CardContent className="p-6">
              <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-300">Jogos Diferentes</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
