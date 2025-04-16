"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-emerald-600">
            WebMaster Pro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Accueil
            </Link>
            <Link href="/courses" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Cours
            </Link>
            <Link href="/quizzes" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Quiz
            </Link>
            <Link href="/certification" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Certification
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
              À propos
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/register">Inscription</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              href="/courses"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Cours
            </Link>
            <Link
              href="/quizzes"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Quiz
            </Link>
            <Link
              href="/certification"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Certification
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
              <Button asChild variant="outline">
                <Link href="/login" onClick={toggleMenu}>
                  Connexion
                </Link>
              </Button>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register" onClick={toggleMenu}>
                  Inscription
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
