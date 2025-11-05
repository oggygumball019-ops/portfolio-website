
import React, { forwardRef } from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section ref={ref} id="contact" title="Contact">
            <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">Get In Touch</h2>
            <p className="mt-4 max-w-lg leading-normal text-slate-400">
                I'm currently seeking internship opportunities and am open to new connections. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
            </p>
            <div className="mt-8">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
                    Say Hello
                </a>
            </div>
        </Section>
    );
});

Contact.displayName = 'Contact';
export default Contact;
