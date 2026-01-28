
const vibecodingProjects = [
    { title: "Generative Flora", description: "Procedural plant generation using fractal algorithms.", image: "https://picsum.photos/seed/flora/800/600" },
    { title: "Audio Reactive Shader", description: "Real-time GLSL shader reacting to frequency inputs.", image: "https://picsum.photos/seed/shader/800/600" },
    { title: "Data Sonification", description: "Turning stock market data into ambient soundscapes.", image: "https://picsum.photos/seed/sound/800/600" },
    { title: "The Void", description: "Interactive particle system simulation.", image: "https://picsum.photos/seed/void/800/600" },
];

const Vibecoding = () => {
    return (
        <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
            <section className="max-w-6xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-gold-antique mb-12 border-b border-gold-antique/20 pb-4">Vibecoding</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {vibecodingProjects.map((p, i) => (
                        <div key={i} className="relative aspect-video group overflow-hidden border border-charcoal hover:border-gold-antique transition-all rounded-lg bg-black">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 scale-100 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2 drop-shadow-md">{p.title}</h3>
                                <p className="font-sans text-sm md:text-base text-gold-antique opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Vibecoding;
