import { Download } from 'lucide-react';
import Layout from '../components/Layout';

const CV = () => {
    return (
        <Layout variant="emerald">
            <div className="bg-charcoal min-h-screen pt-28 pb-20 px-4 flex flex-col items-center relative">

                {/* Floating Download Button */}
                <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40">
                    <a href="/cv.pdf" download className="flex items-center space-x-3 bg-gold-antique text-[#1a1a1a] font-serif font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-cream hover:scale-105 transition-all duration-300">
                        <Download size={22} />
                        <span>Download PDF</span>
                    </a>
                </div>

                {/* Paper Container */}
                <div className="w-full max-w-[850px] bg-[#fcfbf9] text-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {/* Top Decoration */}
                    <div className="h-4 bg-emerald-deep w-full"></div>

                    <div className="p-8 md:p-16 lg:p-20">
                        <header className="border-b-2 border-[#1a1a1a] pb-8 mb-10 text-center">
                            <h1 className="font-serif text-5xl md:text-6xl mb-4 tracking-tight">Matheus Mesquita Viana</h1>
                            <p className="font-mono text-sm tracking-[0.2em] text-emerald-deep uppercase">Creative Technologist & Researcher</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                            {/* Sidebar */}
                            <aside className="space-y-8">
                                <section>
                                    <h3 className="font-serif text-xl font-bold mb-4 uppercase text-emerald-deep">Contact</h3>
                                    <ul className="text-sm space-y-2 font-sans opacity-80">
                                        <li>San Francisco, CA</li>
                                        <li>mmv5513@psu.edu</li>
                                        <li>github.com/themattviana</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="font-serif text-xl font-bold mb-4 uppercase text-emerald-deep">Skills</h3>
                                    <ul className="text-sm space-y-1 font-sans opacity-80">
                                        <li>React / TypeScript</li>
                                        <li>Python / PyTorch</li>
                                        <li>Creative Coding</li>
                                        <li>Three.js / WebGL</li>
                                        <li>UI/UX Design</li>
                                    </ul>
                                </section>
                            </aside>

                            {/* Main Content */}
                            <main className="space-y-10">
                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Experience</h3>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-lg">Senior Creative Developer</h4>
                                        <p className="text-sm italic text-gray-600 mb-2">Tech Studio Inc. | 2021 - Present</p>
                                        <p className="text-sm leading-relaxed opacity-80">Leading the development of immersive web experiences and generative art tools. Improved rendering performance by 40%.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg">Research Assistant</h4>
                                        <p className="text-sm italic text-gray-600 mb-2">University Lab | 2019 - 2021</p>
                                        <p className="text-sm leading-relaxed opacity-80">Conducted research on human-computer interaction and algorithmic fairness. Published 2 papers in top-tier conferences.</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Education</h3>
                                    <div>
                                        <h4 className="font-bold text-lg">M.S. Computer Science</h4>
                                        <p className="text-sm italic text-gray-600">Stanford University | 2021</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Publications</h3>
                                    <div>
                                        <h4 className="font-bold text-lg leading-tight">Interaction Context Often Increases Sycophancy in LLMs</h4>
                                        <p className="text-sm italic text-gray-600 mb-1">Human-centered computing — Empirical studies in HCI</p>
                                        <p className="text-sm text-gray-800">S. Jain, C. Park, <b>M. Viana</b>, A. Wilson, D. Calacci</p>
                                        <a href="/writing_sample.pdf" target="_blank" className="text-xs text-emerald-deep hover:underline mt-1 inline-block">View Paper &rarr;</a>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="h-4 bg-emerald-deep w-full mt-12"></div>
                </div>
            </div>
        </Layout >
    );
};

export default CV;
