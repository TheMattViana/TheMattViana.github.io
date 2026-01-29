import HeroBook from '../components/HeroBook';
import Layout from '../components/Layout';



const About = () => (
    <Layout variant="emerald">
        {/* Same setup as Home Page */}
        <HeroBook />

        {/* Placeholder Content */}
        <section className="py-20 px-8 bg-charcoal text-center">
            <div className="max-w-2xl mx-auto border border-gold-antique/30 p-10 rounded-lg bg-emerald-deep/10">
                <p className="font-serif text-gold-antique text-xl mb-4 italic">My Mission</p>
                <p className="font-sans text-cream/80 leading-loose text-lg">
                    I research ways to make AI more useful for people. The technology is advanced enough to help us with our daily work, but for many, it is still hard to use effectively. My focus isn’t on making the AI 'smarter'; it’s on understanding how people use it and designing tools that make that experience better.
                </p>
                <br />
                <p className="font-sans text-cream/80 leading-loose text-lg">
                    In my academic work, I study how people interact with AI, and AI decision making. In my personal life, I use AI constantly to build apps, games, and productivity tools. I believe the best systems come from combining this hands-on experience with a deep understanding of what users actually need. My goal is to bridge the gap between complex technology and everyday people, ensuring AI is not just powerful, but easy for everyone to use.
                </p>

            </div>
        </section>
    </Layout>
);

export default About;
