"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Fraol-12",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fraol-merga-dev404",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:fraolm41@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/FraolMerga",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/FraolMerga",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.65 6.35L9.87 15.13c-.23.23-.57.36-.9.35-.33-.01-.65-.12-.88-.35l-2.5-2.5c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.54 1.54 4.99-4.99c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z"/>
      </svg>
    ),
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-card/30" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-accent mb-3 tracking-widest uppercase">Contact</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Let&apos;s build something great together.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Open to collaborations, interesting projects, and new opportunities. 
              Whether you have a question or just want to say hi, I&apos;ll do my best 
              to get back to you.
            </p>

            {/* Primary CTA */}
            <motion.a
              href="mailto:fraolm41@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-foreground/10 group"
            >
              <span>Say Hello</span>
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
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-12"
          >
            {/* Email */}
            <div className="mb-12">
              <h3 className="text-sm text-foreground font-medium mb-4 tracking-wide uppercase">
                Email
              </h3>
              <a 
                href="mailto:fraolm41@gmail.com"
                className="text-lg text-muted-foreground hover:text-accent transition-colors link-hover"
              >
                fraolm41@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm text-foreground font-medium mb-6 tracking-wide uppercase">
                Elsewhere
              </h3>
              <ul className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                      <span className="link-hover">{link.label}</span>
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 12 12" 
                        fill="none"
                        className="opacity-0 group-hover:opacity-60 transition-all -translate-x-2 group-hover:translate-x-0"
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
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
