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
                            <h1 className="font-serif text-5xl md:text-6xl mb-4 tracking-tight">Matt Viana</h1>
                            <p className="font-mono text-sm tracking-[0.2em] text-emerald-deep uppercase">Ph.D. Student & Researcher</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                            {/* Sidebar */}
                            <aside className="space-y-8">
                                <section>
                                    <h3 className="font-serif text-xl font-bold mb-4 uppercase text-emerald-deep">Contact</h3>
                                    <ul className="text-sm space-y-2 font-sans opacity-80">
                                        <li>State College, PA</li>
                                        <li><a href="mailto:mmv5513@psu.edu" className="hover:text-emerald-deep">mmv5513@psu.edu</a></li>
                                        <li><a href="https://themattviana.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-deep">themattviana.github.io</a></li>
                                        <li><a href="https://linkedin.com/in/matt-viana" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-deep">linkedin.com/in/matt-viana</a></li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="font-serif text-xl font-bold mb-4 uppercase text-emerald-deep">Skills</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Research Methods</h4>
                                            <p className="text-xs opacity-80 leading-relaxed">Qualitative Analysis, AI Auditing, User Studies, HCI</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Technical</h4>
                                            <p className="text-xs opacity-80 leading-relaxed">Machine Learning, AI, NLP</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Programming</h4>
                                            <p className="text-xs opacity-80 leading-relaxed">Python, R, SQL</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-xl font-bold mb-4 uppercase text-emerald-deep">Awards</h3>
                                    <ul className="text-sm space-y-3 font-sans opacity-80 text-left">
                                        <li>
                                            <span className="font-bold block">Rednor Graduate Fellowship</span>
                                            <span className="text-xs">College of IST, 2025-2026</span>
                                        </li>
                                        <li>
                                            <span className="font-bold block">ICDS Rising Researcher Grant</span>
                                            <span className="text-xs">Penn State, 2025</span>
                                        </li>
                                    </ul>
                                </section>
                            </aside>

                            {/* Main Content */}
                            <main className="space-y-10">
                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Research Interests</h3>
                                    <p className="text-sm leading-relaxed opacity-80 text-justify">
                                        My research operates at the intersection of human-computer interaction and AI interpretability, focusing on the internal decision-making processes of Large Language Models (LLMs). I investigate how user interactions with these complex 'black box' systems can change and expose unintended model behaviors, such as my previous collaboration on uncovering sycophancy and perspective mimesis. The goal is to move beyond simply observing these behaviors by building user-facing tools to probe, understand, and ultimately steer the model's internal logic, enhancing its transparency and reliability.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Education</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-lg">Ph.D. in Informatics and Intelligent Systems</h4>
                                            <p className="text-sm italic text-gray-600 mb-1">Pennsylvania State University | Aug 2025 – Present</p>
                                            <p className="text-sm opacity-80">Advisor: Dr. Dana Calacci</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">B.S. in Data Science</h4>
                                            <p className="text-sm italic text-gray-600 mb-1">Pennsylvania State University | Aug 2022 – May 2025</p>
                                            <p className="text-sm opacity-80">Minor in Computer Science</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Experience</h3>
                                    <div>
                                        <h4 className="font-bold text-lg">Graduate Research Assistant</h4>
                                        <p className="text-sm italic text-gray-600 mb-3">Working Futures Network, Penn State | Aug 2025 – Present</p>
                                        <ul className="text-sm list-disc pl-4 space-y-2 opacity-80">
                                            <li>Investigate user behavior and adoption patterns of Large Language Models (LLMs) in real-world settings.</li>
                                            <li>Conduct qualitative research and system audits to identify security vulnerabilities and privacy concerns in AI systems.</li>
                                            <li>Develop novel user feedback mechanisms to mitigate AI mirroring behaviors such as sycophancy.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Publications</h3>
                                    <div>
                                        <h4 className="font-bold text-lg leading-tight">Extended AI Interactions Shape Sycophancy and Perspective Mimesis</h4>
                                        <p className="text-sm italic text-gray-600 mb-1">arXiv Details: arXiv:2509.12517 (Under Review at CHI '25)</p>
                                        <p className="text-sm text-gray-800">S. Jain, C. Park, <b>M. M. Viana</b>, A. Wilson, D. Calacci</p>
                                        <a href="https://arxiv.org/abs/2509.12517" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-deep hover:underline mt-1 inline-block">View Paper &rarr;</a>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Manuscripts & Working Papers</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-bold text-base">Active Negotiation: How Users Interact With and Adopt Large Language Models</h4>
                                            <p className="text-sm text-gray-800"><b>M. Viana</b>, P. Erickson, D. Calacci</p>
                                            <p className="text-xs italic opacity-70 mt-1">Draft available upon request</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base">How Context Influences LLM Assumptions</h4>
                                            <p className="text-sm text-gray-800"><b>M. Viana</b>, B. Jain, D. Calacci</p>
                                            <p className="text-xs italic opacity-70 mt-1">In progress</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base">I Wish it Wouldn't Lie: Addressing Trust Eroding Design in LLMs</h4>
                                            <p className="text-sm text-gray-800"><b>M. Viana</b>, D. Calacci</p>
                                            <p className="text-xs italic opacity-70 mt-1">In progress</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="font-serif text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Mentoring</h3>
                                    <div>
                                        <h4 className="font-bold text-lg">Graduate Mentor</h4>
                                        <p className="text-sm italic text-gray-600 mb-1">Pennsylvania State University | June 2025 – Present</p>
                                        <p className="text-sm opacity-80">Mentored undergraduate students on research projects focused on the adoption and integration of LLMs.</p>
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
