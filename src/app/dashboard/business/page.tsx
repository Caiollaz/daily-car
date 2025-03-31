import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Car, Clock, MoreHorizontal, Plus, Settings, Tag } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function BusinessDashboard() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex gap-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Estacionamento</h1>

              <Button asChild className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
                <Link href="/dashboard/business/vehicles/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Registrar entrada
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Setor A */}
              <Card className="bg-[#18181b] border-[#27272a]">
                <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
                  <h2 className="text-xl font-bold">Setor A</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar setor</DropdownMenuItem>
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span>20 vagas</span>
                    <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
                    <span>15 ocupadas</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">ABC-1234</span>{" "}
                    <span className="text-[#a1a1aa]">entrou na vaga A15</span>{" "}
                    <span className="text-[#a1a1aa]">há 1 hora</span>
                  </div>
                </div>
              </Card>

              {/* Setor B */}
              <Card className="bg-[#18181b] border-[#27272a]">
                <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
                  <h2 className="text-xl font-bold">Setor B</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar setor</DropdownMenuItem>
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span>15 vagas</span>
                    <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
                    <span>8 ocupadas</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">DEF-5678</span>{" "}
                    <span className="text-[#a1a1aa]">entrou na vaga B05</span>{" "}
                    <span className="text-[#a1a1aa]">há 30 minutos</span>
                  </div>
                </div>
              </Card>

              {/* Setor C */}
              <Card className="bg-[#18181b] border-[#27272a]">
                <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
                  <h2 className="text-xl font-bold">Setor C</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar setor</DropdownMenuItem>
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span>25 vagas</span>
                    <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
                    <span>20 ocupadas</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">GHI-9012</span>{" "}
                    <span className="text-[#a1a1aa]">entrou na vaga C12</span>{" "}
                    <span className="text-[#a1a1aa]">há 2 horas</span>
                  </div>
                </div>
              </Card>

              {/* Setor VIP */}
              <Card className="bg-[#18181b] border-[#27272a]">
                <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
                  <h2 className="text-xl font-bold">Setor VIP</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar setor</DropdownMenuItem>
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span>10 vagas</span>
                    <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
                    <span>5 ocupadas</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">JKL-3456</span>{" "}
                    <span className="text-[#a1a1aa]">entrou na vaga VIP03</span>{" "}
                    <span className="text-[#a1a1aa]">há 45 minutos</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 hidden lg:block">
            {/* Atividade Recente */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Atividade recente</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">ABC-1234</span> <span className="text-[#a1a1aa]">entrou no</span>{" "}
                      <span className="font-medium">Setor A</span>
                    </div>
                    <div className="text-xs text-[#a1a1aa]">há 1 hora</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#27272a]">
                    <Tag className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">DEF-5678</span>{" "}
                      <span className="text-[#a1a1aa]">adicionou serviço de</span>{" "}
                      <span className="font-medium">Lavagem</span>
                    </div>
                    <div className="text-xs text-[#a1a1aa]">há 45 minutos</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#27272a]">
                    <Car className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">GHI-9012</span>{" "}
                      <span className="text-[#a1a1aa]">saiu do estacionamento</span>
                    </div>
                    <div className="text-xs text-[#a1a1aa]">há 2 horas</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#27272a]">
                    <Settings className="h-4 w-4 text-[#a1a1aa]" />
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">Administrador</span>{" "}
                      <span className="text-[#a1a1aa]">alterou preço da</span>{" "}
                      <span className="font-medium">diária</span>
                    </div>
                    <div className="text-xs text-[#a1a1aa]">ontem</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <Card className="bg-[#18181b] border-[#27272a]">
              <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Estatísticas</h2>
                  <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">HOJE</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#27272a] bg-transparent text-[#f4f4f5] hover:bg-[#27272a]"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Histórico
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Ocupação total</span>
                    <span className="text-sm font-medium">
                      48 <span className="text-[#71717a]">/ 70</span>
                    </span>
                  </div>
                  <Progress value={68} className="h-2 bg-[#27272a]">
                    <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: "68%" }} />
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Faturamento</span>
                    <span className="text-sm font-medium">
                      R$ 850,00 <span className="text-[#71717a]">/ R$ 1.200,00</span>
                    </span>
                  </div>
                  <Progress value={70} className="h-2 bg-[#27272a]">
                    <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: "70%" }} />
                  </Progress>
                </div>
                <div className="pt-2 text-xs text-[#71717a]">
                  Próximo fechamento em <span className="text-[#f4f4f5]">3 horas</span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

