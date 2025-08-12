"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, LogIn } from "lucide-react"

interface LoginData {
  clientNumber: string
  password: string
}

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

export function ClientLoginModal({
  children,
  onLogin,
}: {
  children: React.ReactNode
  onLogin: (clientData: ClientData) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [loginData, setLoginData] = useState<LoginData>({
    clientNumber: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Simulate client data
  const mockClientData: ClientData = {
    clientNumber: "123456",
    name: "João Silva",
    email: "joao@email.com",
    plan: "Gold",
    balance: 45.5,
    availableHours: 12.5,
    totalPoints: 2850,
    lastAccess: "2025-01-12 14:30",
  }

  const handleLogin = async () => {
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (loginData.clientNumber === "123456" && loginData.password === "demo123") {
        onLogin(mockClientData)
        setIsOpen(false)
        setLoginData({ clientNumber: "", password: "" })
      } else {
        setError("Número do cliente ou senha incorretos")
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md bg-black border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text text-center flex items-center justify-center space-x-2">
            <User className="w-6 h-6" />
            <span>Área do Cliente</span>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900">
            <TabsTrigger
              value="login"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="demo"
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Demo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div>
              <Label htmlFor="clientNumber" className="text-white">
                Número do Cliente
              </Label>
              <Input
                id="clientNumber"
                value={loginData.clientNumber}
                onChange={(e) => handleInputChange("clientNumber", e.target.value)}
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="Digite seu número de cliente"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="Digite sua senha"
              />
            </div>

            {error && <div className="text-red-400 text-sm text-center">{error}</div>}

            <Button
              onClick={handleLogin}
              disabled={isLoading || !loginData.clientNumber || !loginData.password}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Entrando...</span>
                </div>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </>
              )}
            </Button>

            <div className="text-center text-sm text-gray-400">
              <p>Esqueceu sua senha?</p>
              <Button variant="link" className="text-primary p-0 h-auto">
                Clique aqui para recuperar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-4 mt-6">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary mb-2">Dados de Demonstração</h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  <strong>Cliente:</strong> 123456
                </p>
                <p>
                  <strong>Senha:</strong> demo123
                </p>
              </div>
            </div>

            <Button
              onClick={() => {
                setLoginData({ clientNumber: "123456", password: "demo123" })
                handleLogin()
              }}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
            >
              <User className="w-4 h-4 mr-2" />
              Entrar com Demo
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
