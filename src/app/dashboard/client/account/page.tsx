import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { ChevronLeft, Save, User } from "lucide-react"
import Link from "next/link"

export default function ClientAccount() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="client" userName="João Silva" userEmail="joao@exemplo.com" />

      <main className="p-6 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Button asChild variant="outline" size="icon" className="h-8 w-8 border-[#27272a]">
              <Link href="/dashboard/client">
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Minha Conta</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-1">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="João Silva" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="w-full border-[#27272a] hover:bg-[#27272a]">
                  Alterar foto
                </Button>
              </div>
            </Card>

            <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-2">
              <h2 className="text-lg font-medium mb-4">Informações pessoais</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" defaultValue="João Silva" className="bg-[#27272a] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="document">CPF</Label>
                    <Input id="document" defaultValue="123.456.789-00" className="bg-[#27272a] border-0" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" defaultValue="joao@exemplo.com" className="bg-[#27272a] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="(11) 98765-4321" className="bg-[#27272a] border-0" />
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

            <Card className="bg-[#18181b] border-[#27272a] p-6 col-span-3">
              <h2 className="text-lg font-medium mb-4">Veículos</h2>

              <div className="space-y-4">
                <div className="p-4 border border-[#27272a] rounded-md flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#27272a]">
                      <User className="h-5 w-5 text-[#a1a1aa]" />
                    </div>
                    <div>
                      <p className="font-medium">Honda Civic</p>
                      <p className="text-sm text-[#a1a1aa]">ABC-1234 • Preto</p>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="border-[#27272a] hover:bg-[#27272a]">
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

