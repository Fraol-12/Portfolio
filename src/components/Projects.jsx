import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Library Management API',
            description: 'Production-ready RESTful backend with JWT authentication, borrowing rules, and domain integrity enforcement.',
            tech: ['Python', 'Django 6', 'DRF', 'PostgreSQL', 'Docker'],
            live: '#',
            github: '#',
        },
        {
            title: 'Encore (YouTube → Spotify Sync)',
            description: 'Backend system for syncing YouTube playlists to Spotify with background jobs and fuzzy track matching.',
            tech: ['Python', 'Django', 'DRF', 'Celery', 'Redis', 'PostgreSQL'],
            live: '#',
            github: '#',
        },
        {
            title: 'Social Media API',
            description: 'RESTful API with custom user models, token-based authentication, and profile management.',
            tech: ['Python', 'Django', 'DRF', 'PostgreSQL'],
            live: '#',
            github: '#',
        },
    ];

    return (
        <section id="work" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-center gap-16">
                <h2 className="text-primary text-center">Selected Work</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-border bg-surface hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col gap-6 h-full justify-between">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-primary text-2xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-mono text-secondary px-2 py-1 bg-background border border-border rounded-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-6 items-center pt-4">
                                    <a
                                        href={project.live}
                                        className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1 group/link"
                                    >
                                        Live Demo
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1 group/link"
                                    >
                                        GitHub Repository
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
