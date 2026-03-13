import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="max-w-container flex flex-col items-center text-center gap-8">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-secondary">©{currentYear} Firaol Merga. All rights reserved.</p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
