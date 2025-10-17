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
        blocDescription: "Flux d'écritures",
        blocLinks: [
            {
                title: "Marge de Pensée",
                link: "/articles"
            },
            // {
            //     title: "Field Notes",
            //     link: "/field-notes"
            // },
            // {
            //     title: "Now",
            //     link: "/now"
            // },
        ]
    },
    {
        blocTitle: "Librairie",
        blocDescription: "Ce que je lis ou écoute",
        blocLinks: [
            {
                title: "Livres",
                link: "/livres"
            },
            // {
            //     title: "Notes de lecture",
            //     link: "/later"
            // },
        ]
    },
    {
        blocTitle: "Atelier",
        blocDescription: "Code et Projets",
        blocLinks: [
            {
                title: "Rack a pinard",
                link: "https://rack-a-pinard.web.app"
            },
            // {
            //     title: "Galleries",
            //     link: "/later"
            // },
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
                title: "GitHub",
                link: "https://github.com/arnaudpant"
            },
            {
                title: "Palette",
                link: "/design"
            },
        ]
    },
]