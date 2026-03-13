import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-left text-left gap-12">
                <h2 className="text-primary">About Me</h2>

                <div className="max-w-3xl flex flex-col gap-8">
                    <p className="text-xl text-secondary leading-snug">
                        I am a senior full-stack engineer with extensive experience in designing and building scalable, maintainable, and high-performance backend systems. My expertise lies in architecting robust RESTful APIs, distributed systems, and full-stack applications that solve complex real-world problems efficiently.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        I have a strong focus on clean architecture, domain integrity, and reliable, production-ready code. While I am comfortable across the full stack, I specialize in backend engineering, ensuring systems are performant, maintainable, and secure.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        Passionate about continuous improvement, I actively build production-style projects, adopt modern technologies, and follow best practices to deliver solutions that meet both business and technical goals.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;
