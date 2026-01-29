
import Layout from '../components/Layout';

const newsItems = [
    {
        date: "January 2026",
        title: "Accepted at CHI 2026",
        content: (
            <div>
                <h4 className="font-serif text-xl text-gold-antique mb-2">Interaction Context Often Increases Sycophancy in LLMs</h4>
                <p className="font-sans text-cream/80 text-sm mb-3 text-justify leading-relaxed">
                    An empirical study investigating how interaction context, including long-context and personalization, influences sycophancy in Large Language Models.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {["Sycophancy", "Long-context", "Personalization", "Mirroring", "Alignment"].map(k => (
                        <span key={k} className="text-[10px] uppercase tracking-wider text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-900/10">
                            {k}
                        </span>
                    ))}
                </div>
                <p className="font-sans text-xs text-cream/50 italic">S. Jain, C. Park, <b>M. Viana</b>, A. Wilson, D. Calacci</p>
            </div>
        )
    },
    {
        date: "December 2025",
        title: "ICDS Rising Researcher Talk",
        content: (
            <p className="font-sans text-cream/80 text-lg">
                Selected to give a talk as a <span className="text-gold-antique">Rising Researcher</span> at the Institute for Computational and Data Sciences.
            </p>
        )
    },
    {
        date: "August 2025",
        title: "Jordan Rednor Scholarship",
        content: (
            <p className="font-sans text-cream/80 text-lg">
                Received the <span className="text-gold-antique">Jordan Rednor merit-based graduate studies scholarship</span>.
            </p>
        )
    },
    {
        date: "August 2025",
        title: "PhD Journey Begins",
        content: (
            <p className="font-sans text-cream/80 text-lg">
                Started my PhD in Informatics at <span className="text-gold-antique">Penn State University</span> under the advisement of <a href="https://www.dcalacci.net/" target="_blank" className="underline decoration-gold-antique/30 hover:decoration-gold-antique transition-all">Dana Calacci</a>.
            </p>
        )
    },
    {
        date: "July 2025",
        title: "ICDS Rising Researcher Grant",
        content: (
            <p className="font-sans text-cream/80 text-lg">
                Awarded the <span className="text-gold-antique">ICDS Rising Researcher Grant</span>.
            </p>
        )
    }
];

const News = () => {
    return (
        <Layout variant="cream">
            <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
                <div className="max-w-3xl mx-auto">
                    <header className="mb-16 border-b border-gold-antique/20 pb-6">
                        <h1 className="font-serif text-4xl md:text-5xl text-gold-antique">News & Updates</h1>
                    </header>

                    <div className="space-y-0 relative">
                        {/* Timeline Vertical Bar */}
                        <div className="absolute left-[85px] md:left-[140px] top-2 bottom-0 w-px bg-gradient-to-b from-gold-antique/40 to-transparent hidden sm:block"></div>

                        {newsItems.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-8 sm:gap-16 relative pb-16 group">

                                {/* Timeline Dot */}
                                <div className="absolute left-[81px] md:left-[136px] top-2 w-2.5 h-2.5 rounded-full bg-charcoal border-2 border-gold-antique z-10 hidden sm:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

                                {/* Date */}
                                <div className="sm:w-32 flex-shrink-0 pt-0.5 text-right">
                                    <span className="font-mono text-gold-antique text-sm sm:text-base border-b-2 border-gold-antique/20 pb-1 inline-block">{item.date}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow bg-white/5 p-6 rounded-lg border border-white/5 hover:border-gold-antique/30 transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl relative overflow-hidden">
                                    {/* Subtle Shine Effect */}
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gold-antique/5 rounded-full blur-2xl group-hover:bg-gold-antique/10 transition-colors"></div>

                                    <h3 className="font-serif text-2xl text-cream mb-4 group-hover:text-gold-antique transition-colors">{item.title}</h3>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default News;
