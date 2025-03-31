"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  userType: "business" | "client";
  userName: string;
  userEmail: string;
}

export function Header({ userType, userName, userEmail }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Aqui você implementaria a lógica de logout
    router.push("/");
  };

  return (
    <header className="border-b border-[#27272a] px-6 py-3 flex items-center justify-between">
      <div className="flex-1"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 gap-2 px-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt={userName}
              />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{userName}</span>
            <ChevronDown className="h-4 w-4 text-[#71717a]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-sm text-[#a1a1aa]">{userEmail}</div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href={`/dashboard/${userType}/account`}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4" />
              <span>Minha conta</span>
            </Link>
          </DropdownMenuItem>
          {userType === "business" && (
            <DropdownMenuItem asChild>
              <Link
                href="/dashboard/business/settings"
                className="cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-red-500 focus:text-red-500"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
