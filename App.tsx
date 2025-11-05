import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState('about');

    const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'education', ref: educationRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef },
    ];

    const navLinks = [
        { name: 'About', ref: aboutRef, id: 'about' },
        { name: 'Experience', ref: experienceRef, id: 'experience' },
        { name: 'Education', ref: educationRef, id: 'education' },
        { name: 'Skills', ref: skillsRef, id: 'skills' },
        { name: 'Projects', ref: projectsRef, id: 'projects' },
        { name: 'Contact', ref: contactRef, id: 'contact' },
    ];
    
    // Cursor Spotlight Effect
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            const { clientX, clientY } = ev;
            document.documentElement.style.setProperty('--x', `${clientX}px`);
            document.documentElement.style.setProperty('--y', `${clientY}px`);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    // Active section highlighting
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach(({ ref }) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);


    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-cyan-300 selection:text-cyan-900">
            <div 
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                style={{
                    background: 'radial-gradient(600px at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 80%)'
                }}
            />
            <Header navLinks={navLinks} scrollTo={scrollTo} />
            <main className="container mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <Hero 
                            navLinks={navLinks.filter(l => l.id !== 'contact')} 
                            scrollTo={scrollTo} 
                            activeSection={activeSection}
                        />
                    </header>
                    <div className="pt-24 lg:w-1/2 lg:py-24">
                        <About ref={aboutRef} />
                        <Experience ref={experienceRef} />
                        <Education ref={educationRef} />
                        <Skills ref={skillsRef} />
                        <Projects ref={projectsRef} />
                        <Achievements />
                        <Contact ref={contactRef} />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;