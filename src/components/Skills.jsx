import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'JavaScript'],
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['Django', 'Node.js', 'Express.js', 'React.js', 'Tailwindcss'],
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
        },
        {
            title: 'DevOps & Deployment',
            skills: ['Docker', 'Render', 'Vercel', 'Git & GitHub', 'Linux'],
        },
    ];

    return (
        <section className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-center gap-16">
                <h2 className="text-primary text-center">Technologies</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {categories.map((cat) => (
                        <div key={cat.title} className="flex flex-col gap-6">
                            <h3 className="text-primary font-mono uppercase tracking-widest text-sm opacity-60">
                                {cat.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
                                        <span className="text-lg text-secondary">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
