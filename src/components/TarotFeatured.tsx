import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { allSnippets, type Snippet } from '../data/tarotData';

const getRandomSelection = (count: number) => {
    const shuffled = [...allSnippets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const TarotCard = ({ snippet, isOpen, isMobile }: { snippet: Snippet, isOpen: boolean, isMobile: boolean }) => {
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
            className={`relative perspective-1000 cursor-pointer group ${isMobile ? 'min-w-[75vw] h-[60vh] snap-center shrink-0' : 'w-full h-full'}`}
            onClick={handleMobileClick}
        >
            <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }} // BackOut ease
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front (Content) */}
                <div
                    className="absolute inset-0 bg-cream border-[3px] border-double border-gold-antique p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden rounded-sm"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    {/* Inner Border Decoration */}
                    <div className="absolute inset-2 border border-emerald-deep/20 pointer-events-none"></div>

                    <h3 className="font-serif text-emerald-deep text-2xl font-bold mb-4 z-10">{snippet.title}</h3>
                    <p className="font-sans text-charcoal text-opacity-80 leading-relaxed z-10 text-sm md:text-base">{snippet.content}</p>

                    <a href={snippet.linkUrl} className="mt-6 font-serif text-gold-antique italic hover:underline z-10">
                        Read Entry
                    </a>
                </div>

                {/* Back (Pattern) */}
                <div
                    className={`absolute inset-0 border-[3px] border-gold-antique shadow-2xl flex items-center justify-center rounded-sm ${snippet.backPatternVariant === 'emerald' ? 'bg-emerald-deep' : 'bg-[#1a1a1a]'
                        }`}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Decorative Pattern Overlay (CSS only for now) */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-antique to-transparent pointer-events-none"></div>

                    <div className="text-6xl text-gold-antique opacity-80 filter drop-shadow-lg">
                        {snippet.backPatternVariant === 'emerald' ? '🜃' : '🜂'}
                        {/* Alchemical symbols: Earth, Fire, etc. */}
                    </div>
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

    // Initialize
    useEffect(() => {
        setCurrentSnippets(getRandomSelection(6));
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Timer Logic (Desktop Only)
    useEffect(() => {
        if (isMobile) {
            setIsOpen(false); // Ensure logic doesn't interfere
            return;
        }

        let paramsTimeout: number;

        if (isOpen) {
            // If open, close after 15s unless hovered
            if (!isHovered) {
                paramsTimeout = window.setTimeout(() => {
                    setIsOpen(false);
                }, 15000);
            }
        } else {
            // If closed, wait 3s, shuffle, then open
            paramsTimeout = window.setTimeout(() => {
                // Shuffle
                const newSelection = getRandomSelection(6);
                setCurrentSnippets(newSelection);

                // Open after short delay for shuffle swap visual
                setTimeout(() => setIsOpen(true), 100);
            }, 3000);
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
            <div
                className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl h-[700px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {currentSnippets.map((snippet) => (
                    // Using snippet ID as key might cause re-mount issues if IDs duplicate in random selection. 
                    // But getRandomSelection (if simple slice) might return clones? 
                    // Actually getRandomSelection sorts reference array.
                    // To be safe, use index as key since we are swapping content in place mainly.
                    <div key={snippet.id} className="w-full h-full">
                        <TarotCard snippet={snippet} isOpen={isOpen} isMobile={false} />
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 pt-4 no-scrollbar">
                {currentSnippets.map((snippet) => (
                    <TarotCard key={`mobile-${snippet.id}`} snippet={snippet} isOpen={false} isMobile={true} />
                ))}
            </div>

        </section>
    );
};

export default TarotFeatured;
