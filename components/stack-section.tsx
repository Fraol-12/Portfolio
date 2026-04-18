"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stackCategories = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "Node.js", "Express", "Celery"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Linux", "Vercel", "Render", "Postman"],
  },
]

export function StackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stack" className="py-32 px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm text-accent mb-3 tracking-widest uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl">
            Tools and technologies I use to bring ideas to life.
          </h2>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h3 className="text-sm text-foreground font-medium mb-6 tracking-wide uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-default group flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border/50"
        >
          <blockquote className="max-w-3xl">
            <p className="text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed italic">
              &ldquo;The best code is the code that doesn&apos;t need to exist. I focus on 
              building systems that are simple, maintainable, and solve real problems.&rdquo;
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
