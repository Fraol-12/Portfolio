"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* GitHub Logo */}
            <a 
              href="https://github.com/Fraol-12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>

            {/* Navigation - Visible on all screens */}
            <ul className="flex items-center gap-6 md:gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-foreground link-hover"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a
                href="/Firaol_Merga_Resume_2026-03-15.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground border border-border/60 px-5 py-2.5 rounded-full transition-all hover:bg-foreground hover:text-background"
              >
                <span>Resume</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-60"
                >
                  <path 
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/Firaol_Merga_Resume_2026-03-15.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground border border-border/60 px-3 py-2 rounded-full transition-all hover:bg-foreground hover:text-background"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
