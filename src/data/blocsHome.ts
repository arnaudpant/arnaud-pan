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
                link: "/later"
            },
            {
                title: "Field Notes",
                link: "/later"
            },
            {
                title: "Now",
                link: "/later"
            },
        ]
    },
    {
        blocTitle: "Librairie",
        blocDescription: "Mes livres",
        blocLinks: [
            {
                title: "Livres",
                link: "/later"
            },
            {
                title: "Avis",
                link: "/later"
            },
        ]
    },
    {
        blocTitle: "Atelier",
        blocDescription: "Projets et sites web",
        blocLinks: [
            {
                title: "Rack a pinard",
                link: "https://rack-a-pinard.web.app"
            },
            {
                title: "Galleries",
                link: "/later"
            },
        ]
    },
    {
        blocTitle: "Prologue",
        blocDescription: "Présentations",
        blocLinks: [
            {
                title: "Not about",
                link: "/later"
            },
            {
                title: "GitHub",
                link: "https://github.com/arnaudpant"
            },
        ]
    },
]