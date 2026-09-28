export interface AcademicProject {
    title: string;
    abstract: string;
    authors: string;
    /** Omit for papers without a public version; the card then shows `status` instead of a link. */
    link?: string;
    status?: string;
}

export const academicProjects: AcademicProject[] = [
    { title: "Interaction Context Often Increases Sycophancy in LLMs", abstract: "🏆 ACM CHI 2026 Accepted, Honorable Mention Award for Outstanding Contribution. An empirical study investigating how interaction context, including long-context and personalization, influences sycophancy in Large Language Models. Keywords: sycophancy, long-context, personalization, mirroring, alignment.", authors: "S. Jain, C. Park, M. Viana, A. Wilson, D. Calacci", link: "https://arxiv.org/pdf/2509.12517" },
    { title: "What Changes Inside an LLM When Memory Replaces Your History", abstract: "ICLR 2027, under review. Chat products give LLMs a memory, a short LLM-written summary of a user's past conversations, in place of the conversations themselves. Using two weeks of real conversations from 38 users, seven models, and more than 73,000 answers, I show that no memory recreates the internal state the full history produces, and that on two Llama models memories cut how often the model refers a user in distress to a professional. Keywords: memory, personalization, interpretability, activation steering, safety.", authors: "M. Viana, D. Calacci", status: "Under review" },
    { title: "\u201cIf You\u2019re Not Doing It, Somebody Else Is\u201d: Active Negotiation and the Invisible Labor of Sustained LLM Use", abstract: "ACM CHI 2027, under review. Why do people keep using LLMs they distrust? From 36 interviews with graduate students, balanced between English-as-a-foreign-language and non-EFL speakers, I introduce the Active Negotiation framework: sustained use as a recurring cycle of risk, mitigation, and justification across practical, internal, and social dimensions. Keywords: technology adoption, qualitative methods, overreliance, disclosure, EFL.", authors: "M. Viana, P. Erickson, S. Wilson, D. Calacci", status: "Under review" },
];
