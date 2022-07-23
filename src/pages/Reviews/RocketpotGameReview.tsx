import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Box, Fab } from "@mui/material";
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import TopBar from "../../components/Common/Topbar";
import Footer from "../../components/Common/Footer";
import {siteDatas} from "../../Interfaces/SiteDatas";

// crypto images
import bnbCryptoImg from "../../Assets/images/cryptocurrency/bnb.png";
import bitcoinCryptoImg from "../../Assets/images/cryptocurrency/bitcoin.png";
import bitcoinCashCryptoImg from "../../Assets/images/cryptocurrency/bitcoin-cash.png";
import cardanoCryptoImg from "../../Assets/images/cryptocurrency/cardano.png";
import dogecoinCryptoImg from "../../Assets/images/cryptocurrency/dogecoin.png";
import eosCryptoImg from "../../Assets/images/cryptocurrency/eos.png";
import etherCryptoImg from "../../Assets/images/cryptocurrency/ether.png";
import litecoinCryptoImg from "../../Assets/images/cryptocurrency/litecoin.png";
import neoCryptoImg from "../../Assets/images/cryptocurrency/neo.png";
import rippleCryptoImg from "../../Assets/images/cryptocurrency/ripple.png";
import tetherCryptoImg from "../../Assets/images/cryptocurrency/tether.png";
import tronCryptoImg from "../../Assets/images/cryptocurrency/tron.png";

// game images
import baccaratGameImg from "../../Assets/images/games/baccarat.png";
import blackjackGameImg from "../../Assets/images/games/blackjack.png";
import diceGameImg from "../../Assets/images/games/dice.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";
import kenoGameImg from "../../Assets/images/games/keno.png";
import liveCasinoGameImg from "../../Assets/images/games/live-casino.png";
import lotteryGameImg from "../../Assets/images/games/lottery.png";
import plinkoGameImg from "../../Assets/images/games/plinko.png";
import pokerGameImg from "../../Assets/images/games/poker.png";
import sicBoGameImg from "../../Assets/images/games/sic-bo.png";
import rouletteGameImg from "../../Assets/images/games/roulette.png";
import slotsGameImg from "../../Assets/images/games/slots.png";
import sportsBettingGameImg from "../../Assets/images/games/sports-betting.png";

// review images
import reviewImg1 from "../../Assets/images/reviews/3-rocketpot-game/1-rocketpot-review.png";
import reviewImg2 from "../../Assets/images/reviews/3-rocketpot-game/2-rocketpot-review.png";
import reviewImg3 from "../../Assets/images/reviews/3-rocketpot-game/3-rocketpot-review.png";
import reviewImg4 from "../../Assets/images/reviews/3-rocketpot-game/4-rocketpot-review.png";
import reviewImg5 from "../../Assets/images/reviews/3-rocketpot-game/5-rocketpot-review.png";

// country flag
import { GB, DE, JP, ES } from 'country-flag-icons/react/1x1';

const StyledRating = styled(Rating)({
});

const RatingFilledDiv = () => {
    return (
        <div className="px-1">
            <div className="w-16 h-1 bg-green-400">

            </div>
        </div>
    )
}

const RatingEmptydDiv = () => {
    return (
        <div className="px-1">
            <div className="w-16 h-1 bg-gray-400">

            </div>
        </div>
    )
}

const cryptocurrenciesObj: Array<any> = [
    {
        img: bnbCryptoImg,
        name: "Binance Coin"
    },
    {
        img: bitcoinCryptoImg,
        name: "Bitcoin"
    },
    {
        img: bitcoinCashCryptoImg,
        name: "Bitcoin Cash"
    },
    {
        img: cardanoCryptoImg,
        name: "Cardano"
    },
    {
        img: dogecoinCryptoImg,
        name: "Dogecoin"
    },
    {
        img: eosCryptoImg,
        name: "EOS"
    },
    {
        img: etherCryptoImg,
        name: "Ethereum"
    },
    {
        img: litecoinCryptoImg,
        name: "Litecoin"
    },
    {
        img: neoCryptoImg,
        name: "Neo"
    },
    {
        img: rippleCryptoImg,
        name: "Ripple"
    },
    {
        img: tetherCryptoImg,
        name: "Tether"
    },
    {
        img: tronCryptoImg,
        name: "Tron"
    }
];

const gamesObj: Array<any> = [
    {
        img: baccaratGameImg,
        name: "Baccarat"
    },
    {
        img: blackjackGameImg,
        name: "Blackjack"
    },
    {
        img: diceGameImg,
        name: "Dice"
    },
    {
        img: jackpotGameImg,
        name: "Jackpots"
    },
    {
        img: kenoGameImg,
        name: "Keno"
    },
    {
        img: liveCasinoGameImg,
        name: "Live Casino"
    },
    {
        img: lotteryGameImg,
        name: "Lottery"
    },
    {
        img: plinkoGameImg,
        name: "Plinko"
    },
    {
        img: pokerGameImg,
        name: "Poker"
    },
    {
        img: rouletteGameImg,
        name: "Roulette"
    },
    {
        img: sicBoGameImg,
        name: "Sic Bo"
    },
    {
        img: slotsGameImg,
        name: "Slots"
    },
    {
        img: sportsBettingGameImg,
        name: "Sports Betting"
    }
]

const RocketpotGameReview = () => {
    const siteData = siteDatas[2];

    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);
    const [openFAQ4, setOpenFAQ4] = useState(false);

    useEffect(() => {
        const partSections = document.getElementsByClassName("part-section");
        const rightBarBtns = document.getElementsByClassName("rightbarBtn");
        window.onscroll = () => {
            let current: any;

            for (let i = 0; i < partSections.length; i++) {
                let offset = partSections[i].getBoundingClientRect();
                
                if (offset.top <= 100 && offset.bottom > 100) {
                    current = partSections[i].getAttribute("id");
                }
            }
            for (let i = 0; i < rightBarBtns.length; i++) {
                rightBarBtns[i].classList.remove("text-blue-600");
                rightBarBtns[i].classList.add("text-black");
                if (rightBarBtns[i].classList.contains(current)) {
                    rightBarBtns[i].classList.remove("text-black");
                    rightBarBtns[i].classList.add("text-blue-600");
                }
            }
        }
    }, []);

    return (
        <Box className="bg-gray-100 flex flex-col items-center">
            <TopBar/>
            <div className="w-11/12 flex flex-col py-10 gap-y-5">
                {/* header */}
                <div className="bg-white rounded-xl flex flex-col xl:flex-row justify-between p-5">
                    <div className="flex flex-row justify-start xl:justify-between">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-16 sm:w-20 md:w-24 xl:w-28 rounded-full"
                                src={siteData.logo}
                                alt="logoImg">
                            </img>
                        </div>
                        <div className="flex flex-col justify-between py-2 ml-5">
                            <div className="text-2xl xl:text-3xl font-bold">
                                {siteData.name}
                            </div>
                            <div className="text-2xl xl:text-3xl font-bold">
                                Review
                            </div>
                            <div className="flex flex-col xl:flex-row gap--1 xl:gap-x-5">
                                <div className="flex items-center">
                                    Over Rating
                                </div>
                                <div className="flex flex-row justify-between items-center gap-x-3">
                                    <div className="flex items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.total)} precision={0.1} className=""/>
                                    </div>
                                    <div className="">
                                        {siteData.overview.rating.total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-end gap-x-5">
                        <div>
                            <Button
                                className="text-blue border border-inherit border-solid h-10 text-xs xl:text-base"
                                href={"https://" + siteData.link}
                                endIcon={<div className="px-2 rounded-full bg-orange-400 text-white  text-xs xl:text-base">{siteData.bonus}</div>}
                            >
                                Claim Bonus
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="text-white h-10  text-xs xl:text-base"
                                variant="contained"
                                color="primary"
                                startIcon={<OpenInNewIcon/>}
                                href={"https://" + siteData.link}
                                target="_BLANK"
                            >
                                VISIT WEBSITE
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-5 relative">
                    <div className="flex flex-col">
                        {/* Overview */}
                        <div id="overview-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10">
                            <div className="flex flex-row gap-x-5">
                                <div className="flex justify-center items-center">
                                    <InfoOutlinedIcon/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        {siteData.name} Overview
                                    </div>
                                    <div className="text-base">
                                        It's all about that crypto!
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col">
                                    <div className="text-base">
                                        {siteData.overview.summary}
                                    </div>
                                    {/* accepted cryptocurrencies */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Accepted Cryptocurrencies
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-5">
                                            { 
                                                cryptocurrenciesObj.map((data: any, index: number) => {
                                                    return (
                                                        <div key={index} className="flex flex-row gap-2 justify-center items-center bg-gray-300 px-3 py-1 rounded-full">
                                                            <div>
                                                                <img 
                                                                    src={data.img} 
                                                                    alt="CoinImg"
                                                                    className="w-5 h-5">
                                                                </img>
                                                            </div>
                                                            <div className="text-base">
                                                                {data.name}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* available games */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Available Games
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            { 
                                                gamesObj.map((data: any, index: number) => {
                                                    return (
                                                        <div key={index} className="flex flex-col gap-2 justify-center items-center w-24 py-1 border">
                                                            <div>
                                                                <img 
                                                                    src={data.img} 
                                                                    alt="CoinImg"
                                                                    className="h-10">
                                                                </img>
                                                            </div>
                                                            <div className="text-center">
                                                                {data.name}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* supported languages */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Supported Languages
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <GB className="h-5 rounded-full" />
                                                <div className="text-base">English</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <DE className="h-5 rounded-full" />
                                                <div className="text-base">Germany</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <JP className="h-5 rounded-full" />
                                                <div className="text-base">Japanese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <ES className="h-5 rounded-full" />
                                                <div className="text-base">Spanish</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* pogs and cons */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Pros & Cons
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            <div className="flex flex-col xl:flex-row gap-3">
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Easy registration</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Large variety of games</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Sportsbook available</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Emphasys on privacy</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Functional website</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Daily cashbacks</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Long list of game providers</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Crypto purchases available from website</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No fiat payments</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">Withdrawal fees</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">x3 wagering requirement for ALL deposits</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-min order-first xl:order-last gap-y-5">
                                    <div className="flex items-center justify-center relative">
                                        <CircularProgress 
                                            size={100} 
                                            thickness={2} 
                                            sx={{color: 'lightgray'}} 
                                            variant="determinate" 
                                            value={100} 
                                            className="absolute"
                                        />
                                        <CircularProgress 
                                            size={100} 
                                            thickness={2} 
                                            sx={Number(siteData.overview.rating.total) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                            variant="determinate" 
                                            value={Number(siteData.overview.rating.total) * 20} 
                                        />
                                        <div className="absolute flex items-center justify-center inset-0 text-3xl">{siteData.overview.rating.total}</div>
                                    </div>
                                    <div className="text-3xl flex items-center justify-center">
                                        Overall Rating
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        { Number(siteData.overview.rating.bonus) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Bonuses
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.bonus}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.bonus)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.lookAndFeel) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Look & Feel
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.lookAndFeel}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.lookAndFeel)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.LicenceAndSafety) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Licencing & Safety
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.LicenceAndSafety}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.LicenceAndSafety)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.gameSelection) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Game Selection
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.gameSelection}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.gameSelection)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.paymentOption) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Payment Options
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.paymentOption}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.paymentOption)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.customerSupport) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Customer Support
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.customerSupport}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.customerSupport)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.customerReview) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Customer Reviews
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.customerReview}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.customerReview)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                    </div>
                                    {/* right overview  2*/}
                                    <div className="flex flex-col border mt-10">
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Website
                                            </div>
                                            <Button
                                                className="text-blue text-base lowercase text-end"
                                                endIcon={<OpenInNewIcon className="w-4"/>}
                                                href={"https://" + siteData.link}
                                                target="_BLANK"
                                            >
                                                {siteData.link}
                                            </Button>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                Established
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.established ? siteData.overview.established : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Licence
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.licence ? siteData.overview.licence : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                Bonus
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.bonus ? siteData.overview.bonus : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Wagering Requirement
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.wageringRequrement ? siteData.overview.wageringRequrement : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                No Deposit Bonus
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.noDepositFaucet ? siteData.overview.noDepositFaucet : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Live Chat
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.liveChat}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bonus */}
                        <div id="bonus-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <CardGiftcardOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Bonuses
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Take off with a stellar welcome bonus!
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.bonus) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.bonus) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.bonus}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        At Rocketpot, you're entitled to a straightforward Bitcoin bonus that matches your first deposit with up to 1 BTC in bonus money.
                                    </div>
                                    <div>
                                        Here's how it works:
                                    </div>
                                    {/* timeline 1 */}
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Sign up at Rocketpot.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Choose Bitcoin as your selected currency.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Make your deposit and claim the 100% deposit bonus.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">4</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Get up to 1 BTC on top of your deposit.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Is Rocketpot's Bitcoin Welcome Bonus Worth It?
                                    </div>
                                    <div>
                                        Since not all Bitcoin casinos offer welcome bonuses, the mere existence of Rocketpot's offer is an advantage when compared with brands like Roobet that don't have them.
                                    </div>
                                    <div>
                                        But there's no rose without thorns, and there are a few catches with this promotion:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            It's only valid if you pick Bitcoin as your deposit method: while you can use other cryptocurrencies at Rocketpot, they're not eligible for the bonus.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black  mt-[11px]"></div>
                                        <div>
                                            Its 100x wagering requirement (requiring you to play through your bonus a total of 100 times) is considerably higher than similar offers.
                                        </div>
                                    </div>
                                    <div>
                                        Additionally, other Bitcoin welcome bonuses are more generous than Rocketpot's. True Flip, for instance, gives you 30 free spins for simply completing your signup process, with a very palatable wagering requirement of x1.
                                    </div>
                                    <div>
                                        Does that mean you should pick True Flip over Rocketpot exclusively because it gives you a better newcomer deal? We don't think so. Keep reading to find out why.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other Promotions - Rocketpot's Daily Cashback and Loyalty Rewards
                                    </div>
                                    <div>
                                        Rocketpot's daily cashback lets you win back <span className="font-bold">10% of your net losses</span> on a daily basis, as long as you played at least 30$ the previous day.
                                    </div>
                                    <div>
                                        It's perhaps not the most enticing offer, but it's solid and consistent and especially relevant if you play regularly.
                                    </div>
                                    <div>
                                        High rollers will also be pleased with the brand's VIP program, which rewards your loyalty with <span className="font-bold">unlockable chests that give guaranteed mBTC prizes:</span>
                                    </div>
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Every time you place a bet, you <span className="font-bold">collect experience points.</span>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Bets with bonus money only accumulate 1/3 of the experience points.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        When you gather enough experience points, you will <span className="font-bold">level up.</span>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">4</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        You will unlock a chest with a <span className="font-bold">guaranteed mBTC prize</span> when you reach a new level.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">5</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        The rewards are random, <span className="font-bold">but the higher the level, the better</span> the potential rewards.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        There is a fun, gamified component to leveling up: inside each chest, there's a "free spin" to a wheel of fortune. Spinning that wheel is what will unveil your final mBTC prize!
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">10% daily cashback</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fun and engaging VIP rewards</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">High wagering requirements</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Only available in BTC</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Claim Bonus
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Look and Feel */}
                        <div id="lookFeel-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <AdUnitsOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Look & Feel
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Simple Design, Some Navigation Flaws
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.lookAndFeel) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.lookAndFeel) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.lookAndFeel}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        Rocketpot has a clean and streamlined design without particular visual appeal.
                                    </div>
                                    <div>
                                        We don't necessarily find the website unattractive: we just don't think it's special, and that's ok. It doesn't have to be.
                                    </div>
                                    <div>
                                        The issue comes when design affects functionality. And, unfortunately, we have one complaint there:
                                    </div>
                                    <div>
                                        ❌ <span className="font-bold">The casino lobby navigation is somewhat confusing</span>, lacking the option to filter games by provider.
                                    </div>
                                    <div>
                                        Let's take the slots section for example:
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg1}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        You can see the slot thumbnails clearly. However, there is no way to filter by provider to find your favorite games - Arena of Gold by Microgaming appears alongside Aztec Magic by bgaming and Bonanza by Big Time Gaming.
                                    </div>
                                    <div>
                                        Since this isn't just a 'prettiness' issue, but a functionality problem, we took off a point for this section.
                                    </div>
                                    <div>
                                        If there's something that deserves extra praise, however, it is the sign-up process. You have to:
                                    </div>
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Click sign up
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Insert your email
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Choose a user name and password
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        That's it! Rocketpot <span className="font-bold">doesn't request any personal information</span> apart from your email, and you can even use a suggested password and username combination if you wish.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Rocketpot's Mobile Experience
                                    </div>
                                    <div>
                                        Like most Bitcoin casinos these days, Rocketpot is fully optimized for smaller screens and an "on-the-go" experience.
                                    </div>
                                    <div>
                                        Rocketpot might not offer an app, but you don't need one: the mobile version of the website is responsive and easy to use on both iOS and Android devices.
                                    </div>
                                    <div className="w-[350px] xl:w-[600px] flex justify-center">
                                        <Swiper
                                            slidesPerView={1}
                                            navigation={{
                                                prevEl: '.Swiper-prev',
                                                nextEl: '.Swiper-next'
                                            }}
                                            pagination={true}
                                            modules={[Navigation, Pagination]}
                                        >
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img 
                                                        className=""
                                                        src={reviewImg2}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                                
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img 
                                                        className=""
                                                        src={reviewImg3}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img 
                                                        className=""
                                                        src={reviewImg4}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
                                            <div className="Swiper-prev">
                                                <Fab className="bg-[#272822] text-white" aria-label="prev" color="default" size="small">
                                                    <NavigateBefore />
                                                </Fab>
                                            </div>
                                            <div className="Swiper-next">
                                                <Fab className="bg-[#272822] text-white" aria-label="next" color="default" size="small">
                                                    <NavigateNext />
                                                </Fab>
                                            </div>
                                        </Swiper>
                                    </div >
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Easy registration</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Functional design</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Can't filter games by provider</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Game Selection */}
                        <div id="gameSelection-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <MobileFriendlyOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Game Selection
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            A jaw-dropping variety of games
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.gameSelection) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.gameSelection) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.gameSelection}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        When reviewing a casino, we often list what game types are available.
                                    </div>
                                    <div>
                                        In total, there are <span className="font-bold">more than 3,000 games</span>, from slot machines to live tables, and much more.
                                    </div>
                                    <div>
                                        When we first reviewed this casino, we were disappointed to notice there was no Rocketpot Crash game available. Luckily, this is no longer the case - you can, indeed, play the trading-inspired game although Rocketpot calls it Space XY:
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg5}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                    Space XY is a Crash-type game, available at Rocketpot
                                    </div>
                                    <div>
                                        While some games are provably fair, they are not identified as such. Additionally, Rocketpot doesn't offer any exclusive games.
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="font-bold text-gray-400">
                                            TOP TIP!
                                        </div>
                                        <div className="text-white font-bold text-2xl">
                                            Use the search bar to find provably fair games by Bgaming!
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Slot Games at Rocketpot
                                    </div>
                                    <div>
                                        Rocketpot has one of the largest collections of slot machines that we've seen at a Bitcoin casino, with <span className="font-bold">more than 2,600 games</span> from a smorgasbord of different providers.
                                    </div>
                                    <div>
                                        This veritable slot machine feast includes titles from powerhouses like:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                NetEnt
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Microgaming
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Yggdrasil
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                ...and 50 other providers!
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        There was no slot machine that we looked for we couldn't find, which is something we rarely say.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Live Casino Games
                                    </div>
                                    <div>
                                        All the infamous live blackjack and live roulette tables from Ezugi and Evolution are available at Rocketpot and fully playable with Bitcoin and other cryptocurrencies.
                                    </div>
                                    <div>
                                        You can also play:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Live game shows
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Live dice
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Casino poker
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Baccarat
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Sic Bo
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Rocketpot's Sportsbook
                                    </div>
                                    <div>
                                        Rocketpot may have a jaw-dropping amount of casino brands, but there's more to this brand than just slot machines and live tables.
                                    </div>
                                    <div>
                                        There is also a decent sportsbook featuring in-play and pre-match odds.
                                    </div>
                                    <div>
                                        It might not be the most popular Bitcoin sports betting site - it's hard to take that title from more established brands like Cloudbet and Stake - but it still comes with:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Decent odds on mainstream sports
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            eSports markets
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Live streaming (on selected matches)
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Rocketpot Vs Competition
                                    </div>
                                    <div>
                                        So, how does Rocketpot compare to other major brands like <a href="https://bc.game/" target="_blank" rel="noreferrer" className="text-blue-600">BC.Game</a> and <a href="https://stake.com/" target="_blank" rel="noreferrer" className="text-blue-600">Stake</a>?
                                    </div>
                                    <div>
                                        In terms of games:
                                    </div>
                                    <div>
                                        ? <span className="font-bold">Rocketpot has 3,000+ games</span>, including slots, table games, and a live casino.
                                    </div>
                                    <div>
                                        BC.Game offers a whooping 5,000+ games, while Stake has around 3,000.
                                    </div>
                                    <div>
                                        <span className="font-bold">? Rocketpot doesn't have in-house developed options.</span>
                                    </div>
                                    <div>
                                        Both BC.Game and Stake have original productions, which are also provably fair. True Flip has even nicer (better designed, more polished) original games, but they're not provably fair.
                                    </div>
                                    <div>
                                        <span className="font-bold">? Rocketpot has sport betting on 20+ different disciplines.</span>
                                    </div>
                                    <div>
                                        BC.Game lacks a sportsbook. Stake has a much more polished sports betting option, though. Their sportsbook features all major events and even boasts key partnerships with your favorite athletes.
                                    </div>
                                    <div>
                                        All in all, Rocketpot has a decent game offer, but there is definitely room for improvement. Which leads us to the question:
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Are Rocketpot's Games Enough?
                                    </div>
                                    <div>
                                        The answer to this question is clear: yes!
                                    </div>
                                    <div>
                                        What else can you wish for when you have more than 3,000 games to choose from?
                                    </div>
                                    <div>
                                        There are two areas, however, where we think Rocketpot could up its game:
                                    </div>
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="text-base font-bold">
                                                            Improving Game Navigation
                                                        </div>
                                                        <div>
                                                            While there were provably fair games at Rocketpot, we mentioned before that they were hard to find. The same is true for slot machines with specific features or whole game types like keno or poker.
                                                        </div>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="font-bold">
                                                            Adding Exclusive Games
                                                        </div>
                                                        <div>
                                                            Smaller brands, and even humble gambling Dapps like Earnbet, offer unique provably fair games, while Rocketpot doesn't. It wouldn't be an issue for more mainstream casinos, but originality and provable fairness are fundamental in the world of cryptocurrency casinos.
                                                        </div>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        It's important to say that none of these aspects is a deal-breaker, just areas where the brand could improve.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">3,000+ games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Sports betting available</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">All the popular providers</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No exclusive games</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Licensing & Safety */}
                        <div id="licensing-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <VerifiedOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Licensing & Safety
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            A trustworthy newcomer
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.LicenceAndSafety) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.LicenceAndSafety) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.LicenceAndSafety}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        You may be wondering: is Rocketpot legit?
                                    </div>
                                    <div>
                                        Considering how recent the brand is, this is a fair question: after all, newer cryptocurrency casinos have to prove themselves worthy of the public's trust.
                                    </div>
                                    <div>
                                        One thing that works in the casino's favor is that it holds a <a href="https://rocketpot.io/static/pdf/rocketpot.io.063bf704d979.pdf" target="_blank" rel="noreferrer" className="text-blue-600">Curaçao eGaming license</a>. We always recommend against playing at unlicensed casinos, especially if they are brand-new.
                                    </div>
                                    <div>
                                        While negative surprises may happen, licensed casinos like Rocketpot are much less likely to scam you out of your money.
                                    </div>
                                    <div>
                                        On the flipside, the license obliges Rocketpot to run Know Your Consumer (KYC) checks. These usually happen for larger withdrawals - and they're obligatory if you cash out over $2,500. As per the Terms & Conditions:
                                    </div>
                                    <div>
                                        11.4. Rocketpot reserves the right to carry out KYC verification procedures before processing <span className="font-bold">withdrawals exceeding the equivalent of 0.05 BTC or $2,500</span>. Rocketpot reserves the right to carry out such verification procedures in case of smaller withdrawals, as demanded by our gaming license.
                                    </div>
                                    <div>
                                        A smaller withdrawal amount is less likely to trigger a KYC, but you still might get checked at any time. To avoid any issues, provide truthful information at every step. We're happy to report the KYC is fairly quick and painless that way.
                                    </div>
                                    <div>
                                        Much like most of their counterparts, Rocketpot offers additional safety features, like:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                SSL encryption on data
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                2-factor authentication on login
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        What About Rocketpot's Games? Are They Fair?
                                    </div>
                                    <div>
                                        Unlike other cryptocurrency casinos, only a fraction of Rocketpot's games is provably fair. That is, you can only verify the fairness of some of their games (namely, those from Bgaming) yourself.
                                    </div>
                                    <div>
                                        For all the other games, you have to trust the casino's reputation, its licensing entity, and the game provider.
                                    </div>
                                    <div>
                                        Since Rocketpot games come from reputable, well-known game studios, we can confidently say that we <span className="font-bold">trust their RNG's fairness</span>. However, as usual, we'd prefer to see more provably fair games.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Where Is Rocketpot Available?
                                    </div>
                                    <div>
                                        While Rocketpot does not request personal information from users (unless they withdraw considerable sums of money, more on that below), they exclude players from certain countries in their terms and conditions.
                                    </div>
                                    <div>
                                        The list of excluded countries includes territories where online gambling is regulated or restricted, like:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                United Kingdom
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                France
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                The Netherlands
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Spain
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        If you currently reside in one of these countries, please keep that in mind if you're considering opening an account at Rocketpot.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Rocketpot Vs Competitors
                                    </div>
                                    <div>
                                        So, how does Rocketpot stack up to other major brands? Here's what you should know:
                                    </div>
                                    <div>
                                        ? <span className="font-bold">Rocketpot holds a Curaçao gambling license</span>, which provides extra peace-of-mind to players.
                                    </div>
                                    <div>
                                        The Curaçao license is fairly standard in the gambling industry. In fact, all three of our top favorites (BC.Game, Stake, and True Flip) have it.
                                    </div>
                                    <div>
                                        ? <span className="font-bold">Rocketpot runs KYC checks</span> at withdrawal.
                                    </div>
                                    <div>
                                        This is also common with online casinos. Both BC.Game and Stake will let you play without confirming your identity. True Flip rewards you for completing KYC (you get free spins), but the check is not a must to play.
                                    </div>
                                    <div>
                                        Come withdrawal, Rocketpot tells you when KYC is more likely (with larger withdrawals), whereas their competitors don't give out this information.
                                    </div>
                                    <div>
                                        ? <span className="font-bold">Rocketpot restricts certain territories</span> like the US and UK.
                                    </div>
                                    <div>
                                        Unfortunately, this is also reasonably standard. Since these markets are more regulated, online casinos are either completely cut off, or need a stricter license to operate.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Curaçao License</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">SSL encryption</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">2-factor authentication</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Privacy oriented</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Some restricted territories</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Payment Options */}
                        <div id="payment-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <AccountBalanceWalletOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Payment Options
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Crypto-exclusive casino with fast payments
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.paymentOption) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.paymentOption) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.paymentOption}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        Rocketpot is a cryptocurrency-exclusive casino. That means that, unfortunately, you won't be allowed to play with fiat money (like CAD or USD) here.
                                    </div>
                                    <div>
                                        Instead, a considerable amount of cryptocurrencies are available, including the following:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Bitcoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Binance
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Cardano
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Dogecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Ethereum
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Litecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Ripple
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        The lack of fiat payments isn't necessarily a deal-breaker since our reviews primarily focus on cryptocurrency payments. However, having choices is always a plus, and other casinos that offer the same payment options go the extra mile.
                                    </div>
                                    <div>
                                        True Flip casino, for instance, allows for Tether and Ripple payments, and it even has its in-house token. For a full list of casinos accepting other coins, please check our cryptocurrencies section.
                                    </div>
                                    <div>
                                        However, Rocketpot does have an in-house cryptocurrency exchange where you can buy crypto using credit cards directly from the website.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Payment Speed And Safety
                                    </div>
                                    <div>
                                        As expected from a cryptocurrency-exclusive casino, <span className="font-bold">all payments are processed instantly</span>.
                                    </div>
                                    <div>
                                        This is true for both deposits and withdrawals. However, in extraordinary circumstances, withdrawals may be delayed due to a <span className="font-bold">user verification check</span>.
                                    </div>
                                    <div>
                                        User verification, or Know Your Customer checks, are becoming the norm, even at privacy-minded casinos like Rocketpot. They are a regulator requirement and are in place mostly to counter fraudulent activities, like money laundering.
                                    </div>
                                    <div>
                                        From our understanding, the casino only <span className="font-bold">performs KYC checks if you withdraw more than 0.05 BTC</span> or if otherwise required by the regulator. Additionally, we advise you always to provide accurate information if the casino requests it.
                                    </div>
                                    <div>
                                        When we tested the payment processing, we kept our deposits and withdrawals low and didn't have to provide any personal data.
                                    </div>
                                    <div>
                                        While all transactions were fast, they weren't "instant". As expected from Bitcoin transactions, they sometimes took <span className="font-bold">up to 30 minutes</span> to arrive for both deposits and withdrawals.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Deposits and Withdrawals At Rocketpot
                                    </div>
                                    <div>
                                        There are a few costs and transaction limits that you should be aware of when playing at Rocketpot:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Minimum Deposits:</span> 0.01 BTC/ETH/LTC, etc
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Maximum Deposits:</span> none
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Minimum Withdrawals:</span> 0.002 BTC
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Maximum Withdrawals:</span> $10,000
                                        </div>
                                    </div>
                                    <div>
                                        Do note that there is a <span className="font-bold">0.0006 BTC/ETH/LTC transaction fee</span>, which is standard at cryptocurrency casinos. This doesn't make a lot of sense to us - 0.0006 BTC doesn't cost the same as 0.0006 LTC. With this rule, Rocketpot is effectively punishing players that use 'more expensive' cryptos.
                                    </div>
                                    <div>
                                        You should also be aware that you must deposit and withdraw using the same cryptocurrency. That is, if you deposited using Bitcoin, you could not withdraw your winnings in Ether.
                                    </div>
                                    <div>
                                        Another issue we found with withdrawals was the <span className="font-bold">x3 wagering requirement</span>. You read that right! You should wager x3 your original deposit amount to be allowed to cash out. That's much higher than competitors and it's definitely a major drawback.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fast payments</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Easy to withdraw</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Variety of cryptos</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Withdrawal fee</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">x3 wagering requirement on all bets</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No fiat</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Customer Support */}
                        <div id="customer-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <MarkChatReadOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Customer Support
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Polite and fast live chat
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.customerSupport) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.customerSupport) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.customerSupport}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        You can reach out to the customer support team via:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Email
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Live chat (available 24/7)
                                        </div>
                                    </div>
                                    <div>
                                        Additionally, you can also use the brand's FAQ if you're looking for more general information. While it's not the most in-depth FAQ guide that we've come across, we found it to cover the most common questions related to bonuses, payments, and related to your account.
                                    </div>
                                    <div>
                                        Even before creating an account at Rocketpot, we tested its customer support channels.
                                    </div>
                                    <div>
                                        Our experience was positive before and after registering, although we thought there was some <span className="font-bold">room for improvement when it came to the email support</span>, which could have been faster.
                                    </div>
                                    <div>
                                        Unless directed otherwise by the live chat team, we suggest you use the live chat as your preferential method of contact with the brand, as, in our experience, it was faster and more useful.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fast and friendly</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Only live chat and email available</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ */}
                        <div id="faq-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-5 mt-10">
                            {/* header */}
                            <div className="flex flex-row gap-x-5">
                                <div className="flex justify-center items-center">
                                    <ContactSupportOutlinedIcon/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        F.A.Q.
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Rocketpot in a Nutshell
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Is Rocketpot legit?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        In our opinion, <a href={"https://" + siteData.link} target="" rel="noreferrer" className="text-blue-600">Rocketpot</a> is a new but trustworthy casino. The brand holds a gambling license from Curaçao and offers additional safety features, including 2-factor authentication.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. Are the games fair at Rocketpot?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        Since the games at <a href={"https://" + siteData.link} target="" rel="noreferrer" className="text-blue-600">Rocketpot</a> are from reputable providers, we can confidently say that they are fair. What's more, some of their games are provably fair.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. In what countries is Rocketpot available?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        <a href={"https://" + siteData.link} target="" rel="noreferrer" className="text-blue-600">Rocketpot</a> is currently open to players from all over the world, excluding a few countries where online gambling is restricted. These include the United States, United Kingdom, France, and The Netherlands.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ4(!openFAQ4) }}
                                >
                                    4. Is Rocketpot an anonymous casino?
                                </div>
                                {openFAQ4 &&
                                    <div className="text-black mt-5">
                                        For the most part, yes, you can play at <a href={"https://" + siteData.link} target="" rel="noreferrer" className="text-blue-600">Rocketpot</a> anonymously. However, if you withdraw large amounts of money, you may have to provide personal details.
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[300px] bg-white rounded-xl hidden xl:flex flex-col px-1 py-5 h-min shadow-xl fixed xl:sticky top-20 xl:top-10">
                        <Button
                                className="rightbarBtn overview-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<InfoOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#overview-section"
                            >
                                {siteData.name} Overview
                        </Button>
                        <Button
                                className="rightbarBtn bonus-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<CardGiftcardOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#bonus-section"
                            >
                                Bonuses
                        </Button>
                        <Button
                                className="rightbarBtn lookFeel-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<AdUnitsOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#lookFeel-section"
                            >
                                Look & Feel
                        </Button>
                        <Button
                                className="rightbarBtn gameSelection-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<MobileFriendlyOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#gameSelection-section"
                            >
                                Game Selection
                        </Button>
                        <Button
                                className="rightbarBtn licensing-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<VerifiedOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#licensing-section"
                            >
                                Licensing & Safety
                        </Button>
                        <Button
                                className="rightbarBtn payment-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<AccountBalanceWalletOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#payment-section"
                            >
                                Payment Options
                        </Button>
                        <Button
                                className="rightbarBtn customer-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<MarkChatReadOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#customer-section"
                            >
                                Customer Support
                        </Button>
                        <Button
                                className="rightbarBtn faq-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<ContactSupportOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#faq-section"
                            >
                                F.A.Q
                        </Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </Box>
    )
}

export default RocketpotGameReview;