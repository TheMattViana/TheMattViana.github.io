export type Snippet = {
    id: string;
    type: 'text' | 'image';
    content: string;
    linkUrl: string;
    backPatternVariant: 'emerald' | 'cream';
    title?: string;
};

export const allSnippets: Snippet[] = [
    {
        id: '1',
        type: 'text',
        title: 'The Algorithm',
        content: 'Exploring the beauty of recursive functions and their application in natural systems.',
        linkUrl: '#',
        backPatternVariant: 'emerald',
    },
    {
        id: '2',
        type: 'text',
        title: 'Nouveau Web',
        content: 'Reimagining the web as a canvas for digital craftsmanship.',
        linkUrl: '#',
        backPatternVariant: 'cream',
    },
    {
        id: '3',
        type: 'text',
        title: 'Project A',
        content: 'A deep dive into neural networks and art generation.',
        linkUrl: '#',
        backPatternVariant: 'emerald',
    },
    {
        id: '4',
        type: 'text',
        title: 'Vibecoding',
        content: 'Coding as a form of expression, not just utility.',
        linkUrl: '#',
        backPatternVariant: 'cream',
    },
    {
        id: '5',
        type: 'text',
        title: 'Latency',
        content: 'Optimizing for the speed of thought.',
        linkUrl: '#',
        backPatternVariant: 'emerald',
    },
    {
        id: '6',
        type: 'text',
        title: 'Future Study',
        content: 'What comes after the screen?',
        linkUrl: '#',
        backPatternVariant: 'cream',
    },
    {
        id: '7',
        type: 'text',
        title: 'Design System',
        content: 'Building a language of interaction.',
        linkUrl: '#',
        backPatternVariant: 'emerald',
    },
    {
        id: '8',
        type: 'text',
        title: 'Open Source',
        content: 'Contributing to the collective intelligence.',
        linkUrl: '#',
        backPatternVariant: 'cream',
    },
    {
        id: '9',
        type: 'text',
        title: 'Graph Theory',
        content: 'Connecting the dots in complex data.',
        linkUrl: '#',
        backPatternVariant: 'emerald',
    },
    {
        id: '10',
        type: 'text',
        title: 'Ethical AI',
        content: 'Ensuring our creations serve humanity.',
        linkUrl: '#',
        backPatternVariant: 'cream',
    },
];
