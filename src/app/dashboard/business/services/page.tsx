import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Car, Plus, Tag } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Serviços</h1>
            <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar serviço
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Serviços disponíveis */}
            <Card className="bg-[#18181b] border-[#27272a]">
              <div className="p-4 border-b border-[#27272a]">
                <h2 className="text-xl font-bold">Serviços disponíveis</h2>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#27272a]">
                      <Tag className="h-4 w-4 text-[#a1a1aa]" />
                    </div>
                    <div>
                      <p className="font-medium">Lavagem</p>
                      <p className="text-sm text-[#a1a1aa]">Lavagem completa do veículo</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">R$ 30,00</div>
                </div>

                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#27272a]">
                      <Tag className="h-4 w-4 text-[#a1a1aa]" />
                    </div>
                    <div>
                      <p className="font-medium">Aspiração</p>
                      <p className="text-sm text-[#a1a1aa]">Limpeza interna com aspirador</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">R$ 20,00</div>
                </div>

                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#27272a]">
                      <Tag className="h-4 w-4 text-[#a1a1aa]" />
                    </div>
                    <div>
                      <p className="font-medium">Polimento</p>
                      <p className="text-sm text-[#a1a1aa]">Polimento da pintura do veículo</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">R$ 80,00</div>
                </div>

                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#27272a]">
                      <Tag className="h-4 w-4 text-[#a1a1aa]" />
                    </div>
                    <div>
                      <p className="font-medium">Enceramento</p>
                      <p className="text-sm text-[#a1a1aa]">Aplicação de cera protetora</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">R$ 50,00</div>
                </div>
              </div>
            </Card>

            {/* Serviços em andamento */}
            <Card className="bg-[#18181b] border-[#27272a]">
              <div className="p-4 border-b border-[#27272a]">
                <h2 className="text-xl font-bold">Serviços em andamento</h2>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 bg-[#27272a]">
                      <Car className="h-4 w-4 text-[#a1a1aa]" />
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">ABC-1234</p>
                        <span className="text-xs bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">EM PROGRESSO</span>
                      </div>
                      <p className="text-sm text-[#a1a1aa]">Lavagem + Aspiração</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">30 min</div>
                </div>

                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 bg-[#27272a]">
                      <Car className="h-4 w-4 text-[#a1a1aa]" />
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">DEF-5678</p>
                        <span className="text-xs bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">EM PROGRESSO</span>
                      </div>
                      <p className="text-sm text-[#a1a1aa]">Polimento</p>
                    </div>
                  </div>
                  <div className="text-[#5eead4] font-medium">45 min</div>
                </div>

                <div className="flex justify-between items-center p-3 border border-[#27272a] rounded-md">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 bg-[#27272a]">
                      <Car className="h-4 w-4 text-[#a1a1aa]" />
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">GHI-9012</p>
                        <span className="text-xs bg-amber-900/50 text-amber-400 px-1.5 py-0.5 rounded">PENDENTE</span>
                      </div>
                      <p className="text-sm text-[#a1a1aa]">Enceramento</p>
                    </div>
                  </div>
                  <div className="text-amber-400 font-medium">Aguardando</div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

