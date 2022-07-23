import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import earnbetLogoImg from "../../Assets/images/logos/earn-bet.png";
import betFuryLogoImg from "../../Assets/images/logos/bet-fury.png";
import winkCasinoLogoImg from "../../Assets/images/logos/wink-casino.png";
import rankFirstImg from "../../Assets/images/rank-first.png";
import rankSecondImg from "../../Assets/images/rank-second.png";
import rankThirdImg from "../../Assets/images/rank-third.png";

const TopDecentralizedCasinos = () => {
    return (
        <div className="divHasTempBG pt-20 bg-white flex justify-center">
            <div className="w-11/12 flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-white">
                    Top Decentralized Casinos
                </div>
                <div className="w-2/5 flex flex-col mt-10">
                    <div className="text-sm text-gray-400 text-center">
                        Decentralized casinos are anonymous, secure, and provably fair, but often at the expense of user experience.
                    </div>
                    <div className="text-sm text-gray-400 text-center">
                        Only the <a href="/" className="text-blue-400 cursor-pointer">very best gambling Dapps</a> provide game quality alongside transparent gambling.
                    </div>
                    <div className="text-sm text-gray-400 text-center">
                        Here are the top three decentralized casinos offering an unmatched player experience alongside all their traditional advantages.
                    </div>
                </div>
                <div className="w-full mt-20">
                    <div className="flex flex-row justify-between -mb-36">
                        <div className="w-1/4 bg-white rounded flex flex-col pb-5">
                            <div className="flex justify-center -mt-10">
                                <div className="flex justify-center w-24 h-24 p-2 rounded-full bg-white">
                                    <img className="rounded-full" src={earnbetLogoImg} alt="TopCasinosImg" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className="h-8" src={rankFirstImg} alt="TopCasinosImg" />
                            </div>
                            <div className="flex justify-center text-xl mt-3">
                                EarnBet
                            </div>
                            <div className="flex justify-center -mt-2">
                                <Button
                                    className="text-black text-xs"
                                // href="/"
                                // target="_BLANK"
                                >
                                    earnbet.io
                                </Button>
                            </div>
                            <div className="flex items-center justify-center relative mt-3">
                                <CircularProgress size={56} thickness={2} sx={{ color: 'green' }} variant="determinate" value={Number(4.5) * 20} />
                                <div className="absolute flex items-center justify-center inset-0 text-sm">4.5/5%</div>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-white w-4/5"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<OpenInNewIcon />}
                                    href="/"
                                    target="_BLANK"
                                >
                                    VISIT WEBSITE
                                </Button>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-black text-sm w-4/5"
                                // href="/"
                                // target="_BLANK"
                                >
                                    READ MORE
                                </Button>
                            </div>
                        </div>
                        <div className="w-1/4 bg-white rounded flex flex-col pb-5">
                            <div className="flex justify-center -mt-10">
                                <div className="flex justify-center w-24 h-24 p-2 rounded-full bg-white">
                                    <img className="rounded-full" src={betFuryLogoImg} alt="TopCasinosImg" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className="h-8" src={rankSecondImg} alt="TopCasinosImg" />
                            </div>
                            <div className="flex justify-center text-xl mt-3">
                                BetFury
                            </div>
                            <div className="flex justify-center -mt-2">
                                <Button
                                    className="text-black text-xs"
                                // href="/"
                                // target="_BLANK"
                                >
                                    betfury.io
                                </Button>
                            </div>
                            <div className="flex items-center justify-center relative mt-3">
                                <CircularProgress size={56} thickness={2} sx={{ color: 'green' }} variant="determinate" value={Number(4) * 20} />
                                <div className="absolute flex items-center justify-center inset-0 text-sm">4/5%</div>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-white w-4/5"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<OpenInNewIcon />}
                                    href="/"
                                    target="_BLANK"
                                >
                                    VISIT WEBSITE
                                </Button>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-black text-sm w-4/5"
                                // href="/"
                                // target="_BLANK"
                                >
                                    READ MORE
                                </Button>
                            </div>
                        </div>
                        <div className="w-1/4 bg-white rounded flex flex-col pb-5">
                            <div className="flex justify-center -mt-10">
                                <div className="flex justify-center w-24 h-24 p-2 rounded-full bg-white">
                                    <img className="rounded-full" src={winkCasinoLogoImg} alt="TopCasinosImg" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className="h-8" src={rankThirdImg} alt="TopCasinosImg" />
                            </div>
                            <div className="flex justify-center text-xl mt-3">
                                Wink
                            </div>
                            <div className="flex justify-center -mt-2">
                                <Button
                                    className="text-black text-xs"
                                // href="/"
                                // target="_BLANK"
                                >
                                    tron.wink.org
                                </Button>
                            </div>
                            <div className="flex items-center justify-center relative mt-3">
                                <CircularProgress size={56} thickness={2} sx={{ color: 'green' }} variant="determinate" value={Number(4) * 20} />
                                <div className="absolute flex items-center justify-center inset-0 text-sm">4/5%</div>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-white w-4/5"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<OpenInNewIcon />}
                                    href="/"
                                    target="_BLANK"
                                >
                                    VISIT WEBSITE
                                </Button>
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button
                                    className="text-black text-sm w-4/5"
                                // href="/"
                                // target="_BLANK"
                                >
                                    READ MORE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopDecentralizedCasinos;