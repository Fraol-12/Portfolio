import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-left gap-16">
                <h2 className="text-primary text-left">Education</h2>

                <div className="flex flex-col gap-12 max-w-3xl w-full">
                    {/* Education */}
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl text-primary font-semibold">Bachelor of Science in Computer Science</h3>
                            <p className="text-lg text-secondary">Ambo University</p>
                            <p className="text-sm font-mono text-secondary opacity-60">01/2024 – 09/2027</p>
                        </div>
                        <p className="text-secondary leading-relaxed">
                        <strong> Relevant Coursework:</strong>    Data Structures and Algorithms, Database Systems, Computer Organization and Architecture, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, and Web Development.
                        </p>
                    </div>


                    {/* Certification */}
                <div className="flex flex-col gap-4 text-left">
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl text-primary font-semibold">
                    ALX Backend Engineering Graduate
                    </h3>
                    <p className="text-lg text-secondary">
                    Backend-focused engineering program with hands-on experience building production-ready applications.
                    </p>
                </div>
                <ul className="list-disc list-inside text-secondary leading-relaxed space-y-2">
                    <li>Designed and built scalable RESTful APIs with Django REST Framework.</li>
                    <li>Implemented secure JWT authentication and role-based access control.</li>
                    <li>Optimized PostgreSQL database schemas for performance and reliability.</li>
                    <li>Integrated Redis and Celery for asynchronous tasks and background processing.</li>
                    <li>Containerized applications using Docker for consistent development and production environments.</li>
                </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
