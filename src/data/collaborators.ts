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
        affiliations: ["MIT Media Lab", "Postdoctoral Fellow"],
        projects: ["Working Futures", "Interaction Context Often Increases Sycophancy in LLMs"],
        links: [
            { label: "Website", url: "https://www.dcalacci.net/" },
            { label: "Working Futures", url: "https://workingfutures.net/" }
        ]
    },
    {
        id: "2",
        name: "Shomik Jain",
        affiliations: ["Researcher"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: []
    },
    {
        id: "3",
        name: "Charlotte Park",
        affiliations: ["Researcher"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: []
    },
    {
        id: "4",
        name: "Ashia Wilson",
        affiliations: ["M.I.T"],
        projects: ["Interaction Context Often Increases Sycophancy in LLMs"],
        links: []
    }
];
