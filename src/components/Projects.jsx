import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Encore (YouTube → Spotify Sync)',
            description: 'Backend service that converts YouTube playlists to Spotify using intelligent track matching. ',
            tech: ['Python', 'Django', 'DRF', 'Celery', 'Redis', 'PostgreSQL'],
            live: 'https://encore-w2ay.onrender.com/encore/ ',
            github: 'https://github.com/Fraol-12/encore',
        },
        {
            title: 'Library Management API',
            description: 'Professional RESTful backend for a library system built with Django and Django REST Framework.',
            tech: ['Python', 'Django ', 'DRF', 'PostgreSQL', 'SimpleJWT','Docker'],
            live: 'https://library-management-api-ym28.onrender.com/',
            github: 'https://github.com/Fraol-12/library-management-api',
        },
        {
            title: 'Social Media API',
            description: 'RESTful backend foundation for a social media platform built with Django REST Framework.',
            tech: ['Python', 'Django', 'DRF', 'PostgreSQL'],
            live: 'https://social-media-api-2u8v.onrender.com/',
            github: 'https://github.com/Fraol-12/social_media_api',
        },
    ];

    return (
        <section id="work" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-center gap-16">
                <h2 className="text-primary text-center">Featured Projects</h2>

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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1 group/link"
                                    >
                                        Live Demo
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
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