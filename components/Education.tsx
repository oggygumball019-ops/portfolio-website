import React, { forwardRef } from 'react';
import Section from './Section';
import { EDUCATION_HISTORY } from '../constants';
import type { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.year}>{item.year}</header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
                <div>
                    <span className="font-bold">{item.degree}</span>
                    <span className="text-slate-400"> · {item.institution}</span>
                </div>
            </h3>
            {item.details && <p className="mt-2 text-sm leading-normal text-slate-400">{item.details}</p>}
        </div>
    </div>
);

const Education = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="education" title="Education">
            <div className="group/list">
                {EDUCATION_HISTORY.map((item, index) => (
                    <div key={index} className="mb-8 transition-transform duration-300 ease-in-out lg:group-hover:transform lg:group-hover:-translate-y-1">
                        <EducationCard item={item} />
                    </div>
                ))}
            </div>
        </Section>
    );
});

Education.displayName = 'Education';
export default Education;