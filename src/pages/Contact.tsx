import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Send, Copy, Check, GraduationCap } from 'lucide-react';

import artNouveauPortrait from '../assets/matt_portrait_nouveau.png';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [copied, setCopied] = useState(false);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:mmv5513@psu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('mmv5513@psu.edu');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Layout variant="cream">
            <div className="min-h-screen pt-32 pb-20 px-4 md:px-20 flex flex-col items-center">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Portrait Section (Left) */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-sm aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-gold-antique shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-charcoal">
                            {/* Backlight Glow */}
                            <div className="absolute -inset-10 bg-gold-antique/20 blur-3xl rounded-full -z-10"></div>
                            <img src={artNouveauPortrait} alt="Art Nouveau Portrait" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 border border-gold-antique/50 m-2 rounded pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Contact Form Section (Right) */}
                    <div className="w-full">
                        <header className="mb-8 text-left">
                            <h1 className="font-serif text-4xl md:text-5xl text-gold-antique mb-4">Contact Me</h1>
                            <p className="font-sans text-cream/60">I'm always open to discussing new projects, research collaborations, or creative coding ideas.</p>
                        </header>

                        <div className="bg-charcoal border border-gold-antique/30 p-8 md:p-12 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-antique/20 to-transparent"></div>

                            <div className="mb-8 flex items-center justify-between bg-black/20 p-4 rounded border border-white/5">
                                <div className="flex items-center space-x-3 text-cream/80">
                                    <Mail size={20} className="text-gold-antique" />
                                    <span className="font-mono text-sm">mmv5513@psu.edu</span>
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="text-xs flex items-center space-x-1 text-gold-antique hover:text-cream transition-colors"
                                >
                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                    <span>{copied ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>

                            <a href="https://scholar.google.com/citations?user=V5sYiqIAAAAJ&hl=en" target="_blank" rel="noreferrer" className="mb-8 flex items-center space-x-3 text-cream/80 hover:text-gold-antique transition-colors p-4 border border-white/5 rounded bg-black/20">
                                <GraduationCap size={20} className="text-gold-antique" />
                                <span className="font-mono text-sm">Google Scholar Profile</span>
                            </a>

                            <form onSubmit={handleSend} className="space-y-6">
                                <div>
                                    <label className="block text-gold-antique text-sm font-serif mb-2">Subject</label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-charcoal border border-gold-antique/30 rounded p-3 text-cream focus:border-gold-antique focus:outline-none transition-colors"
                                        placeholder="Project Inquiry..."
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gold-antique text-sm font-serif mb-2">Message</label>
                                    <textarea
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                        className="w-full bg-charcoal border border-gold-antique/30 rounded p-3 text-cream focus:border-gold-antique focus:outline-none transition-colors min-h-[150px]"
                                        placeholder="Write your message here..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold-antique text-charcoal font-serif font-bold py-4 rounded hover:bg-cream transition-colors flex items-center justify-center space-x-2 group"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
