import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-left text-left gap-12">
                <h2 className="text-primary">About Me</h2>

                <div className="max-w-3xl flex flex-col gap-8">
                    <p className="text-xl text-secondary leading-snug">
                     I am a Computer Science student and a passionate full-stack developer specializing in backend engineering. My primary focus is designing and building scalable RESTful APIs and reliable backend systems that prioritize clean architecture, maintainability, and performance.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        While I have experience across the full stack, I am particularly interested in backend architecture, distributed systems, and building services that solve real-world problems efficiently. Through my projects, I emphasize clear API design, domain integrity, and writing clean, well-documented code.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        I continuously improve my engineering skills by building production-style projects and exploring modern backend technologies.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;
