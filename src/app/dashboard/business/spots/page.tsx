import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Plus } from "lucide-react"

export default function SpotsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col">
      <Header userType="business" userName="Park ABC" userEmail="contato@parkabc.com" />

      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar userType="business" />

        <main className="p-6 flex-1 md:ml-[70px] lg:ml-[250px] overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Vagas</h1>
            <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar setor
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Setor A */}
            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-xl font-bold mb-4">Setor A</h2>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-md text-sm font-medium ${
                      i < 15 ? "bg-[#27272a] text-[#a1a1aa]" : "bg-[#042f2e] text-[#5eead4]"
                    }`}
                  >
                    A{i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#a1a1aa]">
                <span>20 vagas</span>
                <span>15 ocupadas (75%)</span>
              </div>
            </Card>

            {/* Setor B */}
            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-xl font-bold mb-4">Setor B</h2>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-md text-sm font-medium ${
                      i < 8 ? "bg-[#27272a] text-[#a1a1aa]" : "bg-[#042f2e] text-[#5eead4]"
                    }`}
                  >
                    B{i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#a1a1aa]">
                <span>15 vagas</span>
                <span>8 ocupadas (53%)</span>
              </div>
            </Card>

            {/* Setor C */}
            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-xl font-bold mb-4">Setor C</h2>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-md text-sm font-medium ${
                      i < 20 ? "bg-[#27272a] text-[#a1a1aa]" : "bg-[#042f2e] text-[#5eead4]"
                    }`}
                  >
                    C{i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#a1a1aa]">
                <span>25 vagas</span>
                <span>20 ocupadas (80%)</span>
              </div>
            </Card>

            {/* Setor VIP */}
            <Card className="bg-[#18181b] border-[#27272a] p-6">
              <h2 className="text-xl font-bold mb-4">Setor VIP</h2>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-md text-sm font-medium ${
                      i < 5 ? "bg-[#27272a] text-[#a1a1aa]" : "bg-[#042f2e] text-[#5eead4]"
                    }`}
                  >
                    V{i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#a1a1aa]">
                <span>10 vagas</span>
                <span>5 ocupadas (50%)</span>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

