import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { missionStatement } from '../data/heroContent';
import portrait from '../assets/matt_portrait_nouveau - January 28, 2026 at 18.16.07.png';
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
        }, 15); // Faster typing for longer text

        return () => clearInterval(interval);
    }, [disableTyping, targetText]);

    return (
        <section className="min-h-screen md:min-h-[80vh] flex flex-col md:flex-row bg-emerald-deep relative overflow-hidden">
            <div className="w-full md:w-[60%] p-8 md:p-20 flex flex-col justify-center relative z-10">
                <div className="font-serif text-lg md:text-xl leading-relaxed text-cream tracking-wide text-justify">
                    <span>{displayText}</span>
                    {!disableTyping && <CustomCursor />}
                </div>
            </div>

            <div className="w-full md:w-[40%] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-emerald-deep to-charcoal md:bg-none relative">
                <div className="relative w-full max-w-[400px] aspect-square group">
                    {/* Backlight */}
                    <div className="absolute -inset-8 bg-gold-antique/40 blur-3xl rounded-full opacity-70 animate-pulse"></div>

                    {/* Image Container with Border and Rounding */}
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold-antique shadow-2xl bg-charcoal">
                        <img
                            src={portrait}
                            alt="Matt Viana"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Caption / Subtitle */}
                <div className="mt-8 text-center max-w-sm">
                    <p className="font-serif text-gold-antique text-lg leading-tight mb-2">PhD Student in Informatics at Penn State</p>
                    <div className="h-px w-16 bg-gold-antique/30 mx-auto my-3"></div>
                    <p className="font-sans text-cream/70 text-sm leading-relaxed">
                        Data Scientist and AI researcher, seeking to leverage and understand deep learning for impactful solutions
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroBook;
