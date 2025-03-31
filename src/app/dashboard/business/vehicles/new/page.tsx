import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Header } from "@/components/header"
import { ChevronLeft, Plus } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function NewVehicle() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="flex items-center gap-2 mb-6">
            <Button asChild variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
              <Link href="/dashboard/business/vehicles">
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Registrar entrada</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-lg font-medium mb-4">Informações do veículo</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="plate">Placa</Label>
                    <Input id="plate" placeholder="ABC-1234" className="bg-[#27272a] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Modelo</Label>
                    <Input id="model" placeholder="Honda Civic" className="bg-[#27272a] border-0" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="color">Cor</Label>
                    <Input id="color" placeholder="Preto" className="bg-[#27272a] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo</Label>
                    <Select>
                      <SelectTrigger id="type" className="bg-[#27272a] border-0">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Carro</SelectItem>
                        <SelectItem value="motorcycle">Moto</SelectItem>
                        <SelectItem value="truck">Caminhão</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tamanho</Label>
                  <RadioGroup defaultValue="medium" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="small" id="small" />
                      <Label htmlFor="small">Pequeno</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Médio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="large" />
                      <Label htmlFor="large">Grande</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </Card>

            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-lg font-medium mb-4">Informações do cliente</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="João Silva" className="bg-[#27272a] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 98765-4321" className="bg-[#27272a] border-0" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="joao@exemplo.com" className="bg-[#27272a] border-0" />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="client-access" />
                  <Label htmlFor="client-access">Criar acesso para o cliente</Label>
                </div>
              </div>
            </Card>

            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-lg font-medium mb-4">Estacionamento</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sector">Setor</Label>
                    <Select>
                      <SelectTrigger id="sector" className="bg-[#27272a] border-0">
                        <SelectValue placeholder="Selecione o setor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Setor A</SelectItem>
                        <SelectItem value="b">Setor B</SelectItem>
                        <SelectItem value="c">Setor C</SelectItem>
                        <SelectItem value="vip">Setor VIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spot">Vaga</Label>
                    <Select>
                      <SelectTrigger id="spot" className="bg-[#27272a] border-0">
                        <SelectValue placeholder="Selecione a vaga" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a1">A1</SelectItem>
                        <SelectItem value="a2">A2</SelectItem>
                        <SelectItem value="a3">A3</SelectItem>
                        <SelectItem value="a4">A4</SelectItem>
                        <SelectItem value="a5">A5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate">Tarifa</Label>
                  <Select>
                    <SelectTrigger id="rate" className="bg-[#27272a] border-0">
                      <SelectValue placeholder="Selecione a tarifa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hora (R$ 10,00/h)</SelectItem>
                      <SelectItem value="daily">Diária (R$ 50,00)</SelectItem>
                      <SelectItem value="weekly">Semanal (R$ 200,00)</SelectItem>
                      <SelectItem value="monthly">Mensal (R$ 500,00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Serviços adicionais</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="washing" />
                      <Label htmlFor="washing">Lavagem (R$ 30,00)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="polishing" />
                      <Label htmlFor="polishing">Polimento (R$ 80,00)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="vacuum" />
                      <Label htmlFor="vacuum">Aspiração (R$ 20,00)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="waxing" />
                      <Label htmlFor="waxing">Enceramento (R$ 50,00)</Label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-lg font-medium mb-4">Observações</h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Notas</Label>
                  <textarea
                    id="notes"
                    rows={5}
                    placeholder="Adicione observações sobre o veículo ou cliente..."
                    className="w-full rounded-md bg-[#27272a] border-0 p-3 text-[#f4f4f5] placeholder:text-[#71717a] focus:ring-2 focus:ring-[#5eead4] focus:ring-offset-2 focus:ring-offset-[#18181b]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="damage" />
                  <Label htmlFor="damage">Veículo possui avarias</Label>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" className="border-[#27272a] bg-transparent text-[#f4f4f5] hover:bg-[#27272a]">
              Cancelar
            </Button>
            <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Plus className="h-4 w-4 mr-2" />
              Registrar entrada
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

