import React, { forwardRef } from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.period}>{item.period}</header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
                <div>
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                            {item.role} · <span className="inline-block">{item.company}</span>
                        </span>
                    </a>
                </div>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-400">{item.description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {item.skills.map((skill, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">{skill}</div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="experience" title="Experience">
            <div className="group/list">
                {EXPERIENCE.map((item, index) => (
                    <div key={index} className="mb-12 transition-transform duration-300 ease-in-out lg:group-hover:transform lg:group-hover:-translate-y-1">
                         <ExperienceCard item={item} />
                    </div>
                ))}
            </div>
        </Section>
    );
});

Experience.displayName = 'Experience';
export default Experience;