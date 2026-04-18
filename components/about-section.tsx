"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Computer Science Student",
    organization: "Ambo University",
    description: "Pursuing BSc in Computer Science with focus on backend systems, databases, and AI fundamentals.",
  },
  {
    period: "2024",
    title: "Backend Engineering Graduate",
    organization: "ALX Africa",
    description: "Intensive program focused on production-ready backend systems, API design, and modern deployment practices.",
  },
]

const highlights = [
  "Designed and built scalable RESTful APIs using Django REST Framework",
  "Implemented secure authentication systems with JWT and role-based access",
  "Optimized PostgreSQL database schemas for performance",
  "Containerized applications with Docker for consistent deployments",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm text-accent mb-3 tracking-widest uppercase">About</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Building the backbone of modern web experiences.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a backend-focused full-stack developer passionate about building 
              scalable and maintainable web applications. My approach combines solid 
              engineering principles with modern development practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While design is the visible layer, I believe that understanding the 
              technical foundations leads to more thoughtful, robust systems. I enjoy 
              the challenge of designing APIs that are both powerful and intuitive to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My long-term goal is to transition into AI engineering, combining my 
              backend expertise with machine learning to build intelligent systems 
              that solve real-world problems.
            </p>

            {/* Highlights */}
            <div className="pt-8 border-t border-border/50">
              <h3 className="text-sm text-foreground font-medium mb-4 tracking-wide uppercase">
                Key Capabilities
              </h3>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-sm text-foreground font-medium mb-8 tracking-wide uppercase">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">
                    {exp.period}
                  </p>
                  <h4 className="text-foreground font-medium mb-1 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-accent mb-2">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">
                Based in
              </p>
              <p className="text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Addis Ababa, Ethiopia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
