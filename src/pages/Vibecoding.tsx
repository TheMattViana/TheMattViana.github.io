import Layout from '../components/Layout';

import { vibecodingProjects } from '../data/vibecodingData';

const Vibecoding = () => {
    return (
        <Layout variant="emerald">
            <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
                <section className="max-w-6xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-gold-antique mb-8 border-b border-gold-antique/20 pb-4">Vibecoding</h2>

                    <div className="mb-16 font-sans text-cream text-lg space-y-4 max-w-3xl">
                        <p className="font-serif text-xl italic text-gold-antique/80">Why vibecoding is improved by sharing:</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-emerald-primary">
                            <li><strong className="text-emerald-primary">Mastery through utilization:</strong> To truly improve AI systems, I believe one must be deeply experienced in using them in real-world contexts.</li>
                            <li><strong className="text-emerald-primary">Execution capability:</strong> It demonstrates the ability to combine project management skills with technical execution—turning abstract ideas into deployed reality.</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {vibecodingProjects.map((p, i) => (
                            <a href={p.link} key={i} target="_blank" rel="noopener noreferrer" className="block relative aspect-video group overflow-hidden border border-charcoal hover:border-gold-antique transition-all rounded-lg bg-black cursor-pointer">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 scale-100 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2 drop-shadow-md">{p.title}</h3>
                                    <p className="font-sans text-sm md:text-base text-gold-antique opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Vibecoding;
