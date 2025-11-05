import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}