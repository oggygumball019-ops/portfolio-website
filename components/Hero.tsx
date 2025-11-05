import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavLink {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
    id: string;
}

interface HeroProps {
    navLinks: NavLink[];
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    activeSection: string;
}

const Hero: React.FC<HeroProps> = ({ navLinks, scrollTo, activeSection }) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6">
                <img 
                    src={PERSONAL_INFO.imageUrl} 
                    alt="Profile picture of G. Bhuvaneshwari" 
                    className="h-28 w-28 rounded-full object-cover border-2 border-slate-600 mb-4 sm:mb-0" 
                />
                <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        <a href="/">{PERSONAL_INFO.name}</a>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        {PERSONAL_INFO.title}
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal text-slate-400">
                        I build and explore the frontiers of AI and Machine Learning.
                    </p>
                </div>
            </div>
            
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    {navLinks.map((link) => (
                         <li key={link.id}>
                            <a 
                                className="group flex items-center py-3" 
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.ref);
                                }}
                            >
                                <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === link.id ? 'w-16 bg-slate-200' : ''}`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === link.id ? 'text-slate-200' : ''}`}>
                                    {link.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                {PERSONAL_INFO.socials.map(social => (
                    <li key={social.name} className="mr-5 text-xs">
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label={`${social.name} (opens in a new tab)`} 
                            className="block text-slate-400 hover:text-slate-200 transition-colors"
                        >
                            <span className="sr-only">{social.name}</span>
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;