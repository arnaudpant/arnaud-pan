export type CardHomeType = {
    blocTitle: string;
    blocDescription: string;
    blocLinks: LinkType[];
}
export type LinkType = {
    title: string;
    link: string 
}


export const listCardsHomeElt: CardHomeType[] = [
    {
        blocTitle: "Carnets",
        blocDescription: "Mes textes et posts",
        blocLinks: [
            {
                title: "Articles",
                link: "/articles"
            },
            {
                title: "Field Notes",
                link: "/field-notes"
            },
        ]
    },
    {
        blocTitle: "Librairie",
        blocDescription: "Mes livres",
        blocLinks: [
            {
                title: "Livres",
                link: "/livres"
            },
            {
                title: "Avis",
                link: "/avis"
            },
        ]
    },
    {
        blocTitle: "Atelier",
        blocDescription: "Projets et sites web",
        blocLinks: [
            {
                title: "Rack a pinard",
                link: "/"
            },
            {
                title: "Galleries",
                link: "/gallery"
            },
        ]
    },
    {
        blocTitle: "Prologue",
        blocDescription: "Présentations",
        blocLinks: [
            {
                title: "Not about",
                link: "/not-about"
            },
            {
                title: "Now",
                link: "/now"
            },
            {
                title: "GitHub",
                link: "/"
            },
        ]
    },
]