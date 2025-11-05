import React, { forwardRef } from 'react';
import Section from './Section';

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="about" title="About">
            <p className="mb-4">
                As a passionate second-year Computer Science student specializing in AI and Machine Learning, I am driven by a curiosity to understand and build intelligent systems. I am currently honing my skills in foundational programming languages and core concepts like data structures and algorithms.
            </p>
            <p className="mb-4">
                My journey began with a strong academic background in STEM, which sparked my interest in software development. Recently, I completed a data science internship where I gained valuable hands-on experience with the entire data lifecycle. Now, at SRM Easwari Engineering College, I am diving deep into the world of AI, eager to apply my learning to real-world challenges.
            </p>
            <p>
                I am a collaborative team player and a keen listener, always ready for the next challenge and actively seeking opportunities to contribute to meaningful projects and learn from experienced professionals.
            </p>
        </Section>
    );
});

About.displayName = 'About';
export default About;