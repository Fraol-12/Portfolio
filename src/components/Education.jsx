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
                    Completed the Backend Engineering specialization at ALX Africa, an intensive program focused on building real-world backend systems and scalable APIs. <br />
                    During the program, I gained hands-on experience building real-world applications and backend services while applying industry best practices in API design, database architecture, and deployment.
                    </p>
                </div>
                <ul className="list-disc list-inside text-secondary leading-relaxed space-y-2">
                    <li>Designed and built scalable RESTful APIs using Django REST Framework.</li>
                    <li>Implemented secure authentication systems with JWT and role-based access control.</li>
                    <li>Designed and optimized PostgreSQL database schemas.</li>
                    <li>Implemented asynchronous background processing using Redis and Celery.</li>
                    <li>Containerized applications with Docker for consistent development and deployment environments.</li>
                </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
