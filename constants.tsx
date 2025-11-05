import React from 'react';
import type { SkillCategory, Project, EducationItem, Achievement, ExperienceItem } from './types';

export const PERSONAL_INFO = {
    name: 'G. Bhuvaneshwari',
    title: 'AI & ML Enthusiast',
    email: 'rescuersrainbow@gmail.com',
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH3AfoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1VXV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/y7aKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK-..',
    socials: [
        { 
            name: 'GitHub', 
            url: 'https://github.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.694 18.256c.26.048.395-.11.395-.245l-.001-2.924c-2.133.463-2.585-1.03-2.585-1.03-.236-.6-.576-.76-.576-.76-.47-.322.035-.315.035-.315.52.037.793.533.793.533.462.793 1.213.564 1.51.433.047-.337.182-.564.333-.693-1.15-.13-2.358-.576-2.358-2.563 0-.566.202-1.03.534-1.393-.053-.13-.232-.658.05-1.373 0 0 .435-.14 1.425.532.413-.115.855-.172 1.296-.174.44.002.883.06 1.296.174.99-.672 1.425-.532 1.425-.532.282.715.103 1.243.05 1.373.333.363.533.827.533 1.393 0 1.987-1.21 2.433-2.363 2.563.188.162.353.483.353.973l-.002 2.924c0 .135.135.293.395.245C18.494 19.343 21.75 16.012 21.75 12c0-5.385-4.365-9.75-9.75-9.75-5.385 0-9.75 4.365-9.75 9.75 0 4.012 3.256 7.343 7.556 8.506z" clipRule="evenodd" />
                </svg>
            )
        },
        { 
            name: 'LinkedIn', 
            url: 'https://linkedin.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.42.61-1.62 1.21-.07.21-.08.5-.08.79V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.03 3.1 3.2V19z" />
                </svg>
            )
        },
    ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 9l-3 10M10.1 5.1L5.3 10h13.4l-4.8-4.9a.9.9 0 00-1.2 0l-2.4 2.4z"/><path d="M10.5 15l3-10"/></svg> },
            { name: 'C', icon: <span className="text-3xl font-bold">C</span> },
            { name: 'C++', icon: <span className="text-3xl font-bold">C++</span> },
            { name: 'Java', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 6a6 6 0 100 12 6 6 0 000-12z"/><path d="M15 9s-2 1-4 1-4-1-4-1"/><path d="M18 14s-2-2-6-2-6 2-6 2"/></svg> },
            { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 10.5h-5a1 1 0 00-1 1v2a1 1 0 001 1h2.5"/><path d="M15 10.5V15"/><path d="M10 15V9.5a1 1 0 011-1h1.5"/></svg> },
            { name: 'HTML/CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 00-8.49 0"></path><path d="M19.07 4.93a10 10 0 00-14.14 0"></path><path d="M12 2v2m0 16v2m8-10h-2M4 12H2m12.46-5.54l-1.41-1.41M5.95 18.05l-1.41-1.41m13.46.01l-1.41 1.41M5.95 5.95l-1.41 1.41"></path></svg> },
            { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5c3-3 6-3 9 0s6 3 9 0"/><path d="M4.5 16.5c3-3 6-3 9 0s6 3 9 0"/></svg> },
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 6l-12 12"/><path d="M6 6v12"/></svg> },
            { name: 'VS Code', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10.5 8 12l2 1.5V15h4v-1.5l2-1.5-2-1.5V9h-4v1.5z"/><path d="M4 6.8a2 2 0 012-1.8h12a2 2 0 012 1.8v10.4a2 2 0 01-2 1.8H6a2 2 0 01-2-1.8V6.8z"/></svg> },
        ]
    },
    {
        title: 'Core Concepts',
        skills: [
            { name: 'Data Structures', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM6 22c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><path d="M14.5 14.5L10 10l4.5-4.5"/><path d="M6 10V2h12v8"/></svg> },
            { name: 'OOP', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 14a4 4 0 100-8 4 4 0 000 8z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M5 12H3"/><path d="M21 12h-2"/></svg> },
            { name: 'Algorithms', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2"/><path d="M12 19v2"/><path d="M21.17 8.83l-1.42 1.42"/><path d="M4.25 15.75l-1.42 1.42"/><path d="M21.17 15.17l-1.42-1.42"/><path d="M4.25 8.25l-1.42-1.42"/><path d="M19 12h2"/><path d="M3 12h2"/><path d="M16.24 4.26l1.42-1.42"/><path d="M6.34 19.66l1.42-1.42"/><path d="M16.24 19.74l1.42 1.42"/><path d="M6.34 4.34l1.42 1.42"/><circle cx="12" cy="12" r="1"/></svg> },
        ]
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Team Cooperation', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
            { name: 'Good Listener', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.82 7.21a4.5 4.5 0 017.96 0"/><path d="M11 19a2.5 2.5 0 01-4 0"/><path d="M16 3a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1z"/><path d="M11.5 12.5c0-2.5 2-5 5.5-5a5 5 0 014 8V18"/><path d="M13 18a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2z"/></svg> },
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'License Plate Detection System',
        description: 'An AI-powered system to automatically detect and recognize vehicle license plates from images. This project utilizes computer vision for object detection and OCR to extract plate information.',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'OCR'],
        imageUrl: 'https://picsum.photos/seed/licenseplate/600/400'
    },
    {
        title: 'Smart Travel Planner',
        description: 'A web-based application built with Java to help users organize their travel plans. The application allows for creating detailed itineraries, exploring destinations, and managing travel budgets.',
        tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'Web App'],
        imageUrl: 'https://picsum.photos/seed/travel/600/400'
    },
    {
        title: 'Personal Portfolio Website',
        description: 'This very website, designed and built to showcase my skills, projects, and journey in the world of AI and ML. It is a fully responsive single-page application built with modern web technologies.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: 'https://picsum.photos/seed/portfolio/600/400'
    },
    {
        title: 'Obstacle Avoidance Robot Car',
        description: 'A simple autonomous robot car designed to navigate its environment by detecting and avoiding obstacles in its path using ultrasonic sensors.',
        tags: ['Arduino', 'C++', 'Electronics', 'Robotics'],
        imageUrl: 'https://picsum.photos/seed/robotcar/600/400'
    }
];

export const EDUCATION_HISTORY: EducationItem[] = [
    {
        degree: 'B.E. Computer Science – AI & ML',
        institution: 'SRM Easwari Engineering College, Chennai',
        year: '2024 — Present',
        details: 'Currently in the first year, building a strong foundation in computer science principles with a focus on artificial intelligence and machine learning.'
    },
    {
        degree: 'Higher Secondary Education (XIIth Std)',
        institution: 'New Prince Matriculation School, Chennai',
        year: '2024',
        details: 'Majored in Physics, Chemistry, Maths, and Computer Science.'
    }
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: 'Python Essentials 1',
        issuer: 'Cisco Networking Academy',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
    },
    {
        title: 'Vision AI Coding Participant',
        issuer: 'Vision AI',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L9 5H5a2 2 0 00-2 2v2l-1 3v2h20v-2l-1-3V7a2 2 0 00-2-2h-4l-3-3zM5 13h14"/><path d="M12 13v9"/><path d="M8 22h8"/></svg>
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'Data Science Intern',
        company: 'Innovate AI',
        period: 'Summer 2024',
        description: 'Gained hands-on experience in the data science lifecycle, from data collection and cleaning to model building and evaluation. Contributed to a project focused on analyzing user behavior data to identify key engagement metrics.',
        skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    }
];