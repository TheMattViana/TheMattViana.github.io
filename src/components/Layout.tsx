import React from 'react';
import tileEmerald from '../assets/neuronouveau_tile.png';
import tileCream from '../assets/neuronouveau_tile_cream.png';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="bg-charcoal text-cream/50 py-12 border-t border-gold-antique/10 text-center font-sans">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/themattviana" className="hover:text-gold-antique transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/mattviana/" className="hover:text-gold-antique transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hello@mattviana.com" className="hover:text-gold-antique transition-colors"><Mail size={20} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Matt Viana. All rights reserved.</p>
    </footer>
);

interface LayoutProps {
    children: React.ReactNode;
    variant?: 'emerald' | 'cream';
}

const Layout: React.FC<LayoutProps> = ({ children, variant = 'cream' }) => { // Default to cream as requested for Home
    const tile = variant === 'cream' ? tileCream : tileEmerald;

    return (
        <div className="flex min-h-screen bg-charcoal">
            {/* Left Gutter (1/5) */}
            <div
                className="hidden md:block w-1/5 relative z-0"
                style={{
                    backgroundImage: `url(${tile})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px'
                }}
            >
                <div className="absolute inset-0 bg-charcoal/30"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gold-antique/20"></div>
            </div>

            {/* Center Content (3/5) */}
            <main className="w-full md:w-3/5 relative bg-charcoal z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col min-h-screen">
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </main>

            {/* Right Gutter (1/5) */}
            <div
                className="hidden md:block w-1/5 relative z-0"
                style={{
                    backgroundImage: `url(${tile})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px'
                }}
            >
                <div className="absolute inset-0 bg-charcoal/30"></div>
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gold-antique/20"></div>
            </div>
        </div>
    );
};

export default Layout;
