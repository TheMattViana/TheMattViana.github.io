import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Bell, GraduationCap, Code, Users, FileText, PenTool, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'About Me', icon: User, href: '/about' },
    { label: 'News', icon: Bell, href: '/news' },
    { label: 'Academic Projects', icon: GraduationCap, href: '/academic' },
    { label: 'Vibecoding Projects', icon: Code, href: '/vibecoding' },
    { label: 'Collaborators', icon: Users, href: '/collaborators' },
    { label: 'CV', icon: FileText, href: '/cv' },
    { label: 'Writing Sample', icon: PenTool, href: '/writing_sample.pdf' },
    { label: 'Contact', icon: Mail, href: '/contact' },
];

const NavSystem: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Desktop Hamburger (Top Right) */}
            <div className="hidden md:block fixed top-8 right-8 z-50">
                <button onClick={toggleMenu} className="p-3 bg-charcoal/80 text-gold-antique border border-gold-antique rounded-full hover:bg-gold-antique hover:text-charcoal transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-charcoal/95 border-t border-gold-antique backdrop-blur-md z-40 flex justify-around items-center px-4">
                <Link to="/" className="flex flex-col items-center text-gold-antique/70 hover:text-gold-antique">
                    <Home size={20} />
                    <span className="text-[10px] uppercase tracking-widest mt-1">Home</span>
                </Link>
                <Link to="/cv" className="flex flex-col items-center text-gold-antique/70 hover:text-gold-antique">
                    <FileText size={20} />
                    <span className="text-[10px] uppercase tracking-widest mt-1">CV</span>
                </Link>
                <button onClick={toggleMenu} className="flex flex-col items-center text-gold-antique/70 hover:text-gold-antique">
                    <Menu size={20} />
                    <span className="text-[10px] uppercase tracking-widest mt-1">Menu</span>
                </button>
            </div>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-emerald-deep z-50 flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <div className="absolute top-8 right-8 z-50">
                            <button onClick={toggleMenu} className="p-2 text-gold-antique hover:rotate-90 transition-transform">
                                <X size={32} />
                            </button>
                        </div>

                        {/* Decoration Column (Desktop) */}
                        <div className="hidden md:flex w-1/3 bg-charcoal border-r border-gold-antique items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                            <div className="text-center p-8">
                                <h2 className="font-serif text-4xl text-gold-antique mb-4">Matt Viana</h2>
                                <p className="font-sans text-cream/60">Navigating the intersection of logic and beauty.</p>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="w-full md:w-2/3 h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-center">
                            <nav className="space-y-6">
                                {MENU_ITEMS.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="group flex items-center space-x-6 text-cream hover:text-gold-antique transition-colors block"
                                    >
                                        <div className="p-3 border border-gold-antique/30 rounded-full group-hover:border-gold-antique group-hover:bg-gold-antique/10 transition-all">
                                            <item.icon size={24} />
                                        </div>
                                        <motion.span
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.05 }}
                                            className="font-serif text-2xl md:text-3xl"
                                        >
                                            {item.label}
                                        </motion.span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Socials / Contact */}
                            <div className="mt-12 pt-12 border-t border-gold-antique/20 flex space-x-8">
                                <a href="https://github.com/themattviana" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-cream/70 hover:text-gold-antique">
                                    <Github size={20} />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com/in/mattviana/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-cream/70 hover:text-gold-antique">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavSystem;
