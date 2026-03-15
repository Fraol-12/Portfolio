import React from 'react';

const categories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['React','HTML', 'CSS', 'Tailwind CSS'],
  },

  {
    title: 'Backend',
    skills: ['Django','Node.js', 'Express'],
  },

  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL',],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel', 'Render', 'Neon','Postman','Celery'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing border-t border-border bg-background">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-primary text-3xl font-semibold">Tech Stack</h2>
          <p className="max-w-2xl text-secondary/80 text-center">
            Tools and technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full">
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-4 items-center lg:items-start w-full max-w-xs">
              <h3 className="text-primary font-mono uppercase tracking-widest text-sm opacity-70 text-center lg:text-left">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;