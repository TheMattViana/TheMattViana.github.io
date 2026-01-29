import { academicProjects } from './academicData';
import { newsData } from './newsData';
import { collaborators } from './collaborators';
import { vibecodingProjects } from './vibecodingData';

export interface Snippet {
    id: number;
    title: string;
    content: string;
    linkUrl: string;
    type: 'paper' | 'news' | 'collab' | 'project' | 'resource' | 'statement';
}

const generateSnippets = (): Snippet[] => {
    let idCounter = 1;
    const snippets: Snippet[] = [];

    // 1. News Items
    newsData.forEach(item => {
        snippets.push({
            id: idCounter++,
            title: item.title,
            content: `${item.date} - ${item.description}`,
            linkUrl: item.link,
            type: 'news'
        });
    });

    // 2. Academic Papers
    academicProjects.forEach(paper => {
        snippets.push({
            id: idCounter++,
            title: "Latest Publication",
            content: paper.title, // Paper title as content to keep it shorter? Or Abstract? Title is better for card.
            linkUrl: paper.link,
            type: 'paper'
        });
        // Add another card for abstract
        snippets.push({
            id: idCounter++,
            title: "Research Abstract",
            content: paper.abstract,
            linkUrl: paper.link,
            type: 'paper'
        });
    });

    // 3. Collaborators
    collaborators.forEach(collab => {
        snippets.push({
            id: idCounter++,
            title: "Research Collaborator",
            content: `${collab.name}, ${collab.affiliations[0]} - ${collab.affiliations[1] || ''}`,
            linkUrl: "/collaborators",
            type: 'collab'
        });
    });

    // 4. Vibecoding
    vibecodingProjects.forEach(proj => {
        snippets.push({
            id: idCounter++,
            title: "Vibecoding Project",
            content: `${proj.title}: ${proj.description}`,
            linkUrl: proj.link,
            type: 'project'
        });
    });

    // 5. Fixed Resources / Statements
    const staticResources: Array<Omit<Snippet, 'id' | 'type'> & { type: Snippet['type'] }> = [
        {
            title: "Curriculum Vitae",
            content: "Review my full academic and professional history, including publications, awards, and experience.",
            linkUrl: "/cv.pdf",
            type: "resource"
        },
        {
            title: "Writing Sample",
            content: "Read my latest work: 'Interaction Context Often Increases Sycophancy in LLMs'.",
            linkUrl: "/writing_sample.pdf",
            type: "resource"
        },
        {
            title: "Mission Statement",
            content: "I investigate how user interactions with 'black box' AI systems can expose unintended model behaviors.",
            linkUrl: "/about",
            type: "statement"
        },
        {
            title: "Contact",
            content: "Interested in collaboration? Reach out for research opportunities or creative projects.",
            linkUrl: "/contact",
            type: "resource"
        }
    ];

    staticResources.forEach(res => {
        snippets.push({
            id: idCounter++,
            ...res
        });
    });

    return snippets;
};

export const allSnippets = generateSnippets();
