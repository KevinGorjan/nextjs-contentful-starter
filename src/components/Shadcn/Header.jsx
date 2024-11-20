"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSheet = () => setIsOpen(!isOpen)

  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2 ml-4">
          <span className="h-7 w-7 bg-primary rounded-md"></span>
          <span className="font-bold text-xl">Logo</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/about-us" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/page-with-grid" className="text-sm font-medium hover:underline">
            The Grid
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium hover:underline" onClick={toggleSheet}>
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline" onClick={toggleSheet}>
                  About
                </Link>
                <Link href="/services" className="text-sm font-medium hover:underline" onClick={toggleSheet}>
                  Services
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline" onClick={toggleSheet}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Français</DropdownMenuItem>
        <DropdownMenuItem>Deutsch</DropdownMenuItem>
        <DropdownMenuItem>Español</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}