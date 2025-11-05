
import React, { useState } from 'react';

interface NavLink {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
    navLinks: NavLink[];
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, scrollTo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
        scrollTo(ref);
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
            <div className="bg-slate-900/80 backdrop-blur-sm">
                <div className="container mx-auto flex justify-between items-center p-4 text-slate-200">
                    <a href="/" className="font-bold text-lg tracking-tight">G. BHUVANESHWARI</a>
                    <button onClick={() => setIsOpen(!isOpen)} className="z-50 space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-200 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-200 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm p-4">
                    <ul className="flex flex-col items-center gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => handleNavClick(link.ref)}
                                    className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
