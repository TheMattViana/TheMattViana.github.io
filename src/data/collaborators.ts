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
        projects: ["Working Futures", "Algorithmic Fairness Study"],
        links: [
            { label: "Website", url: "https://www.dcalacci.net/" },
            { label: "Working Futures", url: "https://workingfutures.net/" }
        ]
    },
    {
        id: "2",
        name: "Alex Smith",
        affiliations: ["University of Oxford"],
        projects: ["Semantic Segmentation in Medical Imaging"],
        links: [
            { label: "Google Scholar", url: "#" }
        ]
    },
    {
        id: "3",
        name: "Jane Doe",
        affiliations: ["Tech Studio Inc."],
        projects: ["Generative Flora", "The Void"],
        links: [
            { label: "Twitter", url: "#" }
        ]
    }
];
