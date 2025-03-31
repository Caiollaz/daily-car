import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Car, Clock, Tag, Building2 } from "lucide-react"

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="client" userName="João Silva" userEmail="joao@exemplo.com" />

      <main className="p-6 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Meu veículo</h1>

          <Card className="bg-[#18181b] border-[#27272a] mb-6">
            <div className="p-6 border-b border-[#27272a]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-[#27272a]">
                    <Car className="h-6 w-6 text-[#a1a1aa]" />
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">Honda Civic</h2>
                    <p className="text-[#a1a1aa]">ABC-1234 • Preto</p>
                  </div>
                </div>
                <div className="bg-[#042f2e] text-[#5eead4] px-3 py-1 rounded-full text-sm font-medium">
                  Estacionado
                </div>
              </div>
            </div>

            <div className="px-6 py-3 border-b border-[#27272a] bg-[#27272a]/30">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#5eead4]" />
                <span className="font-medium">Park ABC - Centro</span>
                <span className="text-xs text-[#a1a1aa]">Rua das Flores, 123 - Centro</span>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-[#a1a1aa] mb-1">Localização</h3>
                <p className="text-lg font-medium">Setor A • Vaga 15</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#a1a1aa] mb-1">Entrada</h3>
                <p className="text-lg font-medium">Hoje, 10:30</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#a1a1aa] mb-1">Valor atual</h3>
                <p className="text-lg font-medium">R$ 15,00</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#18181b] border-[#27272a] mb-6">
            <div className="p-6 border-b border-[#27272a]">
              <h2 className="text-lg font-medium">Serviços adicionais</h2>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between py-3 border-b border-[#27272a]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#27272a]">
                    <Tag className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <p className="font-medium">Lavagem</p>
                    <p className="text-sm text-[#a1a1aa]">Solicitado às 10:45</p>
                  </div>
                </div>
                <div className="text-[#5eead4]">R$ 30,00</div>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#27272a]">
                    <Tag className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <p className="font-medium">Aspiração</p>
                    <p className="text-sm text-[#a1a1aa]">Solicitado às 10:45</p>
                  </div>
                </div>
                <div className="text-[#5eead4]">R$ 20,00</div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#18181b] border-[#27272a]">
            <div className="p-6 border-b border-[#27272a]">
              <h2 className="text-lg font-medium">Resumo</h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Estacionamento (1h30min)</span>
                  <span>R$ 15,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lavagem</span>
                  <span>R$ 30,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Aspiração</span>
                  <span>R$ 20,00</span>
                </div>
                <div className="border-t border-[#27272a] pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ 65,00</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Tempo estimado de conclusão</span>
                  <span className="text-sm font-medium">30 min</span>
                </div>
                <Progress value={50} className="h-2 bg-[#27272a]">
                  <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: "50%" }} />
                </Progress>
                <p className="text-xs text-[#a1a1aa] mt-2">Lavagem e aspiração em andamento</p>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
                  <Clock className="h-4 w-4 mr-2" />
                  Solicitar saída
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

