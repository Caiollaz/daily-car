import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    // <div className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
    //   {/* Header */}
    //   <header className="border-b border-[#27272a] px-6 py-3 flex items-center justify-between">
    //     <div className="flex items-center gap-6">
    //       <div className="flex items-center gap-2">
    //         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#5eead4" />
    //         </svg>
    //         <span className="text-xs font-medium text-[#a1a1aa]">BETA</span>
    //       </div>
    //       <div className="h-4 w-px bg-[#27272a]"></div>
    //       <div className="flex items-center gap-2">
    //         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path
    //             d="M5 12L10 17L20 7"
    //             stroke="#5eead4"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //         <span className="font-medium">Rocketseat</span>
    //         <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">PRO</span>
    //         <ChevronDown className="h-4 w-4 text-[#71717a]" />
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <span className="font-medium">John Doe</span>
    //       <span className="text-xs text-[#71717a]">john@nivo.video</span>
    //       <Avatar className="h-8 w-8">
    //         <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
    //         <AvatarFallback>JD</AvatarFallback>
    //       </Avatar>
    //       <ChevronDown className="h-4 w-4 text-[#71717a]" />
    //     </div>
    //   </header>

    //   {/* Main Content */}
    //   <main className="p-6 flex gap-6">
    //     {/* Collections */}
    //     <div className="flex-1">
    //       <div className="flex items-center justify-between mb-6">
    //         <h1 className="text-2xl font-bold">Collections</h1>
    //         <Button className="bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
    //           <Plus className="h-4 w-4 mr-2" />
    //           Create collection
    //         </Button>
    //       </div>

    //       <div className="grid grid-cols-2 gap-6">
    //         {/* Ignite Collection */}
    //         <Card className="bg-[#18181b] border-[#27272a]">
    //           <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
    //             <h2 className="text-xl font-bold">Ignite</h2>
    //             <DropdownMenu>
    //               <DropdownMenuTrigger asChild>
    //                 <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
    //                   <MoreHorizontal className="h-4 w-4" />
    //                 </Button>
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent align="end">
    //                 <DropdownMenuItem>Edit</DropdownMenuItem>
    //                 <DropdownMenuItem>Delete</DropdownMenuItem>
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           </div>
    //           <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
    //             <div className="flex items-center gap-2">
    //               <span>232 videos</span>
    //               <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
    //               <span>65GB storage</span>
    //             </div>
    //           </div>
    //           <div className="p-4 flex items-center gap-3">
    //             <Avatar className="h-8 w-8">
    //               <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Diego" />
    //               <AvatarFallback>D</AvatarFallback>
    //             </Avatar>
    //             <div className="text-sm">
    //               <span className="font-medium">Diego</span> <span className="text-[#a1a1aa]">uploaded 3 videos</span>{" "}
    //               <span className="text-[#a1a1aa]">an hour ago</span>
    //             </div>
    //           </div>
    //         </Card>

    //         {/* Explorer Collection */}
    //         <Card className="bg-[#18181b] border-[#27272a]">
    //           <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
    //             <h2 className="text-xl font-bold">Explorer</h2>
    //             <DropdownMenu>
    //               <DropdownMenuTrigger asChild>
    //                 <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
    //                   <MoreHorizontal className="h-4 w-4" />
    //                 </Button>
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent align="end">
    //                 <DropdownMenuItem>Edit</DropdownMenuItem>
    //                 <DropdownMenuItem>Delete</DropdownMenuItem>
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           </div>
    //           <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
    //             <div className="flex items-center gap-2">
    //               <span>102 videos</span>
    //               <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
    //               <span>23GB storage</span>
    //             </div>
    //           </div>
    //           <div className="p-4 flex items-center gap-3">
    //             <Avatar className="h-8 w-8">
    //               <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Elias" />
    //               <AvatarFallback>E</AvatarFallback>
    //             </Avatar>
    //             <div className="text-sm">
    //               <span className="font-medium">Elias</span> <span className="text-[#a1a1aa]">uploaded 12 videos</span>{" "}
    //               <span className="text-[#a1a1aa]">one day ago</span>
    //             </div>
    //           </div>
    //         </Card>

    //         {/* Digital House Collection */}
    //         <Card className="bg-[#18181b] border-[#27272a]">
    //           <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
    //             <h2 className="text-xl font-bold">Digital House</h2>
    //             <DropdownMenu>
    //               <DropdownMenuTrigger asChild>
    //                 <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
    //                   <MoreHorizontal className="h-4 w-4" />
    //                 </Button>
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent align="end">
    //                 <DropdownMenuItem>Edit</DropdownMenuItem>
    //                 <DropdownMenuItem>Delete</DropdownMenuItem>
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           </div>
    //           <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
    //             <div className="flex items-center gap-2">
    //               <span>273 videos</span>
    //               <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
    //               <span>56GB storage</span>
    //             </div>
    //           </div>
    //           <div className="p-4 flex items-center gap-3">
    //             <Avatar className="h-8 w-8">
    //               <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sebastian" />
    //               <AvatarFallback>S</AvatarFallback>
    //             </Avatar>
    //             <div className="text-sm">
    //               <span className="font-medium">Sebastian</span>{" "}
    //               <span className="text-[#a1a1aa]">uploaded 11 videos</span>{" "}
    //               <span className="text-[#a1a1aa]">an hour ago</span>
    //             </div>
    //           </div>
    //         </Card>

    //         {/* Events Collection */}
    //         <Card className="bg-[#18181b] border-[#27272a]">
    //           <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
    //             <h2 className="text-xl font-bold">Events</h2>
    //             <DropdownMenu>
    //               <DropdownMenuTrigger asChild>
    //                 <Button variant="ghost" size="icon" className="h-8 w-8 text-[#71717a]">
    //                   <MoreHorizontal className="h-4 w-4" />
    //                 </Button>
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent align="end">
    //                 <DropdownMenuItem>Edit</DropdownMenuItem>
    //                 <DropdownMenuItem>Delete</DropdownMenuItem>
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           </div>
    //           <div className="p-4 border-b border-[#27272a] text-sm text-[#a1a1aa]">
    //             <div className="flex items-center gap-2">
    //               <span>84 videos</span>
    //               <span className="h-1 w-1 rounded-full bg-[#71717a]"></span>
    //               <span>42GB storage</span>
    //             </div>
    //           </div>
    //           <div className="p-4 flex items-center gap-3">
    //             <Avatar className="h-8 w-8">
    //               <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Vinicius" />
    //               <AvatarFallback>V</AvatarFallback>
    //             </Avatar>
    //             <div className="text-sm">
    //               <span className="font-medium">Vinicius</span>{" "}
    //               <span className="text-[#a1a1aa]">uploaded 5 videos</span>{" "}
    //               <span className="text-[#a1a1aa]">one month ago</span>
    //             </div>
    //           </div>
    //         </Card>
    //       </div>
    //     </div>

    //     {/* Sidebar */}
    //     <div className="w-80">
    //       {/* Recent Activity */}
    //       <div className="mb-6">
    //         <h2 className="text-lg font-medium mb-4">Recent activity</h2>
    //         <div className="space-y-4">
    //           <div className="flex items-start gap-3">
    //             <div className="mt-1 p-1 rounded bg-[#27272a]">
    //               <Mail className="h-4 w-4 text-[#a1a1aa]" />
    //             </div>
    //             <div>
    //               <div className="text-sm">
    //                 <span className="font-medium">Diego Fernandes</span>{" "}
    //                 <span className="text-[#a1a1aa]">uploaded 3 new videos to</span>{" "}
    //                 <span className="font-medium">Ignite</span>
    //               </div>
    //               <div className="text-xs text-[#a1a1aa]">3 min ago</div>
    //             </div>
    //           </div>

    //           <div className="flex items-start gap-3">
    //             <div className="mt-1 p-1 rounded bg-[#27272a]">
    //               <svg
    //                 className="h-4 w-4 text-[#a1a1aa]"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M12 2L2 7L12 12L22 7L12 2Z"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M2 17L12 22L22 17"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M2 12L12 17L22 12"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //             </div>
    //             <div>
    //               <div className="text-sm">
    //                 <span className="font-medium">Elias Gabriel</span>{" "}
    //                 <span className="text-[#a1a1aa]">created a new webhook</span>
    //               </div>
    //               <div className="text-xs text-[#a1a1aa]">12 min ago</div>
    //             </div>
    //           </div>

    //           <div className="flex items-start gap-3">
    //             <div className="mt-1 p-1 rounded bg-[#27272a]">
    //               <Mail className="h-4 w-4 text-[#a1a1aa]" />
    //             </div>
    //             <div>
    //               <div className="text-sm">
    //                 <span className="font-medium">Joseph Oliveira</span>{" "}
    //                 <span className="text-[#a1a1aa]">uploaded 12 new videos to</span>{" "}
    //                 <span className="font-medium">Explorer</span>
    //               </div>
    //               <div className="text-xs text-[#a1a1aa]">1 hour ago</div>
    //             </div>
    //           </div>

    //           <div className="flex items-start gap-3">
    //             <div className="mt-1 p-1 rounded bg-[#27272a]">
    //               <svg
    //                 className="h-4 w-4 text-[#a1a1aa]"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M12 2L2 7L12 12L22 7L12 2Z"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M2 17L12 22L22 17"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M2 12L12 17L22 12"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //             </div>
    //             <div>
    //               <div className="text-sm">
    //                 <span className="font-medium">Guilherme Pellizzetti</span>{" "}
    //                 <span className="text-[#a1a1aa]">created a new webhook</span>
    //               </div>
    //               <div className="text-xs text-[#a1a1aa]">yesterday</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Usage */}
    //       <Card className="bg-[#18181b] border-[#27272a]">
    //         <div className="p-4 border-b border-[#27272a] flex justify-between items-center">
    //           <div className="flex items-center gap-2">
    //             <h2 className="text-lg font-medium">Usage</h2>
    //             <span className="text-xs font-medium bg-[#042f2e] text-[#5eead4] px-1.5 py-0.5 rounded">PRO</span>
    //           </div>
    //           <Button
    //             variant="outline"
    //             size="sm"
    //             className="h-8 border-[#27272a] bg-transparent text-[#f4f4f5] hover:bg-[#27272a]"
    //           >
    //             <Mail className="h-4 w-4 mr-2" />
    //             Manage plan
    //           </Button>
    //         </div>
    //         <div className="p-4 space-y-4">
    //           <div>
    //             <div className="flex justify-between mb-2">
    //               <span className="text-sm">Storage amount</span>
    //               <span className="text-sm font-medium">
    //                 2TB <span className="text-[#71717a]">/ 6TB</span>
    //               </span>
    //             </div>
    //             <Progress value={33} className="h-2 bg-[#27272a]">
    //               <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: "33%" }} />
    //             </Progress>
    //           </div>
    //           <div>
    //             <div className="flex justify-between mb-2">
    //               <span className="text-sm">Monthly bandwidth</span>
    //               <span className="text-sm font-medium">
    //                 23TB <span className="text-[#71717a]">/ 50TB</span>
    //               </span>
    //             </div>
    //             <Progress value={46} className="h-2 bg-[#27272a]">
    //               <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: "46%" }} />
    //             </Progress>
    //           </div>
    //           <div className="pt-2 text-xs text-[#71717a]">
    //             Your next payment is on <span className="text-[#f4f4f5]">April 7th</span>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //   </main>
    // </div>
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-md w-full">
        <div className="flex flex-col items-center gap-2">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#5eead4" />
          </svg>
          <span className="text-xs font-medium text-[#a1a1aa]">BETA</span>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">DailyCar</h1>
          <p className="text-[#a1a1aa]">
            Sistema completo para gerenciamento de estacionamentos, com controle de entrada e saída de veículos, cálculo
            automático de valores e gestão de vagas.
          </p>
        </div>

        <div className="w-full space-y-4">
          <Input type="email" placeholder="Seu e-mail" className="bg-[#18181b] border-[#27272a] h-12" />
          <div className="flex gap-4">
            <Button asChild className="w-full bg-[#18181b] border border-[#27272a] hover:bg-[#27272a] text-[#f4f4f5]">
              <Link href="/login/client">Acesso Cliente</Link>
            </Button>
            <Button asChild className="w-full bg-[#2dd4bf] hover:bg-[#5eead4] text-[#042f2e]">
              <Link href="/login/business">
                <Check className="mr-2 h-4 w-4" />
                Acesso Empresa
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

