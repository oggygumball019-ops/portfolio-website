
import React, { forwardRef } from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="skills" title="Skills">
            {SKILL_CATEGORIES.map((category, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-300 mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-4">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-800/50 w-32 h-32 text-center transition-transform hover:scale-105 hover:bg-slate-800">
                                <div className="text-cyan-400 mb-2">
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Section>
    );
});

Skills.displayName = 'Skills';
export default Skills;
