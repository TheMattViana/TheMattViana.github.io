
const academicProjects = [
    { title: "Neural Style Transfer Optimization", abstract: "A study on reducing inference time for high-resolution style transfer using quantization techniques.", authors: "M. Viana, et al.", link: "#" },
    { title: "Semantic Segmentation in Medical Imaging", abstract: "Novel architecture for low-resource environments applied to MRI datasets.", authors: "M. Viana, A. Smith", link: "#" },
    { title: "Algorithmic Fairness in hiring", abstract: "Analyzing bias in automated resume screening systems.", authors: "J. Doe, M. Viana", link: "#" },
];

const Academic = () => {
    return (
        <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
            <section className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-gold-antique mb-8 border-b border-gold-antique/20 pb-4">Academic Research</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {academicProjects.map((p, i) => (
                        <div key={i} className="bg-cream/5 border border-gold-antique/30 p-6 hover:bg-cream/10 transition-colors cursor-pointer group rounded-sm hover:-translate-y-1 duration-300">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-emerald-500 border border-emerald-500/30 px-2 py-1 rounded">PAPER</span>
                            </div>
                            <h3 className="font-serif text-xl text-cream group-hover:text-gold-antique mb-3 leading-tight">{p.title}</h3>
                            <p className="font-sans text-sm text-cream/70 mb-6 line-clamp-3">{p.abstract}</p>
                            <div className="flex justify-between items-end border-t border-cream/10 pt-4">
                                <span className="text-xs text-cream/50 italic">{p.authors}</span>
                                <button className="text-gold-antique text-sm hover:underline">Read More &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Academic;
