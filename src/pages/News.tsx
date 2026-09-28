import Layout from '../components/Layout';
import { newsData } from '../data/newsData';

// News content lives in src/data/newsData.ts — this page only renders it.
// Do not add news items here; see the note at the top of that file.

/** Renders `**phrase**` as a gold span, leaving the rest as plain text. */
const withHighlights = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
            <span key={i} className="text-gold-antique">{part.slice(2, -2)}</span>
        ) : (
            <span key={i}>{part}</span>
        )
    );

const News = () => {
    return (
        <Layout variant="cream">
            <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
                <div className="max-w-3xl mx-auto">
                    <header className="mb-16 border-b border-gold-antique/20 pb-6">
                        <h1 className="font-serif text-4xl md:text-5xl text-gold-antique">News &amp; Updates</h1>
                    </header>

                    <div className="space-y-0 relative">
                        {/* Timeline Vertical Bar */}
                        <div className="absolute left-[85px] md:left-[140px] top-2 bottom-0 w-px bg-gradient-to-b from-gold-antique/40 to-transparent hidden sm:block"></div>

                        {newsData.map((item, index) => (
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

                                    <p className="font-sans text-cream/80 text-sm mb-3 leading-relaxed">
                                        {withHighlights(item.description)}
                                    </p>

                                    {item.tags && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] uppercase tracking-wider text-gold-antique/80 border border-gold-antique/30 px-2 py-0.5 rounded bg-gold-antique/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {item.authors && (
                                        <p className="font-sans text-xs text-cream/50 italic">{item.authors}</p>
                                    )}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-gold-antique/80 hover:text-gold-antique hover:underline transition-colors mt-2 inline-block"
                                        >
                                            {item.linkLabel ?? 'Read more'} &rarr;
                                        </a>
                                    )}
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
