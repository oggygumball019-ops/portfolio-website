import React from 'react';
import Section from './Section';
import { ACHIEVEMENTS } from '../constants';
import type { Achievement } from '../types';

const AchievementCard: React.FC<{ item: Achievement }> = ({ item }) => (
    <div className="group relative flex items-center gap-4 p-4 rounded-lg transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-60 lg:hover:bg-slate-800/50 lg:hover:transform lg:hover:-translate-y-1">
        <div className="flex-shrink-0">
            {item.icon}
        </div>
        <div>
            <h3 className="font-medium text-slate-200 group-hover:text-cyan-400">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.issuer}</p>
        </div>
    </div>
);

const Achievements: React.FC = () => {
    return (
        <Section id="achievements" title="Achievements">
            <div className="group/list space-y-4">
                {ACHIEVEMENTS.map((item, index) => (
                    <AchievementCard key={index} item={item} />
                ))}
            </div>
        </Section>
    );
};

export default Achievements;