"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Upload, X } from "lucide-react"

export function HeroSection() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load image from localStorage on mount, or set as hydrated
    if (typeof window !== "undefined") {
      const savedImage = localStorage.getItem("profileImage")
      setProfileImage(savedImage)
    }
    setIsLoading(false)
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const imageData = event.target?.result as string
      setProfileImage(imageData)
      localStorage.setItem("profileImage", imageData)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setProfileImage(null)
    localStorage.removeItem("profileImage")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />
      
      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Premium Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-3 leading-tight">
                Firaol Merga
              </h1>
              <p className="text-lg md:text-xl text-accent font-light tracking-wide">
                Computer Science Student | Full-Stack Developer
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight text-foreground mb-6"
            >
              <span className="text-balance">I build scalable systems that power modern applications.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              Backend-focused full-stack developer specializing in Django, REST APIs, 
              and modern web architecture. Currently studying Computer Science in Ethiopia.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-foreground/10"
              >
                View Selected Work
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path 
                    d="M3 8H13M13 8L8 3M13 8L8 13" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-secondary"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-border/20" />
              <div className="absolute inset-8 rounded-full border border-border/10" />
              
              {/* Center content */}
              <div className="absolute inset-12 rounded-full bg-card flex items-center justify-center overflow-hidden group">
                {!isLoading && profileImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove image"
                    >
                      <X size={16} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      aria-label="Upload profile image"
                    />
                    <div className="text-center">
                      <Upload size={32} className="text-muted-foreground mx-auto mb-2 opacity-80" />
                      <span className="text-sm text-muted-foreground">Upload Photo</span>
                      <p className="text-xs text-muted-foreground mt-3 tracking-widest uppercase opacity-60">Est. 2024</p>
                    </div>
                  </label>
                )}
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-xs text-muted-foreground"
              >
                Django + DRF
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-4 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-xs text-muted-foreground"
              >
                React + Tailwind
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-24 right-0 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-xs text-muted-foreground"
              >
                PostgreSQL
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
