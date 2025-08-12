"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Wallet, Clock, Star, History, CreditCard, LogOut, Plus, Trophy, Calendar, Monitor } from "lucide-react"

interface ClientData {
  clientNumber: string
  name: string
  email: string
  plan: string
  balance: number
  availableHours: number
  totalPoints: number
  lastAccess: string
}

interface UsageHistory {
  id: string
  date: string
  service: string
  duration: string
  cost: number
  points: number
}

interface Transaction {
  id: string
  date: string
  type: "credit" | "debit"
  description: string
  amount: number
  balance: number
}

export function ClientDashboard({
  clientData,
  onLogout,
}: {
  clientData: ClientData
  onLogout: () => void
}) {
  const [creditAmount, setCreditAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const usageHistory: UsageHistory[] = [
    {
      id: "1",
      date: "2025-01-12",
      service: "PC Gaming",
      duration: "2h 30min",
      cost: 21.25,
      points: 85,
    },
    {
      id: "2",
      date: "2025-01-11",
      service: "PlayStation 5",
      duration: "1h 45min",
      cost: 16.63,
      points: 66,
    },
    {
      id: "3",
      date: "2025-01-10",
      service: "Xbox Series S",
      duration: "3h 15min",
      cost: 29.25,
      points: 117,
    },
    {
      id: "4",
      date: "2025-01-09",
      service: "PC Gaming",
      duration: "1h 20min",
      cost: 11.33,
      points: 45,
    },
    {
      id: "5",
      date: "2025-01-08",
      service: "Impressão Colorida",
      duration: "5 páginas",
      cost: 5.0,
      points: 20,
    },
  ]

  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2025-01-12",
      type: "debit",
      description: "PC Gaming - 2h 30min",
      amount: -21.25,
      balance: 45.5,
    },
    {
      id: "2",
      date: "2025-01-12",
      type: "credit",
      description: "Recarga PIX",
      amount: 50.0,
      balance: 66.75,
    },
    {
      id: "3",
      date: "2025-01-11",
      type: "debit",
      description: "PlayStation 5 - 1h 45min",
      amount: -16.63,
      balance: 16.75,
    },
    {
      id: "4",
      date: "2025-01-10",
      type: "credit",
      description: "Recarga Cartão",
      amount: 100.0,
      balance: 33.38,
    },
  ]

  const handleAddCredit = () => {
    // Simulate adding credit
    alert(`Crédito de R$ ${creditAmount} adicionado com sucesso via ${paymentMethod}!`)
    setCreditAmount("")
    setPaymentMethod("")
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Silver":
        return "bg-gray-500/20 text-gray-400"
      case "Gold":
        return "bg-yellow-500/20 text-yellow-400"
      case "Diamond":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-primary/20 text-primary"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Olá, {clientData.name}!</h1>
              <p className="text-gray-400">Cliente #{clientData.clientNumber}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className={getPlanColor(clientData.plan)}>Plano {clientData.plan}</Badge>
            <Button
              onClick={onLogout}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <Wallet className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">R$ {clientData.balance.toFixed(2)}</div>
              <div className="text-sm text-green-400">Saldo Disponível</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{clientData.availableHours}h</div>
              <div className="text-sm text-blue-400">Horas Disponíveis</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{clientData.totalPoints.toLocaleString()}</div>
              <div className="text-sm text-yellow-400">Pontos Acumulados</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-bold text-white">{clientData.lastAccess}</div>
              <div className="text-sm text-primary">Último Acesso</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger
              value="overview"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Histórico
            </TabsTrigger>
            <TabsTrigger
              value="credits"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Créditos
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Recompensas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <History className="w-5 h-5" />
                    <span>Atividade Recente</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {usageHistory.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-white font-semibold">{item.service}</div>
                          <div className="text-sm text-gray-400">
                            {item.date} - {item.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">R$ {item.cost.toFixed(2)}</div>
                        <div className="text-sm text-yellow-400">+{item.points} pts</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black">
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar Créditos
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-primary/30">
                      <DialogHeader>
                        <DialogTitle className="text-primary">Adicionar Créditos</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="amount" className="text-white">
                            Valor (R$)
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            value={creditAmount}
                            onChange={(e) => setCreditAmount(e.target.value)}
                            className="bg-gray-900 border-gray-700 text-white"
                            placeholder="0,00"
                          />
                        </div>
                        <div>
                          <Label className="text-white">Forma de Pagamento</Label>
                          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                            <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700">
                              <SelectItem value="pix" className="text-white">
                                PIX
                              </SelectItem>
                              <SelectItem value="credit" className="text-white">
                                Cartão de Crédito
                              </SelectItem>
                              <SelectItem value="debit" className="text-white">
                                Cartão de Débito
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          onClick={handleAddCredit}
                          disabled={!creditAmount || !paymentMethod}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black"
                        >
                          Confirmar Pagamento
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Ver Torneios Disponíveis
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Histórico de Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Monitor className="w-6 h-6 text-primary" />
                        <div>
                          <div className="text-white font-semibold">{item.service}</div>
                          <div className="text-sm text-gray-400">
                            {new Date(item.date).toLocaleDateString("pt-BR")} - {item.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">R$ {item.cost.toFixed(2)}</div>
                        <div className="text-sm text-yellow-400">+{item.points} pontos</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credits" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Histórico Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === "credit" ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <Plus className="w-5 h-5 text-green-400" />
                          ) : (
                            <CreditCard className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{transaction.description}</div>
                          <div className="text-sm text-gray-400">
                            {new Date(transaction.date).toLocaleDateString("pt-BR")}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-semibold ${
                            transaction.type === "credit" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : ""}R$ {Math.abs(transaction.amount).toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-400">Saldo: R$ {transaction.balance.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Sistema de Recompensas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{clientData.totalPoints}</div>
                  <div className="text-gray-400">Pontos Disponíveis</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                    <h4 className="font-semibold text-white mb-2">Camiseta Cyber_Stop</h4>
                    <p className="text-sm text-gray-300 mb-3">Camiseta oficial da lan house</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold">1.500 pontos</span>
                      <Button
                        size="sm"
                        disabled={clientData.totalPoints < 1500}
                        className="bg-primary hover:bg-primary/80 text-black"
                      >
                        Resgatar
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                    <h4 className="font-semibold text-white mb-2">2 Horas Grátis</h4>
                    <p className="text-sm text-gray-300 mb-3">Tempo de jogo gratuito</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold">1.000 pontos</span>
                      <Button
                        size="sm"
                        disabled={clientData.totalPoints < 1000}
                        className="bg-primary hover:bg-primary/80 text-black"
                      >
                        Resgatar
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                    <h4 className="font-semibold text-white mb-2">Mouse Gamer</h4>
                    <p className="text-sm text-gray-300 mb-3">Mouse gamer profissional</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold">5.000 pontos</span>
                      <Button
                        size="sm"
                        disabled={clientData.totalPoints < 5000}
                        className="bg-primary hover:bg-primary/80 text-black"
                      >
                        Resgatar
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                    <h4 className="font-semibold text-white mb-2">Desconto 50%</h4>
                    <p className="text-sm text-gray-300 mb-3">50% off na próxima sessão</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold">800 pontos</span>
                      <Button
                        size="sm"
                        disabled={clientData.totalPoints < 800}
                        className="bg-primary hover:bg-primary/80 text-black"
                      >
                        Resgatar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
