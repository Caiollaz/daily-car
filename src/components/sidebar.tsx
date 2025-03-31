"use client"

import { cn } from "@/lib/utils"
import { Building2, Car, CarFront, Home, Menu, Settings, Tag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface SidebarProps {
  userType: "business" | "client"
}

export function Sidebar({ userType }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  if (userType === "client") {
    return null
  }

  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMobile} 
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
        onClick={toggleMobile}
      />
      
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-[250px] transition-transform duration-300 bg-[#18181b] border-r border-[#27272a]",
          "md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:hidden"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center h-[61px] border-b border-[#27272a] px-4">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#5eead4" />
              </svg>
              {!collapsed && <span className="font-medium">DailyCar</span>}
            </div>
          </div>

          {/* Estabelecimento selector */}
          {!collapsed ? (
            <div className="px-4 py-3 border-b border-[#27272a]">
              <Select defaultValue="abc">
                <SelectTrigger className="w-full bg-[#27272a] border-0">
                  <SelectValue placeholder="Selecione o estacionamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abc">Park ABC - Centro</SelectItem>
                  <SelectItem value="abc-norte">Park ABC - Norte</SelectItem>
                  <SelectItem value="abc-sul">Park ABC - Sul</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="flex justify-center py-3 border-b border-[#27272a]">
              <Building2 className="h-5 w-5 text-[#5eead4]" />
            </div>
          )}

          {/* Navigation */}
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard/business"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname === "/dashboard/business"
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Home className="h-5 w-5" />
                {!collapsed && <span>Dashboard</span>}
              </Link>

              <Link
                href="/dashboard/business/vehicles"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/vehicles")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Car className="h-5 w-5" />
                {!collapsed && <span>Veículos</span>}
              </Link>

              <Link
                href="/dashboard/business/spots"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/spots")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <CarFront className="h-5 w-5" />
                {!collapsed && <span>Vagas</span>}
              </Link>

              <Link
                href="/dashboard/business/services"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/services")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Tag className="h-5 w-5" />
                {!collapsed && <span>Serviços</span>}
              </Link>

              <Link
                href="/dashboard/business/settings"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/settings")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Settings className="h-5 w-5" />
                {!collapsed && <span>Configurações</span>}
              </Link>
            </nav>
          </div>

          {/* Toggle button */}
          <div className="p-4 border-t border-[#27272a]">
            <Button
              variant="outline"
              size={collapsed ? "icon" : "default"}
              onClick={toggleSidebar}
              className="w-full border-[#27272a] hover:bg-[#27272a] text-[#f4f4f5]"
            >
              <Menu className="h-5 w-5" />
              {!collapsed && <span className="ml-2">Recolher</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-[#18181b] border-r border-[#27272a]",
          collapsed ? "w-[70px]" : "w-[250px]",
          "hidden md:block"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center h-[61px] border-b border-[#27272a] px-4">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#5eead4" />
              </svg>
              {!collapsed && <span className="font-medium">DailyCar</span>}
            </div>
          </div>

          {/* Estabelecimento selector */}
          {!collapsed ? (
            <div className="px-4 py-3 border-b border-[#27272a]">
              <Select defaultValue="abc">
                <SelectTrigger className="w-full bg-[#27272a] border-0">
                  <SelectValue placeholder="Selecione o estacionamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abc">Park ABC - Centro</SelectItem>
                  <SelectItem value="abc-norte">Park ABC - Norte</SelectItem>
                  <SelectItem value="abc-sul">Park ABC - Sul</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="flex justify-center py-3 border-b border-[#27272a]">
              <Building2 className="h-5 w-5 text-[#5eead4]" />
            </div>
          )}

          {/* Navigation */}
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard/business"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname === "/dashboard/business"
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Home className="h-5 w-5" />
                {!collapsed && <span>Dashboard</span>}
              </Link>

              <Link
                href="/dashboard/business/vehicles"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/vehicles")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Car className="h-5 w-5" />
                {!collapsed && <span>Veículos</span>}
              </Link>

              <Link
                href="/dashboard/business/spots"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/spots")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <CarFront className="h-5 w-5" />
                {!collapsed && <span>Vagas</span>}
              </Link>

              <Link
                href="/dashboard/business/services"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/services")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Tag className="h-5 w-5" />
                {!collapsed && <span>Serviços</span>}
              </Link>

              <Link
                href="/dashboard/business/settings"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname.includes("/settings")
                    ? "bg-[#27272a] text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:bg-[#27272a] hover:text-[#f4f4f5]",
                )}
              >
                <Settings className="h-5 w-5" />
                {!collapsed && <span>Configurações</span>}
              </Link>
            </nav>
          </div>

          {/* Toggle button */}
          <div className="p-4 border-t border-[#27272a]">
            <Button
              variant="outline"
              size={collapsed ? "icon" : "default"}
              onClick={toggleSidebar}
              className="w-full border-[#27272a] hover:bg-[#27272a] text-[#f4f4f5]"
            >
              <Menu className="h-5 w-5" />
              {!collapsed && <span className="ml-2">Recolher</span>}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

