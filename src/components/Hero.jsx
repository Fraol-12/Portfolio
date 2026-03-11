import React from 'react';

const Hero = () => {
    return (
        <section className="section-spacing pt-44 md:pt-56 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-dot-pattern opacity-40 -z-10"></div>

            <div className="max-w-container flex flex-col items-left text-left gap-12">
                <div className="flex flex-col items-left gap-8">
                    <div className="flex flex-col items-left gap-4">
                        <h1 className="text-primary">
                            Firaol Merga
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-medium">
                            Computer Science Student | Fullstack Developer
                        </p>
                        <p className="max-w-2xl text-secondary">
                            Addis Ababa, Ethiopia
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-left gap-4">
                        <a href="#work" className="btn-primary">
                            View Work
                        </a>
                        <a 
                        href="/public/Firaol_Merga_Resume.pdf"
                        download
                        className="btn-secondary"
                        >
                        Download Resume
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
