import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 text-center text-xs text-slate-500">
            <ul className="mx-auto mb-4 flex justify-center items-center" aria-label="Social media">
                {PERSONAL_INFO.socials.map(social => (
                    <li key={social.name} className="mx-3 text-xs">
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label={`${social.name} (opens in a new tab)`} 
                            className="block text-slate-400 hover:text-slate-200 transition-colors"
                        >
                            <span className="sr-only">{social.name}</span>
                            {React.cloneElement(social.icon, { className: 'h-8 w-8' })}
                        </a>
                    </li>
                ))}
            </ul>
            <p>
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="mt-1">
                Built with React & Tailwind CSS. Design inspired by modern portfolio trends.
            </p>
        </footer>
    );
};

export default Footer;