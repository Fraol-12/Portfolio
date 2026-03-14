import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-left text-left gap-12">
                <h2 className="text-primary">About Me</h2>

                <div className="max-w-3xl flex flex-col gap-8">
                    <p className="text-xl text-secondary leading-snug">
                        I am a Computer Science student and backend-focused full-stack developer passionate about building scalable and maintainable web applications. I enjoy designing RESTful APIs and developing full-stack systems that solve real-world problems.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        My work primarily focuses on backend development using technologies such as Django, Django REST Framework, and PostgreSQL, while also building modern user interfaces with React and Tailwind CSS.
                    </p>

                    <p className="text-xl text-secondary leading-snug">
                        Through building production-style projects, I continuously improve my skills in backend engineering, system design, and modern web development practices, with the long-term goal of becoming an AI engineer.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;