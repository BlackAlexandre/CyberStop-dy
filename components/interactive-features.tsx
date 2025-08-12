"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Trophy, Star } from "lucide-react"

export function InteractiveFeatures() {
  const [activeUsers, setActiveUsers] = useState(127)
  const [onlineGames, setOnlineGames] = useState(8)
  const [todayTournaments, setTodayTournaments] = useState(3)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10 - 5))
      setOnlineGames((prev) => Math.max(5, prev + Math.floor(Math.random() * 3 - 1)))
      setTodayTournaments((prev) => Math.max(1, prev + Math.floor(Math.random() * 2 - 1)))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: Users,
      label: "Usuários Online",
      value: activeUsers,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Zap,
      label: "Jogos Ativos",
      value: onlineGames,
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      icon: Trophy,
      label: "Torneios Hoje",
      value: todayTournaments,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
  ]

  return (
    <div className="fixed top-20 right-4 z-40 space-y-2">
      {/* Live Stats */}
      <Card className="bg-black/80 backdrop-blur-md border-primary/30 p-3">
        <CardContent className="p-0">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-400">AO VIVO</span>
          </div>
          <div className="space-y-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-6 h-6 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                    <Icon className={`w-3 h-3 ${stat.color}`} />
                  </div>
                  <div className="text-xs">
                    <div className={`font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-black/80 backdrop-blur-md border-primary/30 p-3">
        <CardContent className="p-0 space-y-2">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black text-xs"
            onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Star className="w-3 h-3 mr-1" />
            Ver Planos
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-full border-primary/50 text-primary hover:bg-primary hover:text-black text-xs bg-transparent"
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Trophy className="w-3 h-3 mr-1" />
            Eventos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
