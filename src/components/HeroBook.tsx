import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { missionStatement } from '../data/heroContent';
import frame from '../assets/frame.png';
import portrait from '../assets/portrait.png';
import { Feather } from 'lucide-react';

interface HeroBookProps {
    staticText?: string;
    disableTyping?: boolean;
}

const CustomCursor = () => (
    <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="inline-block ml-1 align-text-bottom text-gold-antique"
    >
        <Feather size={24} className="rotate-0" fill="currentColor" />
    </motion.span>
);

const HeroBook: React.FC<HeroBookProps> = ({ staticText, disableTyping = false }) => {
    const targetText = staticText || missionStatement;
    const [displayText, setDisplayText] = useState(disableTyping ? targetText : '');

    useEffect(() => {
        if (disableTyping) {
            setDisplayText(targetText);
            return;
        }

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= targetText.length) {
                setDisplayText(targetText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [disableTyping, targetText]);

    return (
        <section className="min-h-screen md:min-h-[80vh] flex flex-col md:flex-row bg-emerald-deep relative overflow-hidden">
            <div className="w-full md:w-[60%] p-8 md:p-20 flex flex-col justify-center relative z-10">
                <div className="font-serif text-2xl md:text-4xl leading-relaxed text-cream tracking-wide">
                    <span>{displayText}</span>
                    {!disableTyping && <CustomCursor />}
                </div>
            </div>

            <div className="w-full md:w-[40%] flex items-center justify-center p-8 bg-gradient-to-b from-emerald-deep to-charcoal md:bg-none relative">
                <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                    <div className="absolute -inset-4 bg-gold-antique/30 blur-3xl rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute inset-[10%] w-[80%] h-[80%] overflow-hidden rounded-lg">
                        <img
                            src={portrait}
                            alt="The Alchemist"
                            className="w-full h-full object-cover sepia-[0.3] contrast-125"
                        />
                    </div>
                    <img
                        src={frame}
                        alt="Art Nouveau Frame"
                        className="absolute inset-0 w-full h-full object-contain mix-blend-screen drop-shadow-2xl z-20 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroBook;
