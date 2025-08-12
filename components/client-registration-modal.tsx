"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CreditCard, User, Check, Star, Crown, Diamond } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  cpf: string
  address: string
  city: string
  zipCode: string
  plan: string
  paymentMethod: string
}

export function ClientRegistrationModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    address: "",
    city: "",
    zipCode: "",
    plan: "",
    paymentMethod: "",
  })
  const [clientNumber, setClientNumber] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const plans = [
    {
      id: "hourly",
      name: "Pagamento por Hora",
      description: "Pague apenas pelo tempo que usar",
      price: "Sem mensalidade",
      icon: CreditCard,
    },
    {
      id: "silver",
      name: "Silver",
      description: "20% desconto + benefícios",
      price: "R$ 89,90/mês",
      icon: Star,
    },
    {
      id: "gold",
      name: "Gold",
      description: "35% desconto + VIP",
      price: "R$ 149,90/mês",
      icon: Crown,
      popular: true,
    },
    {
      id: "diamond",
      name: "Diamond",
      description: "50% desconto + premium",
      price: "R$ 229,90/mês",
      icon: Diamond,
    },
  ]

  const paymentMethods = [
    { id: "credit", name: "Cartão de Crédito" },
    { id: "debit", name: "Cartão de Débito" },
    { id: "pix", name: "PIX" },
    { id: "cash", name: "Dinheiro (na loja)" },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateClientNumber = () => {
    const number = Math.floor(100000 + Math.random() * 900000).toString()
    setClientNumber(number)
    return number
  }

  const handleSubmit = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      // Generate client number and complete registration
      generateClientNumber()
      setStep(4)
    }
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      name: "",
      email: "",
      phone: "",
      cpf: "",
      address: "",
      city: "",
      zipCode: "",
      plan: "",
      paymentMethod: "",
    })
    setClientNumber("")
    setAcceptTerms(false)
  }

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.cpf
  const isStep2Valid = formData.address && formData.city && formData.zipCode
  const isStep3Valid = formData.plan && formData.paymentMethod && acceptTerms

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text text-center">
            {step === 4 ? "Cadastro Concluído!" : "Solicitar Cartão de Cliente"}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber
                      ? "bg-gradient-to-r from-primary to-accent text-black"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {step > stepNumber ? <Check className="w-4 h-4" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-1 mx-2 ${step > stepNumber ? "bg-primary" : "bg-gray-700"}`} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Informações Pessoais</h3>
              <p className="text-gray-400">Preencha seus dados básicos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="(41) 99999-9999"
                />
              </div>

              <div>
                <Label htmlFor="cpf" className="text-white">
                  CPF *
                </Label>
                <Input
                  id="cpf"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!isStep1Valid}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
            >
              Continuar
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Address Information */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Endereço</h3>
              <p className="text-gray-400">Onde você mora?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-white">
                  Endereço Completo *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="Rua, número, complemento"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-white">
                  Cidade *
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="Guaratuba"
                />
              </div>

              <div>
                <Label htmlFor="zipCode" className="text-white">
                  CEP *
                </Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="00000-000"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Voltar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isStep2Valid}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
              >
                Continuar
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Plan Selection */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Escolha seu Plano</h3>
              <p className="text-gray-400">Selecione o plano ideal para você</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plans.map((plan) => {
                const Icon = plan.icon
                return (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      formData.plan === plan.id
                        ? "border-primary bg-primary/10 neon-border"
                        : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
                    } ${plan.popular ? "ring-1 ring-primary/50" : ""}`}
                    onClick={() => handleInputChange("plan", plan.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-6 h-6 text-primary" />
                          <CardTitle className="text-white">{plan.name}</CardTitle>
                        </div>
                        {plan.popular && (
                          <span className="bg-primary text-black px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-2">{plan.description}</p>
                      <p className="text-primary font-bold">{plan.price}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div>
              <Label className="text-white mb-3 block">Forma de Pagamento *</Label>
              <Select
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange("paymentMethod", value)}
              >
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Selecione a forma de pagamento" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.id} value={method.id} className="text-white hover:bg-gray-800">
                      {method.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                className="border-gray-700"
              />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                Aceito os termos de uso e política de privacidade da Cyber_Stop
              </Label>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Voltar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isStep3Valid}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
              >
                Finalizar Cadastro
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-black" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Cadastro Realizado com Sucesso!</h3>
              <p className="text-gray-300">Seu cartão de cliente foi gerado</p>
            </div>

            <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Número do Cliente</h4>
                <div className="text-3xl font-bold gradient-text neon-glow">{clientNumber}</div>
                <p className="text-sm text-gray-300 mt-2">Guarde este número para acessar nossos serviços</p>
              </CardContent>
            </Card>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-primary mb-2">Próximos Passos:</h4>
              <ul className="text-sm text-gray-300 space-y-1 text-left">
                <li>• Baixe nosso aplicativo para gerenciar créditos</li>
                <li>• Visite nossa loja para ativar seu cartão</li>
                <li>• Adicione créditos e comece a jogar!</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => {
                  resetForm()
                  setIsOpen(false)
                }}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-black font-bold"
              >
                Fechar
              </Button>
              <Button
                onClick={() => resetForm()}
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                Novo Cadastro
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
