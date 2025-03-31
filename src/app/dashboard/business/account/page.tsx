import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Building, ChevronLeft, Plus, Save } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function BusinessAccount() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button asChild variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
                <Link href="/dashboard/business">
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Minha Conta</h1>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-[#18181b]">
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="locations">Estacionamentos</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-1">
                    <div className="flex flex-col items-center gap-4 p-6">
                      <div className="flex flex-col items-center gap-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Park ABC" />
                          <AvatarFallback>EA</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" className="w-full border-[#27272a] hover:bg-[#27272a]">
                          Alterar foto
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-2">
                    <h2 className="text-lg font-medium mb-4">Informações da empresa</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Nome da empresa</Label>
                          <Input
                            id="company-name"
                            defaultValue="Park ABC"
                            className="bg-[#27272a] border-0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-document">CNPJ</Label>
                          <Input
                            id="company-document"
                            defaultValue="12.345.678/0001-90"
                            className="bg-[#27272a] border-0"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-email">E-mail</Label>
                          <Input
                            id="company-email"
                            type="email"
                            defaultValue="contato@estacionamentoabc.com"
                            className="bg-[#27272a] border-0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-phone">Telefone</Label>
                          <Input id="company-phone" defaultValue="(11) 3456-7890" className="bg-[#27272a] border-0" />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
                          <Save className="h-4 w-4 mr-2" />
                          Salvar alterações
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-3">
                    <h2 className="text-lg font-medium mb-4">Segurança</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Senha atual</Label>
                          <Input id="current-password" type="password" className="bg-[#27272a] border-0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Nova senha</Label>
                          <Input id="new-password" type="password" className="bg-[#27272a] border-0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirmar senha</Label>
                          <Input id="confirm-password" type="password" className="bg-[#27272a] border-0" />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
                          <Save className="h-4 w-4 mr-2" />
                          Atualizar senha
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="locations">
                <div className="grid grid-cols-1 gap-6">
                  <Card className="bg-[#18181b] border-[#27272a] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium">Meus estacionamentos</h2>
                      <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar estacionamento
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {/* Estacionamento 1 */}
                      <div className="p-4 border border-[#27272a] rounded-md flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-[#27272a]">
                            <Building className="h-5 w-5 text-[#a1a1aa]" />
                          </div>
                          <div>
                            <p className="font-medium">Park ABC - Centro</p>
                            <p className="text-sm text-[#a1a1aa]">Rua das Flores, 123 - Centro</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">
                            ATIVO
                          </span>
                          <Button variant="outline" size="sm" className="border-[#27272a] hover:bg-[#27272a]">
                            Gerenciar
                          </Button>
                        </div>
                      </div>

                      {/* Estacionamento 2 */}
                      <div className="p-4 border border-[#27272a] rounded-md flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-[#27272a]">
                            <Building className="h-5 w-5 text-[#a1a1aa]" />
                          </div>
                          <div>
                            <p className="font-medium">Park ABC - Norte</p>
                            <p className="text-sm text-[#a1a1aa]">Av. Principal, 456 - Zona Norte</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">
                            ATIVO
                          </span>
                          <Button variant="outline" size="sm" className="border-[#27272a] hover:bg-[#27272a]">
                            Gerenciar
                          </Button>
                        </div>
                      </div>

                      {/* Estacionamento 3 */}
                      <div className="p-4 border border-[#27272a] rounded-md flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-[#27272a]">
                            <Building className="h-5 w-5 text-[#a1a1aa]" />
                          </div>
                          <div>
                            <p className="font-medium">Park ABC - Sul</p>
                            <p className="text-sm text-[#a1a1aa]">Rua Secundária, 789 - Zona Sul</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">
                            ATIVO
                          </span>
                          <Button variant="outline" size="sm" className="border-[#27272a] hover:bg-[#27272a]">
                            Gerenciar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

