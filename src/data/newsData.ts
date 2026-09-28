// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR NEWS.
//
// The News page (src/pages/News.tsx) and the tarot Archive (src/data/tarotData.ts)
// both render from this array. Add news HERE and nowhere else.
//
// Do NOT create a second list of news items inside News.tsx — that happened
// before and the two copies silently drifted apart (the page and the cards
// showed different headlines for the same event).
//
// Wrap a phrase in **double asterisks** to render it in gold on the News page.
// ─────────────────────────────────────────────────────────────────────────────

export interface NewsItem {
    date: string;
    title: string;
    /** One paragraph. `**gold**` markup is allowed. Also used for tarot cards. */
    description: string;
    /** Optional keyword chips, shown under the description. */
    tags?: string[];
    /** Optional author line, rendered in small italics. */
    authors?: string;
    /** Optional outbound link. Omit when there is nothing to link to. */
    link?: string;
    linkLabel?: string;
}

export const newsData: NewsItem[] = [
    {
        date: "September 2026",
        title: "Two First-Author Papers Submitted to ICLR and CHI",
        description:
            "Submitted **What Changes Inside an LLM When Memory Replaces Your History** to **ICLR 2027**, which compares LLM memory features with users' real conversation histories inside seven models, and **\u201cIf You\u2019re Not Doing It, Somebody Else Is\u201d: Active Negotiation and the Invisible Labor of Sustained LLM Use** to **CHI 2027**, an interview study of why people keep using LLMs they distrust.",
        tags: ["Memory", "Personalization", "Interpretability", "Technology Adoption"],
    },
    {
        date: "June 2026",
        title: "Talk & Poster at AI and Social Research Conference",
        description:
            "Presented a short talk on **Interaction Context Often Increases Sycophancy in LLMs** and a poster on **Active Negotiation: How Users Interact With and Adopt Large Language Models** at **AI and Social Research: Empathic AI, Metascience, and Methodology**, hosted by the Consortium on Moral Decision-Making and the Center for Social Data Analytics at Penn State.",
        link: "https://moralconsortium.psu.edu/events/ai-and-social-research-empathic-ai-metascience-and-methodology/",
        linkLabel: "View the conference program",
    },
    {
        date: "March 2026",
        title: "CHI Paper Receives Honorable Mention",
        description:
            "Our CHI 2026 paper, **Interaction Context Often Increases Sycophancy in LLMs**, received an **Honorable Mention Award** for outstanding contribution. The work was also featured in **Penn State News**.",
        link: "https://www.psu.edu/news/information-sciences-and-technology/story/ai-powered-chatbots-can-become-too-agreeable-over-time",
        linkLabel: "Read the Penn State News article",
    },
    {
        date: "February 2026",
        title: "Sycophancy Paper Featured in MIT News",
        description:
            "Our research on how personalization features can make LLMs more agreeable was featured in **MIT News**.",
        link: "https://news.mit.edu/2026/personalization-features-can-make-llms-more-agreeable-0218",
        linkLabel: "Read the article",
    },
    {
        date: "January 2026",
        title: "Accepted at CHI 2026",
        description:
            "**Interaction Context Often Increases Sycophancy in LLMs** — an empirical study investigating how interaction context, including long-context and personalization, influences sycophancy in Large Language Models.",
        tags: ["Sycophancy", "Long-context", "Personalization", "Mirroring", "Alignment"],
        authors: "S. Jain, C. Park, M. Viana, A. Wilson, D. Calacci",
        link: "https://arxiv.org/pdf/2509.12517",
        linkLabel: "Read the paper",
    },
    {
        date: "December 2025",
        title: "ICDS Rising Researcher Talk",
        description:
            "Selected to give a talk as a **Rising Researcher** at the Institute for Computational and Data Sciences.",
    },
    {
        date: "August 2025",
        title: "Jordan Rednor Scholarship",
        description:
            "Received the **Jordan Rednor merit-based graduate studies scholarship**.",
    },
    {
        date: "August 2025",
        title: "PhD Journey Begins",
        description:
            "Started my PhD in Informatics at **Penn State University** under the advisement of Dana Calacci.",
        link: "https://www.dcalacci.net/",
        linkLabel: "Dana Calacci's lab",
    },
    {
        date: "July 2025",
        title: "ICDS Rising Researcher Grant",
        description: "Awarded the **ICDS Rising Researcher Grant**.",
    },
];

/** Strip the `**gold**` markers, for contexts that render plain text. */
export const plainText = (text: string): string => text.replace(/\*\*/g, "");
