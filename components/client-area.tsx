"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { ClientLoginModal } from "./client-login-modal"
import { ClientDashboard } from "./client-dashboard"

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

export function ClientArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [clientData, setClientData] = useState<ClientData | null>(null)

  const handleLogin = (data: ClientData) => {
    setClientData(data)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setClientData(null)
    setIsLoggedIn(false)
  }

  if (isLoggedIn && clientData) {
    return <ClientDashboard clientData={clientData} onLogout={handleLogout} />
  }

  return (
    <ClientLoginModal onLogin={handleLogin}>
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
      >
        <User className="w-4 h-4 mr-2" />
        Área do Cliente
      </Button>
    </ClientLoginModal>
  )
}
