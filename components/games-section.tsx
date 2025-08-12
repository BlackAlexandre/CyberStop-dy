"use client"

import { Card, CardContent } from "@/components/ui/card"

export function GamesSection() {
  const pcGames = [
    { name: "League of Legends", image: "/generic-moba-game-icon.png" },
    { name: "Counter-Strike 2", image: "/counter-strike-2-icon.png" },
    { name: "Valorant", image: "/valorant-game-icon.png" },
    { name: "Fortnite", image: "/fortnite-game-icon.png" },
    { name: "Apex Legends", image: "/placeholder-vmmch.png" },
    { name: "GTA V", image: "/generic-city-icon.png" },
    { name: "Minecraft", image: "/placeholder.svg?height=100&width=100" },
    { name: "Cyberpunk 2077", image: "/placeholder.svg?height=100&width=100" },
    { name: "Call of Duty", image: "/placeholder.svg?height=100&width=100" },
    { name: "FIFA 24", image: "/placeholder.svg?height=100&width=100" },
    { name: "Rocket League", image: "/placeholder.svg?height=100&width=100" },
    { name: "Overwatch 2", image: "/placeholder.svg?height=100&width=100" },
  ]

  const consoleGames = [
    { name: "Spider-Man 2", platform: "PS5", image: "/placeholder.svg?height=100&width=100" },
    { name: "God of War", platform: "PS5", image: "/placeholder.svg?height=100&width=100" },
    { name: "Halo Infinite", platform: "Xbox", image: "/placeholder.svg?height=100&width=100" },
    { name: "Forza Horizon 5", platform: "Xbox", image: "/placeholder.svg?height=100&width=100" },
    { name: "The Last of Us", platform: "PS5", image: "/placeholder.svg?height=100&width=100" },
    { name: "Gears 5", platform: "Xbox", image: "/placeholder.svg?height=100&width=100" },
    { name: "Horizon Forbidden West", platform: "PS5", image: "/placeholder.svg?height=100&width=100" },
    { name: "Microsoft Flight Simulator", platform: "Xbox", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text neon-glow mb-6">
            Jogos Disponíveis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma biblioteca completa com os melhores jogos para PC e consoles, sempre atualizados.
          </p>
        </div>

        {/* PC Games */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Jogos para PC</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {pcGames.map((game, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-4 text-center">
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {game.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Console Games */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Jogos para Console</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {consoleGames.map((game, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-4 text-center">
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors mb-1">
                    {game.name}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      game.platform === "PS5" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {game.platform}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-lg border border-primary/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Biblioteca Sempre Atualizada</h3>
            <p className="text-lg text-gray-300 mb-4">
              Nossa biblioteca de jogos é constantemente atualizada com os lançamentos mais recentes e os clássicos que
              nunca saem de moda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-primary">PC Gaming:</strong>
                <br />
                Mais de 500 jogos instalados
              </div>
              <div>
                <strong className="text-primary">PlayStation 5:</strong>
                <br />
                Exclusivos e multiplataforma
              </div>
              <div>
                <strong className="text-primary">Xbox Series:</strong>
                <br />
                Game Pass Ultimate incluído
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
