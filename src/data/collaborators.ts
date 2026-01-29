export interface CollaboratorLink {
    label: string;
    url: string;
}

export interface Collaborator {
    id: string;
    name: string;
    affiliations: string[];
    projects: string[]; // List of project names or IDs they worked on
    links: CollaboratorLink[];
}

export const collaborators: Collaborator[] = [
    {
        id: "1",
        name: "Dana Calacci",
        affiliations: ["Assistant Professor", "Pennsylvania State University"],
        projects: ["Working Futures", "Interaction Context Often Increases Sycophancy in LLMs"],
        links: [
            { label: "Google Scholar", url: "https://scholar.google.com/citations?user=g13Vo5oAAAAJ&hl=en" },
            { label: "Website", url: "https://www.dcalacci.net/" }
        ]
    },
    {
        id: "2",
        name: "Shomik Jain",
        affiliations: ["MIT IDSS PhD Candidate"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: [
            { label: "Google Scholar", url: "https://scholar.google.com/citations?user=KXHdjLoAAAAJ&hl=en" }
        ]
    },
    {
        id: "3",
        name: "Charlotte Park",
        affiliations: ["EECS PhD Student, MIT"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: [
            { label: "Google Scholar", url: "https://scholar.google.com/citations?user=PFc9lJkAAAAJ&hl=en" }
        ]
    },
    {
        id: "4",
        name: "Ashia C. Wilson",
        affiliations: ["Assistant Professor at MIT"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: [
            { label: "Google Scholar", url: "https://scholar.google.com/citations?user=sV61CtsAAAAJ&hl=en" }
        ]
    }
];
