import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function BusinessLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-md w-full">
        <div className="flex flex-col items-center gap-2">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#5eead4" />
          </svg>
          <span className="text-xs font-medium text-[#a1a1aa]">BETA</span>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Acesso Empresa</h1>
          <p className="text-[#a1a1aa]">
            Entre com suas credenciais para acessar o painel de controle do seu estacionamento.
          </p>
        </div>

        <div className="w-full space-y-4">
          <Input type="email" placeholder="E-mail" className="bg-[#18181b] border-[#27272a] h-12" />
          <Input type="password" placeholder="Senha" className="bg-[#18181b] border-[#27272a] h-12" />
          <div className="flex gap-4">
            <Button asChild variant="outline" className="border-[#27272a] hover:bg-[#27272a] text-[#f4f4f5]">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <Button asChild className="w-full bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Link href="/dashboard/business">
                <Check className="mr-2 h-4 w-4" />
                Entrar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

