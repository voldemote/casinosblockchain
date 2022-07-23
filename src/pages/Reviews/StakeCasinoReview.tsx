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
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

import TopBar from "../../components/Common/Topbar";
import Footer from "../../components/Common/Footer";
import {siteDatas} from "../../Interfaces/SiteDatas";

// crypto images
import bitcoinCryptoImg from "../../Assets/images/cryptocurrency/bitcoin.png";
import bitcoinCashCryptoImg from "../../Assets/images/cryptocurrency/bitcoin-cash.png";
import dogecoinCryptoImg from "../../Assets/images/cryptocurrency/dogecoin.png";
import etherCryptoImg from "../../Assets/images/cryptocurrency/ether.png";
import litecoinCryptoImg from "../../Assets/images/cryptocurrency/litecoin.png";
import rippleCryptoImg from "../../Assets/images/cryptocurrency/ripple.png";
import tronCryptoImg from "../../Assets/images/cryptocurrency/tron.png";

// game images
import baccaratGameImg from "../../Assets/images/games/baccarat.png";
import blackjackGameImg from "../../Assets/images/games/blackjack.png";
import crashGameImg from "../../Assets/images/games/crash.png";
import diceGameImg from "../../Assets/images/games/dice.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";
import kenoGameImg from "../../Assets/images/games/keno.png";
import plinkoGameImg from "../../Assets/images/games/plinko.png";
import sportsBettingGameImg from "../../Assets/images/games/sports-betting.png";
import rouletteGameImg from "../../Assets/images/games/roulette.png";
import slotsGameImg from "../../Assets/images/games/slots.png";

// review images
import reviewImg1 from "../../Assets/images/reviews/2-stake-game/1-stake-reivew.png";
import reviewImg2 from "../../Assets/images/reviews/2-stake-game/2-stake-reivew.png";
import reviewImg3 from "../../Assets/images/reviews/2-stake-game/3-stake-reivew.png";
import reviewImg4 from "../../Assets/images/reviews/2-stake-game/4-stake-reivew.png";
import reviewImg5 from "../../Assets/images/reviews/2-stake-game/5-stake-reivew.png";
import reviewImg6 from "../../Assets/images/reviews/2-stake-game/6-stake-reivew.png";
import reviewImg7 from "../../Assets/images/reviews/2-stake-game/7-stake-reivew.png";
import reviewImg8 from "../../Assets/images/reviews/2-stake-game/8-stake-reivew.png";
import reviewImg9 from "../../Assets/images/reviews/2-stake-game/9-stake-reivew.png";
import reviewImg10 from "../../Assets/images/reviews/2-stake-game/10-stake-reivew.png";
import reviewImg11 from "../../Assets/images/reviews/2-stake-game/11-stake-reivew.png";
import reviewImg12 from "../../Assets/images/reviews/2-stake-game/12-stake-reivew.png";
import reviewImg13 from "../../Assets/images/reviews/2-stake-game/13-stake-reivew.png";
import reviewImg14 from "../../Assets/images/reviews/2-stake-game/14-stake-reivew.png";

// country flag
import { CN, GB, FR, DE, ID, JP, KR, PL, PT, RU, ES, PH, TR, VN } from 'country-flag-icons/react/1x1';

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
        img: bitcoinCryptoImg,
        name: "Bitcoin"
    },
    {
        img: bitcoinCashCryptoImg,
        name: "Bitcoin Cash"
    },
    {
        img: dogecoinCryptoImg,
        name: "Dogecoin"
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
        img: rippleCryptoImg,
        name: "Ripple"
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
        img: crashGameImg,
        name: "Crash"
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
        img: plinkoGameImg,
        name: "Plinko"
    },
    {
        img: rouletteGameImg,
        name: "Roulette"
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

const StakeCasinoReview = () => {
    const siteData = siteDatas[1];

    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);
    const [openFAQ4, setOpenFAQ4] = useState(false);
    const [openFAQ5, setOpenFAQ5] = useState(false);

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
                                        A provably fair and cool alternative to most online casinos
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
                                                            <div>
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
                                                <CN className="h-5 rounded-full" />
                                                <div className="text-base">Chinese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <GB className="h-5 rounded-full" />
                                                <div className="text-base">English</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <FR className="h-5 rounded-full" />
                                                <div className="text-base">French</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <DE className="h-5 rounded-full" />
                                                <div className="text-base">Germany</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <ID className="h-5 rounded-full" />
                                                <div className="text-base">Indonesian</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <JP className="h-5 rounded-full" />
                                                <div className="text-base">Japanese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <KR className="h-5 rounded-full" />
                                                <div className="text-base">Korean</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PL className="h-5 rounded-full" />
                                                <div className="text-base">Polish</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PT className="h-5 rounded-full" />
                                                <div className="text-base">Portuguese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <RU className="h-5 rounded-full" />
                                                <div className="text-base">Russian</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <ES className="h-5 rounded-full" />
                                                <div className="text-base">Spanish</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PH className="h-5 rounded-full" />
                                                <div className="text-base">Tagalog</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <TR className="h-5 rounded-full" />
                                                <div className="text-base">Turkish</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <VN className="h-5 rounded-full" />
                                                <div className="text-base">Vietnamese</div>
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
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Exclusive games</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">A lot of transparency</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Experienced operator</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Rewarding promotions</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Live chat support</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Strong community feel</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-green-900">+</div>
                                                        <div className="text-base">Provably fair</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-red-900">-</div>
                                                        <div className="text-base">No welcome bonus</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 rounded-full text-base w-5 h-5 flex text-center justify-center items-center text-red-900">-</div>
                                                        <div className="text-base">KYC check is necessary</div>
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
                                            Get social and reap the benefits
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
                                    <div className="text-base">
                                        At the moment, Stake Casino doesn't offer any welcome bonus. Instead of luring you in with a one-time deal, they offer a very transparent, social, and engaging experience.
                                    </div>
                                    <div className="text-base">
                                        And - don't worry - there are still many other promotions. So whether you prefer playing at the casino or placing sports bets, there are <span className="font-bold">regular bonuses and exciting challenges</span> at any given time. Just not a welcome bonus.
                                    </div>
                                    <div>
                                        If a traditional welcome offer is something you're looking for, brands like BitStarz and Fortunejack have very generous Bitcoin bonuses. However, <span className="font-bold">we would still recommend Stake over both</span> of these casinos, even with bonuses and promotions.
                                    </div>
                                    <div>
                                        Plus, you can still take advantage of one of the most generous regular offers at blockchain casinos. To make it easy for you, we update this article with the current promotions every week:
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Recurring Promotions
                                    </div>
                                    <div>
                                        Every week the Stake introduces a new time-sensitive promo offer. While the details change (and we recommend keeping an eye on the forum threads to learn about them), there are some recurring themes:
                                    </div>
                                    <div className="font-bold">
                                        Stake's Favorite Series
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg1}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        High stakes, low house edge - that's what Stake's blackjack game is all about!
                                    </div>
                                    <div>
                                        Every week, the Stake team <span className="font-bold">dedicates a challenge to the TV show they've been loving.</span> These game-based challenges boast solid prize pools - the recent blackjack one offered up to $3,000!
                                    </div>
                                    <div>
                                        The best news? Anyone that completes the challenge is entitled to a part of the prize money, no questions asked. Level one and level two verified accounts get additional prizes, too.
                                    </div>
                                    <div className="font-bold">
                                        Slot Challenge
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg2}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Follow the jolly Fat Banker as he enjoys the luxuries of 1920s New York!
                                    </div>
                                    <div>
                                        Every week Stake does a <span className="font-bold">slot challenge to encourage you to try new things</span>. And, hey, it works! Our favorite recent discovery was the Fat Banker slot, which embraces the glitz and glamor of Gatsby-era NY.
                                    </div>
                                    <div>
                                        The prize pool for slot challenges is usually around $2,000.
                                    </div>
                                    <div className="font-bold">
                                        Perfect 10
                                    </div>
                                    <div>
                                        Do you prefer a sports betting challenge? Look no further than the Perfect 10 competition.
                                    </div>
                                    <div>
                                        To get your portion of the prize pool, you have to <span className="font-bold">win a multi-bet on several matches</span> (some weeks it's for a specific sport) and post your bet ID to the thread.
                                    </div>
                                    <div>
                                        Once again, the prize pool is distributed among everyone that completes the challenge. There are additional prizes for verified accounts - and, of course, for hitting that elusive x100.
                                    </div>
                                    <div className="font-bold">
                                        Total Points Predictions
                                    </div>
                                    <div>
                                        The weekly basketball Total Points Predictions asks you to guess <span className="font-bold">how many points will be scored in the Team1 vs Team2 match.</span>
                                    </div>
                                    <div>
                                        Plus, there is a tiebreaker - guess how many points one of the teams will have at the end of the 3rd quarter.
                                    </div>
                                    <div>
                                        Post your thoughts and predictions in the forum thread and keep your fingers crossed!
                                    </div>
                                    <div className="font-bold">
                                        VIP Promotions
                                    </div>
                                    <div>
                                        VIP members are treated to some <span className="font-bold">unique promos every week</span>. These include a game-specific challenge, along with an additional slot competition.
                                    </div>
                                    <div>
                                        Even better, VIP and verified members also get <span className="font-bold">extra rewards if they win any of the other casino and sports betting challenges.</span>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Weekly Giveaway - Chance to Win $5,000 Every Week
                                    </div>
                                    <div>
                                        One of Stake's most popular promotions at the moment is its weekly giveaway, giving out anything from $50,000 to $150,000 in Bitcoin every Saturday.
                                    </div>
                                    <div>
                                        While the full amount of the prize pool can change from week to week, the amount given to each player remains the same: $5,000 on every prize draw. That is, what changes is the number of players rewarded, not the prize itself.
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
                                                        <span className="font-bold">Open an account:</span> the giveaway is available to all Stake players
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
                                                        <span className="font-bold">Play:</span> for every $1,000 you wager at the casino or sportsbook, you win a raffle ticket
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
                                                        <span className="font-bold">Watch:</span> follow the live draw on stream every Saturday at 2:00 pm GMT
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
                                                        <span className="font-bold">Win:</span> if you're one of the lucky winners, you go home with a <span className="font-bold">$5,000 prize with no wagering requirements!</span>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    {/*  */}
                                    <div>
                                        You can earn as many tickets as you want, to increase your chance of winning a prize.
                                    </div>
                                    <div>
                                        <span className="font-bold">But is it worth it?</span> It depends. In our opinion, Stake's giveaway is worthwhile for regular players who mostly gamble at Stake. On the other hand, more occasional players may struggle to meet the $1,000 minimum threshold for the raffle.
                                    </div>
                                    <div>
                                        Overall, it's a decent offer, but it might not be for everyone. Luckily, Stake has a few more tricks up its sleeve.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        VIP Program
                                    </div>
                                    <div>
                                        If you play your cards right and have proven your loyalty to the casino, you may receive an invitation to Stake's VIP program.
                                    </div>
                                    <div>
                                        Here's what you can expect:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Dedicated account managers
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Exclusive, on-demand bonuses
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Flexible, tailor-made offers, including exclusive goodies
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Regular level-up bonuses, reload bonuses, rake backs, and more.
                                        </div>
                                    </div>
                                    <div>
                                        You will start with a few bonuses, then progress to exclusive goodies, and end in luxurious trips to gambling capitals worldwide.
                                    </div>
                                    <div>
                                        Moreover, none of the offers come with strings attached: all of the <span className="font-bold">bonuses are 100% wager-free</span> and instantly <span className="font-bold">available for withdrawal!</span>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other Available Bonuses
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Stake Races:</span> Race against your new and existing friends in the Stake community for a chance to win decent prizes.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Telegram Challenges:</span> Join the Stake Telegram channel and get notified about the daily promotions. Some prizes are definitely worth the effort.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Special Offers:</span> Play for a $212K Lamborghini, try a new strategy with a sports money-back offer, double your winnings, and more!
                                        </div>
                                    </div>
                                    <div>
                                        If you take part in the Stake gambling Community, you will be entitled to even more benefits. All you have to do is having an active presence on Stake Casino's chat and forum.
                                    </div>
                                    <div>
                                        What's more, as the official sponsors of MMA legend <span className="font-bold">Israel Adesanya</span>, Stake also gives you the chance to win triple on his fights!
                                    </div>
                                    <div>
                                        As you can see, there is a wealth of offers available for casino and sports players alike. With so much on offer, we can easily recommend Stake for your gambling needs.
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
                                            <div className="w-[230px]">Weekly giveaway</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Great VIP program</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Stake Community benefits</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Money back offers for sports</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No welcome bonus</div>
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
                                            A breath of fresh air
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
                                        Modern. Crisp. Welcoming.
                                    </div>
                                    <div>
                                        Stake Casino might have a clean and <span className="font-bold">shamelessly young look</span>, yet it was designed to make you feel right at home.
                                    </div>
                                    <div>
                                        As soon as you load it, it's clear that this website places a lot of <span className="font-bold">emphasis on its social experience</span>, where you're more than just another unidentified player at an online casino.
                                    </div>
                                    <div>
                                        A couple of features stand out for how much they made us feel like an active part of the community:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The player's chat, which is available on the right-hand side of the screen (only after you've logged in).
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The winner's feed, which you can find at the bottom of the page.
                                        </div>
                                    </div>
                                    <div>
                                        This marriage of modern and welcoming is a refreshing vibe that we highly appreciated from the get-go.
                                    </div>
                                    <div>
                                        If you're worried about anonymity on the chat and winner's feed, you're not alone. Stake understands that players might not want their activity exposed on the website. You can always opt-out of having your username revealed in the results overview.
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
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img 
                                                        className=""
                                                        src={reviewImg5}
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
                                            <div className="w-[230px]">Very social casino</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Modern looks</div>
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
                                            Open Stack Casino
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
                                            Know the RTP at first glance
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
                                        If we had to sum up Stake Casino's games in one word, we'd call it "diverse". So let's dive into it.
                                    </div>
                                    <div>
                                        First, let's address the large variety of gambling options at Stake. Its portfolio includes a decent selection of different casino games, as well as a <span className="font-bold">comprehensive sportsbook</span> product:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Dice
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Limbo
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Hilo
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Keno
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Mines
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Plinko
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Blackjack
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Roulette
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Slot
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Crash
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Wheel
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Diamonds
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
                                                Video poker
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Slide
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Sportsbook
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Esports
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Very few Bitcoin brands manage to offer both original, low house-edge games AND mainstream casino providers, as well as a decent sportsbook with top-notch odds. More on that below.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake Originals
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg6}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Stake offers 17 different original games, including crowd-pleasers like Crash and Plinko!
                                    </div>
                                    <div>
                                        There are 17different games in the Stake Originals section, all exclusive to this gambling site.
                                    </div>
                                    <div>
                                        You will find casino classics like a <span className="font-bold">slot machine, roulette, and blackjack</span>, as well as some lesser-known games such as dice and keno.
                                    </div>
                                    <div>
                                        If you are looking to get to know new casino games, then limbo, mines, or plinko are also on the table.
                                    </div>
                                    <div>
                                        As the name indicates, none of these games is created by external providers; they're all developed by Stake. They might not be your favorite slot by NetEnt, but they offer something else: <span className="font-bold">transparency</span> and <span className="font-bold">house edge</span>:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Transparency:</span> All 17 games are provably fair, which means you can verify the outcome of every single spin yourself.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Low House Edge:</span> Since Stake controls the development of these games, it can guarantee the lowest house edge possible. This means you gain a little bit more on any winning round.
                                        </div>
                                    </div>
                                    <div>
                                        In our book, this type of innovation is a welcome change from the more traditional games you find in most casinos out there - you have to decide if it's right for you.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake Crash
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg7}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        We love Stake's simple, yet exciting Crash game design!
                                    </div>
                                    <div className="font-bold">
                                        Crash is a crypto casino game, inspired by the fluctuations of coins like Bitcoin and Ethereum.
                                    </div>
                                    <div>
                                        The aim of the game is to guess when the multiplier will crash, and to cash out before it does!
                                    </div>
                                    <div>
                                        <span className="font-bold">Crash is fast-paced and thrilling, and can be extremely rewarding if you manage to withdraw at the right time.</span> Even better, the game is super fast to learn so you can star having fun right away.
                                    </div>
                                    <div>
                                        What we love about Stake's take on Crash (hey, that rhymed!) is it's <span className="font-bold">provably fair.</span>
                                    </div>
                                    <div>
                                        With provably fair games, you can be sure that <span className="font-bold">the casino can't rig the game against you</span>, as all the data is transparent and available for everyone to see. This is a huge plus for us, since gives gamblers complete peace of mind when playing.
                                    </div>
                                    <div>
                                        So, if you're a Crash enthusiast like we are, look no further than Stake!
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake Plinko
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg8}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Let the nostalgia trip begin with Stake's Plinko game!
                                    </div>
                                    <div className="font-bold">
                                        Plinko is another crypto casino favorite, inspired by old-school arcade games.
                                    </div>
                                    <div>
                                        Bettors can drop a coin down a Plinko-style board, with each section corresponding to a different multiplier. Land on a multiplier that increases your bet and you have yourself a win!.
                                    </div>
                                    <div>
                                        <span className="font-bold">Plinko is a popular game because it is simple to understand and easy to play.</span> The Stake is also popular because it offers a high potential return - considering the low house edge.
                                    </div>
                                    <div>
                                        <span className="font-bold">Just like Crash, Stake's Plinko is provably fair</span>. This, once again, means that the casino cannot rig the game in their favor and you can enjoy your wins without worrying about safety.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Slot Games And More
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg9}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Enjoy Stake's vast slot collection!
                                    </div>
                                    <div>
                                        Of course, if you do want to play some tried and true casino games - say, from providers like Yggdrasil, Big Time Gaming, or Push Gaming - you can also find them at Stake. A few established game studios (such as Microgaming) are missing, but there are still more than 2,000 other slots for you to choose from.
                                    </div>
                                    <div>
                                        Before you open any game, you can see the house edge - which is often quite low compared to other casinos! This way, you can easily play the game with the most significant benefit for the player.
                                    </div>
                                    <div>
                                        If you want to see what's hot and what's not, you can also check out the real-time wins and losses and pick the trendiest games. 
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Sports Bets At Stake
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg10}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Stake offers competitive odds on 30+ sports, including esports and virtual sports!
                                    </div>
                                    <div>
                                        Stake is more than just a Bitcoin casino: it also provides a stellar sports betting product.
                                    </div>
                                    <div>
                                        While the brand's bookie used to be a bit rough around the edges (like most cryptocurrency sports betting platforms), it has now <span className="font-bold">developed into a fully-fledged product</span> that can compete with mainstream sportsbooks, especially in more niche areas like esports and MMA.
                                    </div>
                                    <div>
                                        Expect to find your traditional selection of in-play and pre-match fixtures on all the top sports, including:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                American Football
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Association Football (Soccer)
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Basketball
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Ice Hockey
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Tennis
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Stake also offers competitive odds in up-and-coming competitions like eSports and fighting sports. As a matter of fact, popular <a href="https://twitter.com/stylebender/status/1351744589829324800" target="_blank" rel="noreferrer" className="text-blue-600">MMA fighter Israel Adesanya is a brand ambassador</a>, and Stake is also an official betting partner of the UFC and sponsors other prominent fighters.
                                    </div>
                                    <div>
                                        If you're less into brawling "in the flesh", and more into PC-based bouts, then Stake has got you covered, with a vast selection of eSports markets with decent odds, from CS:GO to League of Legends.
                                    </div>
                                    <div>
                                        The brand is especially focused on Dota 2, sponsoring fan-favourite Dendi.
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg11}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        You can often find special promotions and even boosted odds themed around the Ukrainian all-star!
                                    </div>
                                    <div>
                                        As things stand, Stake is our number one recommendation for online betting with cryptocurrencies, above more sports-focused products like Cloudbet.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake x Drake
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg12}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Stake recently partnered up with hip-hop legend Drake - and awesome things are to come!
                                    </div>
                                    <div>
                                        We saved the best for last - <span className="font-bold">Stake recently started collaborating with Drake!</span>
                                    </div>
                                    <div>
                                        Yup, Hotline Bling Drake. God's Plan Drake.
                                    </div>
                                    <div>
                                        Now, they're running a promotion where you can bet alongside @champagnepapi himself. To win, send over your contacts - and don't forget to enjoy some of Drake's favorite activities on Stake - roulette and NBA betting.
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg13}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Check out Drake's favorite roulettes on Stake!
                                    </div>
                                    <div>
                                        And he's paying it forward, too. Here's how he shared some of his fortune with a fan:
                                    </div>
                                    <div>
                                        <a href="https://www.youtube.com/watch?v=JzO-66frUjo" target="_blank" rel="noreferrer" className="text-blue-600">https://www.youtube.com/watch?v=JzO-66frUjo</a>
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
                                            <div className="w-[230px]">All types of major games are offered</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">100% provably fair Stake Originals</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">+2,000 slot machines</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fair and visible house edge</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Real time overview of wins and losses</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Solid sports and esports betting</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Some famous providers are not availble</div>
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
                                            Open Stack Casino
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
                                            Stake proves it with a seal
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
                                        With a longstanding reputation within the crypto sphere, a gambling license, and a decent portfolio of provably fair games, we believe that Stake Casino is a safe and legitimate website.
                                    </div>
                                    <div>
                                        The casino also has a <a href="https://cryptogambling.org/" target="_blank" rel="noreferrer" className="text-blue-600">Crypto Gambling Foundation seal</a>, a seal of approval from an impartial organization that assures the casino is trustworthy.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Where is Stake Gambling Legal?
                                    </div>
                                    <div>
                                        Stake casino is legal in <span className="font-bold">Canada, Mexico, Germany, Austria, Brazil</span>, and many other countries around the world.
                                    </div>
                                    <div>
                                        <a href="https://cryptogambling.org/" target="_blank" rel="noreferrer" className="text-blue-600">The government of Curaçao licenses Stake</a>. Due to this license, Stake is not able to operate in all countries. Restricted countries include:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                United Kingdom
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                The Syrian Arab Republic
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Islamic Republic Of Iran
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Democratic People's Republic of Korea
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Netherlands
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Portugal
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Serbia
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Slovakia
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake Canada: Everything You Need to Know
                                    </div>
                                    <div>
                                        Stake is legal in Canada and they're happy to accept Canadian players. It all goes back to a legal loophole - casinos overseas are perfectly okay in Canada.
                                    </div>
                                    <div className="font-bold">
                                        Since Stake is an overseas operator, Canadians can play there normally.
                                    </div>
                                    <div>
                                        Can you guess who is the biggest Canadian player? That's right, Champagne Papi a.k.a. Drake himself!
                                    </div>
                                    <div>
                                        Although no CAD (Canadian Dollars) payments are available, since all transactions are cryptocurrency-exclusive, the website caters to a Canadian audience with:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Dedicated bonuses in CAD (Canadian Dollars)
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            English and French websites available (including customer support)
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Focus on popular leagues like the NHL and NFL
                                        </div>
                                    </div>
                                    <div className="font-bold">
                                        ? Now, you might be wondering about Ontario.
                                    </div>
                                    <div>
                                        If you live in the province, you know Ontario became the first Canadian territory to regulate iGaming - a source of much confusion in the industry (but also, ultimately, a step towards more responsible gambling).
                                    </div>
                                    <div className="font-bold">
                                        So will you be able to play Stake in Ontario?
                                    </div>
                                    <div>
                                        Right now, Stake doesn't have an Ontario license. However, it's highly likely they'll apply for one - and that comes with some changes for local players.
                                    </div>
                                    <div>
                                        Some of the changes the Ontario license may bring (for players in the province) include:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">No cryptos</span> - the biggest potential change, Stake might limit the cryptos it accepts or remove them altogether.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Fewer games</span> available.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Changes to gameplay</span> as the license limits certain options.
                                        </div>
                                    </div>
                                    <div>
                                        On the plus side, there are likely to be few changes to the sports betting section (which happens to be one of our favorite aspects of Stake).
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="font-bold text-gray-400">
                                            Unconfirmed information
                                        </div>
                                        <div className="text-white font-bold text-2xl">
                                            As news about Stake in Ontario come out, we'll keep you posted.
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Stake UK: Different, But Still Solid
                                    </div>
                                    <div>
                                        Under the Curacao license, you can't play regular Stake in the UK. But there are some good news:
                                    </div>
                                    <div className="font-bold">
                                        In 2021, Stake secured a UK Gambling Commission (UKGC) licence.
                                    </div>
                                    <div>
                                        It launched a Britain-only site soon after, featuring a <span className="font-bold">casino and sports betting section</span>. Unfortunately, the site is quite different from the original Stake.
                                    </div>
                                    <div>
                                        The major change?
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="text-white font-bold text-2xl">
                                            Stake UK doesn't have cryptos!
                                        </div>
                                    </div>
                                    <div>
                                        ? Not only that, but they've also reduced the game offer and even changed RTP on some games. For example, the Book of Dead slot runs on 91% RTP, when the default is 96.2%!
                                    </div>
                                    <div>
                                        ? Finally, after the regulation, Stake can no longer offer all game options it did before - auto play is, notably, gone.
                                    </div>
                                    <div>
                                        Plenty of downsides, right?
                                    </div>
                                    <div>
                                        Well, it's the only way Stake can operate in the UK legally. So, while we're not thrilled about the downgrade, the site is still one of the best for British gamblers.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Are VPNs Allowed at Stake?
                                    </div>
                                    <div>
                                        Short answer: yes, but it depends on why you're using them.
                                    </div>
                                    <div>
                                        <span className="font-bold">VPNs or virtual private networks are designed to give users a secure, encrypted way to connect to the internet</span> and can be used for various purposes. For example, some people use VPNs to bypass geographic restrictions on online content, while others use them to protect their online activity from snooping by their ISP or government.
                                    </div>
                                    <div>
                                        <span className="font-bold">Using a VPN in and of itself is not illegal.</span> However, if you use a VPN to avoid regulations, or to engage in criminal or malicious activity, then you may be breaking the law.
                                    </div>
                                    <div className="font-bold">
                                        How does this apply to Stake Casino?
                                    </div>
                                    <div>
                                        Well, Stake holds a Curaçao casino license.
                                    </div>
                                    <div>
                                        <span className="font-bold">Not all countries recognize this licensing authority, and some have restrictions on online gambling</span>. For example, the United States has strict laws against online gambling, and using a VPN to access an online casino in the US would likely be considered illegal.
                                    </div>
                                    <div>
                                        Since Stake doesn't want trouble with the law, they specifically tell players to self-exclude. It's your responsibility to not play at Stake if you're in a country where online gambling may be illegal. VPN or no VPN, you can't do that.
                                    </div>
                                    <div>
                                        If you're <span className="font-bold">using a VPN for other purposes, such as to protect your privacy</span>, then there's no reason why you can't do it at Stake.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        What Are the Risks of Using a VPN for Geo-Restrictions?
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg14}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Stake Terms & Conditions say they're allowed to run KYC checks on all withdrawals.
                                    </div>
                                    <div>
                                        The biggest issue here are KYC (know your customer) and AML (anti-money laundering) regulations.
                                    </div>
                                    <div>
                                        To comply with these regulations, <span className="font-bold">casinos must verify the identity of their players</span>. The KYC check usually requires proof of identity and address, such as a copy of a passport or utility bill.
                                    </div>
                                    <div>
                                        The catch?
                                    </div>
                                    <div className="font-bold">
                                        Stake doesn't run the verification on registration (for player convenience). They can do a KYC on withdrawal, though.
                                    </div>
                                    <div>
                                        So, if you use a VPN to access Stake from a restricted country, you may be able to register and play without any problems. But, when you go to cash out, you might have to go through the verification process.
                                    </div>
                                    <div className="font-bold">
                                        If you can't verify your identity, then you won't be able to withdraw your winnings.
                                    </div>
                                    <div>
                                        In short, using a VPN to access Stake from a restricted country is a risk. It may work out fine, or you may end up not being able to cash out - a risk that we don't recommend taking.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        How to Use a VPN for Online Gambling?
                                    </div>
                                    <div>
                                        If you insist on using a VPN for online gambling, then there are a few things you need to keep in mind.
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
                                                            Make sure that you're using a reputable VPN service.
                                                        </div>
                                                        <div>
                                                            There are a lot of VPN providers out there, and not all of them are created equal. Do your research, and make sure that the VPN you're using is reliable and trustworthy.
                                                        </div>
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
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="text-base font-bold">
                                                            Avoid free VPNs.
                                                        </div>
                                                        <div>
                                                            One group of researchers found that up to a third of them have malware! As the saying goes - nothing is free. If they're not charging you, you are the product.
                                                        </div>
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
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="text-base font-bold">
                                                            Use a VPN with solid security features.
                                                        </div>
                                                        <div>
                                                            This is important for two reasons. First, you want to make sure that your data is protected from snooping by your ISP or government. Second, the VPN is essentially a "tunnel" for your data. If it leaks, your private information (including payment data) may be exposed to hackers.
                                                        </div>
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
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="text-base font-bold">
                                                            Finally, choose a high-speed VPN and pick server locations that are closest to you.
                                                        </div>
                                                        <div>
                                                            All VPNs will slow down your connection a little bit. The VPN server is a redirection point - so, the shorter the distance between you and the server, the less of a speed drop you'll get. Since most casino games have animation and require a certain amount of bandwidth, you want to make sure that your connection is as fast as possible.
                                                        </div>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
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
                                            <div className="w-[230px]">Crypto Gambling Foundation seal</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Provably fair games</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Some restricted countries</div>
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
                                            Open Stack Casino
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
                                            Nothing is for free
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
                                        Stake is, above all, a blockchain casino where you can only play with cryptocurrencies. The following 8 coins are available:
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
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Tron
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Bitcoin Cash
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
                                                EOS
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Although no fiat currencies are available, you can use them to buy cryptocurrencies directly on Stake's website, using a third-party provider: <a href="https://www.moonpay.io/" target="_blank" rel="noreferrer" className="text-blue-600">MoonPay.</a>
                                    </div>
                                    <div>
                                        You can always find the current exchange rate for BTC to USD at the bottom of the page.
                                    </div>
                                    <div>
                                        There is also an Exchange tab on your account, where you can trade several alt-coins for an equivalent amount in one of Stake's available cryptos.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Payment Speed and Safety
                                    </div>
                                    <div>
                                        We highly value how easily, safely, and fast you can deposit and withdraw when rating any casino. We want all transactions to be as hassle-free as possible.
                                    </div>
                                    <div>
                                        Stake Casino does rate well in all aspects. For instance, the processing times for all currencies are usually immediate, although the speed of the blockchain network can influence that. We tested both Bitcoin and Ethereum transactions at different periods and <span className="font-bold">experienced fast transaction times</span> and a <span className="font-bold">smooth withdrawal process.</span>
                                    </div>
                                    <div>
                                        Additionally, Stake's two-factor identification process should ensure the safety of your data if you choose to take advantage of it.
                                    </div>
                                    <div>
                                        However, we did find two minor issues:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black  mt-[11px]"></div>
                                        <div>
                                            When it comes to withdrawals, you are subject to a small fee.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start  gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black  mt-[11px]"></div>
                                        <div>
                                            You need to create an account and reveal your identity to play at Stake, potentially putting your data at risk.
                                        </div>
                                    </div>
                                    <div>
                                        Now, we used to have a bigger issue with the withdrawal fee. But here's the thing:
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="text-white font-bold text-2xl">
                                            The set fee is just 0.00007 BTC.
                                        </div>
                                    </div>
                                    <div>
                                        It doesn't matter how little or how much you cash out - it's always going to be that. So, while we'd rather not see a withdrawal fee at all, this is also pretty good.
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
                                            <div className="w-[230px]">Various cryptocurrencies to choose from</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Immediate withdrawals</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Option to buy cryptos directly on the website</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Transparency in exchange rate</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No anonymity</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No fiat currencies</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Small withdrawal fee applies (just 0.00007 BTC, though)</div>
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
                                            Open Stack Casino
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
                                            You can ask your questions any time of the day
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
                                        Any questions or problems that might come up will be taken care of by the friendly support team. You can contact them <span className="font-bold">via email or through live chat.</span>
                                    </div>
                                    <div>
                                        Although we believe both options are more than satisfactory, using the live chat does tend to provide quicker, more personalized support, so we strongly suggest you use it as your preferred channel.
                                    </div>
                                    <div>
                                        Stake casino promises that a team member will answer your questions within a few minutes. We can confidently say they are fast and efficient from all our interactions with the customer support team.
                                    </div>
                                    <div>
                                        Unfortunately, this casino doesn't offer a FAQ page, so you will need to get in touch with any questions you may have. There is, however, a blog and a forum where you can find some answers.
                                    </div>
                                    <div>
                                        Stake is also active on the following social media platforms:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://twitter.com/stake"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.facebook.com/StakeCasino"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Facebook
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.instagram.com/stakecasino/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Instagram
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        As we mentioned before, there is also a players' chat on the right-hand side of the page, which is perfect if you have some general questions that fellow players might answer or if you want to chat with like-minded people.
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
                                            <div className="w-[230px]">Players chat</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Live chat available</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No FAQ page</div>
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
                                            Open Stack Casino
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
                                        In case you were wondering
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Can I play with fiat currencies at Stake?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        Unfortunately, no, since you can only use cryptocurrencies at <a href={"https://" + siteData.link} target="" className="text-blue-600">Stake</a>. However, you can buy cryptocurrencies directly on the website and even trade your alt-coins for the 8 different cryptos supported by this website.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. Can I deposit using Bitcoin at Stake casino?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        Definitely! You can even see the current exchange rate for Bitcoin on the website. Besides Bitcoin, you can also deposit and play with Ethereum, Bitcoin Cash, Litecoin, Dogecoin, EOS, Ripple, and Tron.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. Is there a welcome bonus?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        Currently, Stake casino does not offer any welcome bonus. However, many different promotions are available at any given time, including a weekly $100,000 giveaway with individual weekly $5,000 prizes (paid in crypto) and a rewarding VIP program.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ4(!openFAQ4) }}
                                >
                                    4. Is Stake gambling legit?
                                </div>
                                {openFAQ4 &&
                                    <div className="text-black mt-5">
                                        Yes! Stake casino is a legitimate business with many active players, which is operated under a Curaçao-issued license. It is also certified by the Crypto Gambling Foundation.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ5(!openFAQ5) }}
                                >
                                    5. Is Stake casino available in Canada?
                                </div>
                                {openFAQ5 &&
                                    <div className="text-black mt-5">
                                        Yes, Stake casino does accept players from all Canadian provinces and territories. However, remember that this is a cryptocurrency-exclusive casino: consequently, Canadian Dollars (CAD) payments are not accepted.
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

export default StakeCasinoReview;