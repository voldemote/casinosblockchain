import transparencyImg from "../../Assets/images/transparency.png";
import technologyImg from "../../Assets/images/technology.png";
import valueImg from "../../Assets/images/value.png";

import PopularCasinoCard from "../Card/PopularCasinoCard";
import { IPopularCasinoObj } from "../../Interfaces";

const PopularCasinoInfos: Array<IPopularCasinoObj> = [
    {
        name: "Slots",
        about: "Slots are by far the most popular casino game, which is not surprising considering the large variety of themes available. Whether you’re into burgers, leprechauns, or something else entirely, you’ll find a game that suits you. And yes, all the best slots are available to play with cryptocurrencies – and with bonuses too!"
    },
    {
        name: "Roulette",
        about: "As one of the oldest forms of gambling out there, Roulette is the game that can’t be left out of any casino. Invented in France many years ago, it soon gained worldwide recognition. Nowadays, Bitcoin roulettes thrill players across most crypto casinos and casino Dapps. Roulette might be a classic, but still hasn’t lost its charm!"
    },
    {
        name: "Dice",
        about: "Looking for the best Bitcoin dice games? Your search is over! In this article, we’ll cover the top BTC dice casinos and Dapps. From exciting virtual betting to live tables and everything in-between, we’ve got you govered"
    },
    {
        name: "Crash",
        about: "Crash is a cryptocurrency-inspired casino game, available in all the best blockchain casinos and Dapps. Easy-to-play, yet exciting, check out Crash today for a chance at vast profits… But be careful not to crash!"
    },
    {
        name: "Poker",
        about: "Can you master a poker face? Poker is that infamous casino game you can play professionally, but only if you’ve got nerves of steel. A similar mindset can come in handy at a blockchain casino. Whether you play with Bitcoin, Ethereum, or something else, keeping your cool can take you to victory."
    },
    {
        name: "Plinko",
        about: "Nostalgia meets blockchain in Plinko. Drop the ball and keep your fingers crossed! If Lady Luck is on your side, there are juicy prizes ahead. Did we mention Plinko is provably fair, too?"
    }
];

const Review = () => {
    return (
        <div className="divHasTempBG bg-center bg-cover py-20 flex flex-col justify-center items-center">
            <div className="w-11/12 flex flex-col gap-y-10">
                <div className="text-3xl font-bold text-white">
                    How We Review
                    Blockchain Casinos?
                </div>
                <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row items-center justify-start gap-x-3">
                        <div>
                            <img className="h-15" src={transparencyImg} alt="ReviewImg" />
                        </div>

                        <div className="text-white text-xl font-bold">Transparency</div>
                    </div>
                    <div className="text-sm text-white w-2/3">
                        When testing blockchain casinos, we look for brands that foster an environment of complete trust and transparency. We prefer cryptocurrency casinos with features like provably fair games, clear communication with no fine print, and streamlined deposits and withdrawals.
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center justify-start gap-x-3">
                        <div>
                            <img className="h-15" src={technologyImg} alt="ReviewImg" />
                        </div>

                        <div className="text-white text-xl font-bold">Technology</div>
                    </div>
                    <div className="text-sm text-white w-2/3">
                        The very best blockchain casinos are willing to offer more than just your run-of-the-mill betting experience. That’s why we select casinos and decentralized applications that produce innovative casino games and provide unique gambling opportunities.
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center justify-start gap-x-3">
                        <div>
                            <img className="h-15" src={valueImg} alt="ReviewImg" />
                        </div>

                        <div className="text-white text-xl font-bold">Value</div>
                    </div>
                    <div className="text-sm text-white w-2/3">
                        Although their cheap operational costs theoretically allow all blockchain casinos to lower their house edge, not all choose to do so. Our list of cryptocurrency gambling sites highlights the brands that give you more value for money. Not just when it comes to game payouts, but bonuses too!
                    </div>
                </div>
            </div>
            {/* Casino Games */}
            <div className="w-11/12 flex flex-col mt-20">
                <div className="text-3xl font-bold text-white flex justify-center">
                    Blockchain Casino Games
                </div>
                <div className="text-gray-400 text-md mt-5 flex justify-center">
                    Play any of your favorite games using a variety of supported cryptocurrencies.
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5 px-10">
                    {PopularCasinoInfos.map((data: IPopularCasinoObj, index: number) => {
                        return (
                            <PopularCasinoCard key={index} data={data} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Review;