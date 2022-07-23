export interface ISiteRankBlogCardObj {
    rank: number,
    logo: any,
    name: string,
    link: string,
    bonus: string | null,
    features: string[]
}

export interface IPopularCasinoObj {
    name: string,
    about: string,
    // link: string
}

export interface IPopularCasinoObj {
    name: string,
    about: string,
    // link: string
}

export interface ISortStringObj {
    id: number,
    str: string,
    Link: string
}

export interface IMainCardDataObj {
    id: string,
    logo: any,
    title: string,
    miniTitle: string,
    link: string,
    gameLogos: Array<IGameLogos>,
    count: number | null
}

export interface ITopSectionCardDataObj {
    id: number,
    logo: any,
    title: string,
    miniTitle: string,
    gameLogos: Array<IGameLogos>,
    count: number
}

export interface IGameLogos {
    logo: any,
    link: string
}

export interface ISiteInfoObj {
    rank: number,
    name: string,
    link: string,
    logo: string,
    bonus: string,
    features: string[],
    overview: {
        summary: string,
        established: string | null,
        licence: string | null,
        bonus: string | null,
        wageringRequrement: string | null,
        noDepositFaucet: string | null,
        liveChat: string | null,
        rating: {
            bonus: string,
            lookAndFeel: string,
            LicenceAndSafety: string,
            gameSelection: string,
            paymentOption: string,
            customerSupport: string,
            customerReview: string,
            total: string
        }
    }
}

export interface IReadMoreDataObj {
    id: number,
    image: any,
    date: string,
    title: string,
    content: string,
    link: string,
}


export interface IProps {
    siteIndex: number,
    summaryData: ISiteRankBlogCardObj
}
