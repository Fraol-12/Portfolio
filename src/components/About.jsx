import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-left text-left gap-12">
                <h2 className="text-primary">About</h2>

                <div className="max-w-3xl flex flex-col gap-8">
                    <p className="text-2xl text-primary leading-snug">
                        I am a Computer Science student and ALX Backend Engineering Graduate with experience building scalable RESTful APIs and full-stack web applications.
                    </p>
                    <div className="flex flex-col gap-6 text-lg text-secondary leading-relaxed">
                        <p>
                            My interests include backend architecture, distributed systems, and building reliable APIs. I enjoy designing systems that are scalable, maintainable, and performance-focused.
                        </p>
                        <p>
                            Currently building projects and continuously improving my engineering skills. I believe in writing clean, documented code and building software that solves real-world problems efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
