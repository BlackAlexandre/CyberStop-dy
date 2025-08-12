"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
  Search,
  Filter,
  Download,
  Settings,
  Monitor,
  Clock,
} from "lucide-react"

interface ClientInfo {
  id: string
  name: string
  clientNumber: string
  plan: string
  balance: number
  status: "active" | "inactive" | "suspended"
  lastAccess: string
  totalSpent: number
}

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const clients: ClientInfo[] = [
    {
      id: "1",
      name: "João Silva",
      clientNumber: "123456",
      plan: "Gold",
      balance: 45.5,
      status: "active",
      lastAccess: "2025-01-12 14:30",
      totalSpent: 450.75,
    },
    {
      id: "2",
      name: "Maria Santos",
      clientNumber: "123457",
      plan: "Silver",
      balance: 12.25,
      status: "active",
      lastAccess: "2025-01-12 13:15",
      totalSpent: 280.5,
    },
    {
      id: "3",
      name: "Pedro Costa",
      clientNumber: "123458",
      plan: "Diamond",
      balance: 89.75,
      status: "inactive",
      lastAccess: "2025-01-10 16:45",
      totalSpent: 1250.0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400"
      case "inactive":
        return "bg-yellow-500/20 text-yellow-400"
      case "suspended":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Painel Administrativo</h1>
            <p className="text-gray-400">Cyber_Stop - Gestão Completa</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Exportar Dados
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1,247</div>
              <div className="text-sm text-blue-400">Clientes Ativos</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">R$ 15.847</div>
              <div className="text-sm text-green-400">Receita Mensal</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">89</div>
              <div className="text-sm text-yellow-400">Usuários Online</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">+23%</div>
              <div className="text-sm text-primary">Crescimento</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger
              value="clients"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Clientes
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Uso dos Equipamentos
            </TabsTrigger>
            <TabsTrigger
              value="financial"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Financeiro
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Relatórios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Gestão de Clientes</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Buscar cliente..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-gray-900 border-gray-700 text-white"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <span className="text-black font-bold">{client.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{client.name}</div>
                          <div className="text-sm text-gray-400">Cliente #{client.clientNumber}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getPlanColor(client.plan)}>{client.plan}</Badge>
                        <Badge className={getStatusColor(client.status)}>
                          {client.status === "active" ? "Ativo" : client.status === "inactive" ? "Inativo" : "Suspenso"}
                        </Badge>
                        <div className="text-right">
                          <div className="text-white font-semibold">R$ {client.balance.toFixed(2)}</div>
                          <div className="text-sm text-gray-400">Saldo</div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                        >
                          Gerenciar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Monitor className="w-5 h-5" />
                    <span>Equipamentos em Uso</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
                    <span className="text-white">PC Gaming #01</span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">2h 15min restantes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
                    <span className="text-white">PlayStation 5 #02</span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">45min restantes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-400">Xbox Series S #03</span>
                    <span className="text-gray-400">Disponível</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Estatísticas de Uso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">PCs Gaming</span>
                      <span className="text-white">85% ocupação</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">PlayStation 5</span>
                      <span className="text-white">60% ocupação</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Xbox Series</span>
                      <span className="text-white">40% ocupação</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Receita Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">R$ 1.247,50</div>
                  <div className="text-sm text-gray-400">+15% vs ontem</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Receita Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">R$ 15.847,25</div>
                  <div className="text-sm text-gray-400">+23% vs mês anterior</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Ticket Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-400">R$ 18,75</div>
                  <div className="text-sm text-gray-400">Por sessão</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Relatórios Disponíveis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 border-primary/50 text-primary hover:bg-primary hover:text-black bg-transparent flex flex-col"
                  >
                    <Users className="w-6 h-6 mb-2" />
                    Relatório de Clientes
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 border-primary/50 text-primary hover:bg-primary hover:text-black bg-transparent flex flex-col"
                  >
                    <DollarSign className="w-6 h-6 mb-2" />
                    Relatório Financeiro
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 border-primary/50 text-primary hover:bg-primary hover:text-black bg-transparent flex flex-col"
                  >
                    <Activity className="w-6 h-6 mb-2" />
                    Relatório de Uso
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 border-primary/50 text-primary hover:bg-primary hover:text-black bg-transparent flex flex-col"
                  >
                    <TrendingUp className="w-6 h-6 mb-2" />
                    Análise de Performance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
