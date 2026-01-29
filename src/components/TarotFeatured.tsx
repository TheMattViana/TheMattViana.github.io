import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { allSnippets, type Snippet } from '../data/tarotData';
import tarotEmerald from '../assets/tarot_card_back_emerald.png';
import tarotCream from '../assets/tarot_card_back_cream.png';

const getRandomSelection = (count: number) => {
    const shuffled = [...allSnippets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const TarotCard = ({ snippet, isOpen, isMobile, backVariant }: { snippet: Snippet, isOpen: boolean, isMobile: boolean, backVariant: 'emerald' | 'cream' }) => {
    const [localFlipped, setLocalFlipped] = useState(false);

    // On mobile, flipping is local. On desktop, it's controlled by parent.
    const isFlipped = isMobile ? localFlipped : isOpen;

    const handleMobileClick = () => {
        if (isMobile) {
            setLocalFlipped(!localFlipped);
        }
    };

    return (
        <div
            className={`relative perspective-1000 cursor-pointer group ${isMobile ? 'min-w-[75vw] aspect-[3/5] snap-center shrink-0' : 'w-full aspect-[3/5]'}`}
            onClick={handleMobileClick}
        >
            <motion.div
                className="w-full h-full relative p-[2px]" /* Padding for glow container */
                initial={false}
                animate={{ rotateY: isFlipped ? 540 : 0 }}
                transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front (Content) */}
                <div
                    className="absolute inset-[2px] bg-cream border-[6px] border-double border-gold-antique p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden rounded-sm"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div className="absolute inset-2 border border-emerald-deep/20 pointer-events-none"></div>

                    <h3 className="font-serif text-emerald-deep text-lg md:text-xl font-bold mb-4 z-10">{snippet.title}</h3>
                    <p className="font-sans text-charcoal text-opacity-80 leading-relaxed z-10 text-xs md:text-sm line-clamp-6">{snippet.content}</p>

                    <a href={snippet.linkUrl} className="mt-6 font-serif text-gold-antique italic hover:underline z-10 text-sm">
                        Read Entry
                    </a>
                </div>

                {/* Back (Pattern Asset) */}
                <div
                    className="absolute inset-[2px] shadow-2xl rounded-sm overflow-hidden border-4 border-gold-antique"
                    style={{
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 0 15px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(0,0,0,0.5)' // Backlit gold glow
                    }}
                >
                    <img
                        src={backVariant === 'emerald' ? tarotEmerald : tarotCream}
                        alt="Tarot Back"
                        className="w-full h-full object-cover transform scale-105" // Slightly scaled up to ensure no white edges
                    />
                    {/* Gloss Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-antique/10 to-transparent opacity-50 pointer-events-none"></div>
                </div>
            </motion.div>
        </div>
    );
};

const TarotFeatured: React.FC = () => {
    const [currentSnippets, setCurrentSnippets] = useState<Snippet[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [backVariant, setBackVariant] = useState<'emerald' | 'cream'>('emerald');

    // Initialize
    useEffect(() => {
        setCurrentSnippets(getRandomSelection(6)); // Start with 6 for grid
        // Prompt asked for 3x5y size for containers, usually implies aspect ratio.
        // If we want a grid of cards, let's keep it responsive.
        // Actually prompt says "3x 5y ratio" for ASSETS.
        // "Add them to the tarot cards on the home page."

        // Let's stick to 3 cards for now if they are large 3:5, or 6 if grid.
        // Grid was 3 cols x 2 rows previously.
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Swap back variant when cards open (while front is visible)
    useEffect(() => {
        if (isOpen && !isMobile) {
            const t = setTimeout(() => {
                setBackVariant(prev => prev === 'emerald' ? 'cream' : 'emerald');
            }, 800); // Wait for open animation to finish
            return () => clearTimeout(t);
        }
    }, [isOpen, isMobile]);

    // Timer Logic (Desktop Only)
    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
            return;
        }

        let paramsTimeout: number;

        if (isOpen) {
            if (!isHovered) {
                paramsTimeout = window.setTimeout(() => {
                    setIsOpen(false);
                }, 15000);
            }
        } else {
            paramsTimeout = window.setTimeout(() => {
                const newSelection = getRandomSelection(6); // Revert to 6 for grid
                setCurrentSnippets(newSelection);
                setIsOpen(true);
            }, 4000);
        }

        return () => clearTimeout(paramsTimeout);
    }, [isOpen, isMobile, isHovered]);

    return (
        <section className="py-24 px-6 md:px-16 bg-charcoal min-h-screen flex flex-col items-center justify-center relative border-t-4 border-gold-antique/20">

            <div className="mb-12 text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-gold-antique mb-2">The Archive</h2>
                <p className="font-sans text-cream text-opacity-60 text-sm">Randomized selection from the database</p>
            </div>

            {/* Desktop Grid: 3 columns x 2 rows */}
            {/* Height auto to respect aspect ratio */}
            <div
                className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {currentSnippets.map((snippet) => (
                    <div key={snippet.id} className="w-full">
                        <TarotCard snippet={snippet} isOpen={isOpen} isMobile={false} backVariant={backVariant} />
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 pt-4 no-scrollbar">
                {currentSnippets.map((snippet) => (
                    <TarotCard key={`mobile-${snippet.id}`} snippet={snippet} isOpen={false} isMobile={true} backVariant={backVariant} />
                ))}
            </div>

        </section>
    );
};

export default TarotFeatured;
