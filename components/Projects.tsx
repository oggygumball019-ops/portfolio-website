import React, { forwardRef } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
                <span className="font-bold group-hover:text-cyan-400 transition-colors">{project.title}</span>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.tags.map((tag, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">{tag}</div>
                    </li>
                ))}
            </ul>
        </div>
        <img alt={project.title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover" src={project.imageUrl} />
    </div>
);

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="projects" title="Projects">
            <div className="group/list">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-12 transition-transform duration-300 ease-in-out lg:group-hover:transform lg:group-hover:-translate-y-1">
                         <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </Section>
    );
});

Projects.displayName = 'Projects';
export default Projects;