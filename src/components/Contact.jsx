import React from 'react';

const Contact = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Fraol-12',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/fraol-merga-dev404',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            )
        },
        {
            name: 'Telegram',
            href: 'https://t.me/FraolMerga',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://x.com/FraolMerga',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46L20 4" /></svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            )
        },

        {
            name: 'Email',
            href: 'mailto:fraolm41@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            )
        }
    ];

    return (
        <section id="contact" className="section-spacing border-t border-border">
            <div className="max-w-container flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-primary">Contact Me</h2>
                    <p className="max-w-2xl text-secondary">
                        Open to collaborations, projects, and new opportunities.
                    </p>
                </div>


                <div className="flex flex-wrap justify-center gap-8 md:gap-6 py-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.href.startsWith('mailto') ? undefined : "_blank"}
                            rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                            aria-label={link.name}
                            className="text-secondary hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
