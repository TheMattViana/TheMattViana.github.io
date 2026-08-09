import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Bell, GraduationCap, Code, Users, FileText, PenTool, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import navMenuIcon from '../assets/nav_menu_icon.png';
import navSheet1 from '../assets/nav_sheet_1.png';
import navSheet2 from '../assets/nav_sheet_2.png';
import navSheet3 from '../assets/nav_sheet_3.png';
import googleScholarIcon from '../assets/google_scholar.png';

const MENU_ITEMS = [
    { label: 'Home', icon: Home, href: '/', sprite: 1, index: 0 },
    { label: 'About Me', icon: User, href: '/about', sprite: 1, index: 1 },
    { label: 'News', icon: Bell, href: '/news', sprite: 1, index: 2 },
    { label: 'Academic Projects', icon: GraduationCap, href: '/academic', sprite: 1, index: 3 },
    { label: 'Vibecoding Projects', icon: Code, href: '/vibecoding', sprite: 2, index: 0 },
    { label: 'Collaborators', icon: Users, href: '/collaborators', sprite: 2, index: 1 },
    { label: 'CV', icon: FileText, href: '/cv', sprite: 2, index: 2 },
    { label: 'Writing Sample', icon: PenTool, href: '/writing_sample.pdf', sprite: 2, index: 3 },
    { label: 'Contact', icon: Mail, href: '/contact', sprite: 3, index: 0 },
];

// Each nav sheet is a 2x2 sprite grid of four icons; index selects the quadrant.
const getIconStyle = (sprite: number, index: number) => {
    const sheet = sprite === 1 ? navSheet1 : sprite === 2 ? navSheet2 : navSheet3;
    return {
        backgroundImage: `url(${sheet})`,
        backgroundSize: '200%', // 2 cols
        backgroundPosition: `${(index % 2) * 100}% ${Math.floor(index / 2) * 100}%`
    };
};

const NavSystem: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Desktop Hamburger (Top Right) */}
            <div className="hidden md:block fixed top-8 right-[20%] mr-8 z-50">
                <button
                    onClick={toggleMenu}
                    className="group"
                >
                    <div className="w-16 h-12 relative transition-transform group-hover:scale-105">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gold-antique/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src={navMenuIcon}
                            alt="Menu"
                            className="w-full h-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
                        />
                    </div>
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
                    <div className="w-8 h-6 relative">
                        <img src={navMenuIcon} alt="Menu" className="w-full h-full object-contain" />
                    </div>
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
                                        <div className="p-3 border border-gold-antique/30 rounded-full group-hover:border-gold-antique group-hover:bg-gold-antique/10 transition-all w-16 h-16 flex items-center justify-center overflow-hidden relative">
                                            {/* Custom Sprite Icon */}
                                            <div
                                                className="w-full h-full absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                                                style={getIconStyle(item.sprite, item.index)}
                                            ></div>
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
                                    <div className="w-8 h-8 rounded-full border border-gold-antique/30 overflow-hidden relative">
                                        <div className="w-full h-full absolute inset-0" style={getIconStyle(3, 1)}></div>
                                    </div>
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/matt-viana/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-cream/70 hover:text-gold-antique">
                                    <div className="w-8 h-8 rounded-full border border-gold-antique/30 overflow-hidden relative">
                                        <div className="w-full h-full absolute inset-0" style={{ ...getIconStyle(3, 2), backgroundPosition: '50% 100%' }}></div>
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://scholar.google.com/citations?user=V5sYiqIAAAAJ&hl=en" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-cream/70 hover:text-gold-antique">
                                    <div className="w-8 h-8 rounded-full border border-gold-antique/30 overflow-hidden relative flex items-center justify-center">
                                        <div className="w-full h-full absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${googleScholarIcon})` }}></div>
                                    </div>
                                    <span>Scholar</span>
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
