import { collaborators } from '../data/collaborators';
import { ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

const Collaborators = () => {
    return (
        <Layout variant="cream">
            <div className="bg-charcoal min-h-screen p-8 md:p-20 pt-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-gold-antique mb-12 border-b border-gold-antique/20 pb-4">Collaborators</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {collaborators.map((collab) => (
                            <div key={collab.id} className="bg-cream/5 border border-gold-antique/30 p-8 rounded-sm hover:border-gold-antique/60 transition-colors">
                                <h3 className="font-serif text-2xl text-cream mb-2">{collab.name}</h3>

                                <div className="mb-4">
                                    {collab.affiliations.map((aff, i) => (
                                        <span key={i} className="block text-sm font-sans text-cream/60 italic">{aff}</span>
                                    ))}
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-serif text-gold-antique text-lg mb-2">Projects</h4>
                                    <ul className="pl-4 border-l border-gold-antique/20 space-y-1">
                                        {collab.projects.map((proj, i) => (
                                            <li key={i} className="text-sm font-sans text-cream/80">{proj}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-cream/10">
                                    {collab.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center space-x-1 px-3 py-1 bg-gold-antique/10 text-gold-antique text-xs rounded hover:bg-gold-antique hover:text-charcoal transition-all"
                                        >
                                            <span>{link.label}</span>
                                            <ExternalLink size={12} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Collaborators;
