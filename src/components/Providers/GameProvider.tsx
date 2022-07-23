import MainCard from "./MainCard"

import EvolutionGameLogo from "../../Assets/images/evolution-gaming-logo.png"
import StakeNewLogo from "../../Assets/images/stake-new-logo.svg"
import LogoBcGame from "../../Assets/images/logos/bc-game.png"
import RocketPotIcon from "../../Assets/images/rocket-pot-new-logo.svg"
import CloudbetLogo from "../../Assets/images/cloudbet-new-logo.png"
import { IMainCardDataObj, ISortStringObj } from "../../Interfaces"
import SiteInfos from "./SiteInfos"

import "./css/index.css"

const GameProvider = () => {
    const SortString: Array<ISortStringObj> = [
        { id: 1, str: "#", Link: "#glossary-#" },
        { id: 2, str: "A", Link: "#glossary-A" },
        { id: 3, str: "B", Link: "#glossary-B" },
        { id: 4, str: "C", Link: "#glossary-C" },
        { id: 5, str: "D", Link: "#glossary-D" },
        { id: 6, str: "E", Link: "#glossary-E" },
        { id: 7, str: "F", Link: "#glossary-F" },
        { id: 8, str: "G", Link: "#glossary-G" },
        { id: 9, str: "H", Link: "#glossary-H" },
        { id: 10, str: "I", Link: "#glossary-I" },
        { id: 11, str: "J", Link: "#glossary-J" },
        { id: 12, str: "K", Link: "#glossary-K" },
        { id: 13, str: "L", Link: "#glossary-L" },
        { id: 14, str: "M", Link: "#glossary-M" },
        { id: 15, str: "N", Link: "#glossary-N" },
        { id: 16, str: "O", Link: "#glossary-O" },
        { id: 17, str: "P", Link: "#glossary-P" },
        { id: 18, str: "Q", Link: "#glossary-Q" },
        { id: 19, str: "R", Link: "#glossary-R" },
        { id: 20, str: "S", Link: "#glossary-S" },
        { id: 21, str: "T", Link: "#glossary-T" },
        { id: 22, str: "U", Link: "#glossary-U" },
        { id: 23, str: "V", Link: "#glossary-V" },
        { id: 24, str: "W", Link: "#glossary-W" },
        { id: 25, str: "X", Link: "#glossary-X" },
        { id: 26, str: "Y", Link: "#glossary-Y" },
        { id: 27, str: "Z", Link: "#glossary-Z" },
    ]

    const MainCardData: Array<IMainCardDataObj> = [
        {
            id: "glossary-#",
            logo: EvolutionGameLogo,
            title: "1x2 Gaming",
            miniTitle: "Play 1x2 Gaming at:",
            link: "/1x2-gaming",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
                { logo: CloudbetLogo, link: "/game-providers" },
            ],
            count: 2,
        },
        {
            id: "",
            logo: EvolutionGameLogo,
            title: "2by2 Gaming",
            miniTitle: "Play 2by2 Gaming at:",
            link: "/2by2-gaming",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
            ],
            count: null,
        },
        {
            id: "",
            logo: EvolutionGameLogo,
            title: "4the Player",
            miniTitle: "Play 4the Player at:",
            link: "/4th-player",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
            ],
            count: null,
        },
        {
            id: "",
            logo: EvolutionGameLogo,
            title: "7Mojos",
            miniTitle: "Play 7Monjos at:",
            link: "/7mojos",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
            ],
            count: null,
        },
        {
            id: "#glossary-A",
            logo: EvolutionGameLogo,
            title: "Absolute Live Gaming",
            miniTitle: "Play Absolute Live Gaming at:",
            link: "/absolute-live-gaming",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
            ],
            count: null,
        },
        {
            id: "",
            logo: EvolutionGameLogo,
            title: "Absolute Live Gaming",
            miniTitle: "Play Absolute Live Gaming at:",
            link: "/absolute-live-gaming",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
            ],
            count: null,
        }
    ]
    return (
        <div className="bg-white px-28 py-12">
            <div className="flex flex-col gap-5">
                <div className="text-3xl font-bold text-[#242848]">All game providers</div>
                <div className="gap-1 flex w-full justify-center flex-wrap max-w-[668px] lg:max-w-max">
                    {
                        SortString.map(item => (
                            <a href={item.Link} key={item.id}>
                                <button className="w-8 h-8 border border-gray-400 shadow-md shadow-gray-500 text-xl text-gray-800 font-bold">{item.str}</button>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center 2xl:justify-start w-full pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 w-full ">
                    {
                        MainCardData.map((item: any, index: number) => (
                            item.id ?
                                <div key={index} id={item.id}>
                                    <MainCard item={item} />
                                </div> :
                                <div key={index}>
                                    <MainCard item={item} />
                                </div>
                        ))
                    }
                </div>
            </div>
            <SiteInfos />
        </div >
    )
}

export default GameProvider




/* <div className="games-list has-most">
            <div className="container">
                <div className="row">

                </div>
            </div>
        </div> */