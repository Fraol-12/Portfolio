import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', level: 75 },
                { name: 'Tailwind CSS', level: 75 },
                { name: 'JavaScript', level: 80 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'Express.js', level: 70 },
                { name: 'Django', level: 90 },
                { name: 'Python', level: 90 },
            ],
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', level: 75 },
                { name: 'MongoDB', level: 80 },
                { name: 'MySQL', level: 75 },
            ],
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Docker', level: 70 },
                { name: 'Git & GitHub', level: 90 },
                { name: 'Linux', level: 80 },
                { name: 'Vercel/Render', level: 85 },
            ],
        },
    ];

    const stats = [

    ];

    return (
        <section id="skills" className="section-spacing border-t border-border bg-background">
            <div className="max-w-container flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-primary">Tech Stack</h2>
                    <p className="max-w-2xl text-secondary/80">
                        The tools and technologies I use to design, build, and deploy modern web applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {categories.map((cat) => (
                        <div key={cat.title} className="bg-surface/20 border border-border/40 rounded-xl p-8 flex flex-col gap-8 hover:border-primary/20 transition-all duration-300">
                            <h3 className="text-primary font-mono uppercase tracking-widest text-sm opacity-60">
                                {cat.title}
                            </h3>
                            <div className="flex flex-col gap-6">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-primary/90 font-medium">{skill.name}</span>
                                            <span className="text-secondary/60 font-mono text-xs">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-border/20 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary/40 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-surface/10 border border-border/20 rounded-xl p-6 flex flex-col items-center gap-2 group hover:bg-surface/20 transition-all">
                            <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-secondary font-mono opacity-60 text-center">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

