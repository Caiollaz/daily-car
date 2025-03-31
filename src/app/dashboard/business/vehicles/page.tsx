import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Clock, MoreHorizontal, Plus, Search, Tag } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function VehiclesList() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Veículos</h1>
            <Button asChild className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Link href="/dashboard/business/vehicles/new">
                <Plus className="h-4 w-4 mr-2" />
                Registrar entrada
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#71717a]" />
              <Input
                placeholder="Buscar por placa, modelo ou cliente"
                className="pl-10 bg-[#18181b] border-[#27272a]"
              />
            </div>
            <Button variant="outline" className="border-[#27272a] bg-transparent text-[#f4f4f5] hover:bg-[#27272a]">
              <Tag className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" className="border-[#27272a] bg-transparent text-[#f4f4f5] hover:bg-[#27272a]">
              <Clock className="h-4 w-4 mr-2" />
              Histórico
            </Button>
          </div>

          <div className="bg-[#18181b] border border-[#27272a] rounded-md overflow-hidden">
            <div className="grid grid-cols-12 p-4 border-b border-[#27272a] text-sm font-medium text-[#a1a1aa]">
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Placa</div>
              <div className="col-span-2">Modelo</div>
              <div className="col-span-2">Cliente</div>
              <div className="col-span-1">Vaga</div>
              <div className="col-span-2">Entrada</div>
              <div className="col-span-1">Valor</div>
              <div className="col-span-1 text-right">Ações</div>
            </div>

            {/* Veículo 1 */}
            <div className="grid grid-cols-12 p-4 border-b border-[#27272a] items-center hover:bg-[#27272a]/20">
              <div className="col-span-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="col-span-2 font-medium">ABC-1234</div>
              <div className="col-span-2 text-[#a1a1aa]">Honda Civic</div>
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="João Silva" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <span className="text-sm">João Silva</span>
              </div>
              <div className="col-span-1">A15</div>
              <div className="col-span-2 text-[#a1a1aa]">Hoje, 10:30</div>
              <div className="col-span-1 font-medium">R$ 15,00</div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Veículo 2 */}
            <div className="grid grid-cols-12 p-4 border-b border-[#27272a] items-center hover:bg-[#27272a]/20">
              <div className="col-span-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="col-span-2 font-medium">DEF-5678</div>
              <div className="col-span-2 text-[#a1a1aa]">Toyota Corolla</div>
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Maria Oliveira" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <span className="text-sm">Maria Oliveira</span>
              </div>
              <div className="col-span-1">B05</div>
              <div className="col-span-2 text-[#a1a1aa]">Hoje, 11:45</div>
              <div className="col-span-1 font-medium">R$ 10,00</div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Veículo 3 */}
            <div className="grid grid-cols-12 p-4 border-b border-[#27272a] items-center hover:bg-[#27272a]/20">
              <div className="col-span-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="col-span-2 font-medium">GHI-9012</div>
              <div className="col-span-2 text-[#a1a1aa]">Volkswagen Golf</div>
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Carlos Santos" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <span className="text-sm">Carlos Santos</span>
              </div>
              <div className="col-span-1">C12</div>
              <div className="col-span-2 text-[#a1a1aa]">Hoje, 09:15</div>
              <div className="col-span-1 font-medium">R$ 25,00</div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Veículo 4 */}
            <div className="grid grid-cols-12 p-4 border-b border-[#27272a] items-center hover:bg-[#27272a]/20">
              <div className="col-span-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="col-span-2 font-medium">JKL-3456</div>
              <div className="col-span-2 text-[#a1a1aa]">BMW X5</div>
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Ana Pereira" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <span className="text-sm">Ana Pereira</span>
              </div>
              <div className="col-span-1">VIP03</div>
              <div className="col-span-2 text-[#a1a1aa]">Hoje, 11:30</div>
              <div className="col-span-1 font-medium">R$ 35,00</div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Veículo 5 */}
            <div className="grid grid-cols-12 p-4 items-center hover:bg-[#27272a]/20">
              <div className="col-span-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="col-span-2 font-medium">MNO-7890</div>
              <div className="col-span-2 text-[#a1a1aa]">Fiat Uno</div>
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Pedro Costa" />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <span className="text-sm">Pedro Costa</span>
              </div>
              <div className="col-span-1">A08</div>
              <div className="col-span-2 text-[#a1a1aa]">Hoje, 12:15</div>
              <div className="col-span-1 font-medium">R$ 8,00</div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-[#a1a1aa]">
            <div>Mostrando 5 de 24 veículos</div>
            <div className="flex items-center gap-2">
              <span>Linhas por página:</span>
              <select className="bg-[#18181b] border border-[#27272a] rounded px-2 py-1">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
              <div className="flex items-center gap-1 ml-4">
                <Button variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
                  <span className="sr-only">Primeira página</span>
                  <span className="text-xs">«</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
                  <span className="sr-only">Página anterior</span>
                  <span className="text-xs">‹</span>
                </Button>
                <span className="px-2">Página 1 de 5</span>
                <Button variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
                  <span className="sr-only">Próxima página</span>
                  <span className="text-xs">›</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
                  <span className="sr-only">Última página</span>
                  <span className="text-xs">»</span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

