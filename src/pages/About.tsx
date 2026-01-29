import HeroBook from '../components/HeroBook';
import Layout from '../components/Layout';

const bioText = "I am a researcher and developer dedicated to the craft of intelligent systems. With a background in Computer Science and Fine Arts, I explore the space where logic meets intuition. My work spans academic research in AI, creative coding experiments (vibecoding), and the development of tools that empower human creativity. I believe that code is the closest thing we have to magic.";

const About = () => (
    <Layout variant="emerald">
        {/* Same setup as Home Page */}
        <HeroBook />

        {/* Placeholder Content */}
        <section className="py-20 px-8 bg-charcoal text-center">
            <div className="max-w-2xl mx-auto border border-gold-antique/30 p-10 rounded-lg bg-emerald-deep/10">
                <p className="font-serif text-gold-antique text-xl mb-4 italic">Extended Biography</p>
                <p className="font-sans text-cream/80 leading-loose text-lg">
                    tktktktks tktktktks tktktktks tktktktks. tktktktks tktktktks.
                    tktktktks tktktktks tktktktks.
                </p>
                <p className="mt-8 text-xs text-cream/40 font-mono">
                    (Edit this text in src/pages/About.tsx)
                </p>
            </div>
        </section>
    </Layout>
);

export default About;
