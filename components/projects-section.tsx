"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Encore",
    subtitle: "YouTube → Spotify Sync",
    description: "Backend service that converts YouTube playlists to Spotify using intelligent track matching.",
    tags: ["Python", "Django", "DRF", "Celery", "Redis", "PostgreSQL", "Docker"],
    liveUrl: "https://encore-w2ay.onrender.com/encore/",
    githubUrl: "https://github.com/Fraol-12/encore",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 2,
    title: "Library Management API",
    subtitle: "Production-Grade RESTful Backend",
    description: "Professional RESTful backend for a library system built with Django and Django REST Framework.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "SimpleJWT", "Docker"],
    liveUrl: "https://library-management-api-ym28.onrender.com/",
    githubUrl: "https://github.com/Fraol-12/library-management-api",
    featured: true,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "Library Management Frontend",
    subtitle: "Modern Member Portal",
    description: "React SPA for a digital library system with catalog browsing, member dashboard, and authenticated routes.",
    tags: ["React.js", "Tailwind CSS", "Axios", "Framer Motion"],
    liveUrl: "https://library-management-frontend-sepia.vercel.app/",
    githubUrl: "https://github.com/Fraol-12/library-management-frontend",
    featured: false,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 4,
    title: "Social Media API",
    subtitle: "RESTful Backend Foundation",
    description: "RESTful backend foundation for a social media platform built with Django REST Framework.",
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
    liveUrl: "https://social-media-api-2u8v.onrender.com/",
    githubUrl: "https://github.com/Fraol-12/social_media_api",
    featured: false,
    color: "from-rose-500/20 to-pink-500/20",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="py-32 px-6 lg:px-8 bg-card/30" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-sm text-accent mb-3 tracking-widest uppercase">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Projects that showcase my craft.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {projects.length} Projects
            </span>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 ${
                hoveredId === project.id ? "border-border shadow-2xl shadow-background/50" : ""
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                      <p className="text-sm text-accent mb-2">{project.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs text-muted-foreground bg-secondary/50 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-6">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group/link"
                        >
                          <span>Live Demo</span>
                          <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 12 12" 
                            fill="none"
                            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Repository</span>
                        </a>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="hidden md:block relative">
                      <div className="aspect-[4/3] rounded-xl bg-secondary/30 border border-border/30 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-serif text-muted-foreground/20">
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </div>
                        {/* Code lines decoration */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card/80 to-transparent">
                          <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-border/20 rounded" />
                            <div className="h-2 w-1/2 bg-border/20 rounded" />
                            <div className="h-2 w-2/3 bg-border/20 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-sm text-foreground font-medium mb-8 tracking-wide uppercase">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300"
              >
                <p className="text-xs text-accent mb-2">{project.subtitle}</p>
                <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary/50 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Code →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
