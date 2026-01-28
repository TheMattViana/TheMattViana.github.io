import HeroBook from '../components/HeroBook';
import TarotFeatured from '../components/TarotFeatured';
import { Github, Linkedin, Mail } from 'lucide-react';
import tile from '../assets/background_tile_neutral_7.png';

const Footer = () => (
    <footer className="bg-charcoal text-cream/50 py-12 border-t border-gold-antique/10 text-center font-sans">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gold-antique transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-gold-antique transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-gold-antique transition-colors"><Mail size={20} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Matt Viana. All rights reserved.</p>
    </footer>
);

const Home = () => {
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
                {/* Overlay to dim the tile if needed */}
                <div className="absolute inset-0 bg-charcoal/30"></div>

                {/* Right border for gutter */}
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gold-antique/20"></div>
            </div>

            {/* Center Content (3/5) */}
            <main className="w-full md:w-3/5 relative bg-charcoal z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <HeroBook />
                <TarotFeatured />
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

export default Home;
