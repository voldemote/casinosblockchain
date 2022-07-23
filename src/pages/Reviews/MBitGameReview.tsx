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
import tetherCryptoImg from "../../Assets/images/cryptocurrency/tether.png";

// game images
import blackjackGameImg from "../../Assets/images/games/blackjack.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";
import liveCasinoGameImg from "../../Assets/images/games/live-casino.png";
import lotteryGameImg from "../../Assets/images/games/lottery.png";
import pokerGameImg from "../../Assets/images/games/poker.png";
import rouletteGameImg from "../../Assets/images/games/roulette.png";
import sicBoGameImg from "../../Assets/images/games/sic-bo.png";
import slotsGameImg from "../../Assets/images/games/slots.png";

// review images
import reviewImg1 from "../../Assets/images/reviews/9-mBet-game/1-mBit-review.png";
import reviewImg2 from "../../Assets/images/reviews/9-mBet-game/2-mBit-review.png";
import reviewImg3 from "../../Assets/images/reviews/9-mBet-game/3-mBit-review.png";

// country flag
import { GB, DE, JP, RU } from 'country-flag-icons/react/1x1';

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
        img: tetherCryptoImg,
        name: "Tether"
    }
];

const gamesObj: Array<any> = [
    {
        img: blackjackGameImg,
        name: "Blackjack"
    },
    {
        img: jackpotGameImg,
        name: "Jackpots"
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
    }
]

const MBitGameReview = () => {
    const siteData = siteDatas[8];

    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);

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
                                        Aim for the moon at this otherworldly casino
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
                                                            <div className="text-center">
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
                                                <RU className="h-5 rounded-full" />
                                                <div className="text-base">Russian</div>
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
                                                        <div className="w-[230px]">Backed by a huge company</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Many different casino games</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Generous bonuses and VIP program</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">NetEnt, Yggdrasil, and Quickspin games are missing</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No fiat currencies</div>
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
                                            Being a VIP has never been more fun
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
                                        The fun at mBit Casino starts with a generous welcome bonus. Or rather, a welcome package, since it's divided into three different parts, each requiring a separate deposit:
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
                                                        110% up to 1.1 BTC + 300 free spins
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
                                                        50% up to 2.5 BTC
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
                                                        75% up to 1.5 BTC
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    {/*  */}
                                    <div>
                                        The total amount goes up to a whopping 5 Bitcoins plus 300 free spins.
                                    </div>
                                    <div>
                                        You can also get an equivalent offer if you choose to play with another currency. However, bonuses at mBit are generally slightly better if you choose BTC.
                                    </div>
                                    <div>
                                        <span className="font-bold">Important note</span>: don't forget to enable these bonuses when depositing for the first time!
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other mBit Bonuses
                                    </div>
                                    <div>
                                        That's not all. If you keep playing at mBit Casino, you'll get to feast on many bonuses, cash prizes and cashbacks.
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            VIP Friday Reload: The title might imply exclusivity, but this 100% up to 0.25 Bitcoins is for every player. Since it's called a VIP Bonus, the maximum amount doesn't impress.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            25% Reload Mondays: If you're often affected by the Monday blues, you can soften the pain with this deposit bonus. 
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Daily VIP Cashback: This daily cashback up to 20% and 0.1 Bitcoin seems to prove our theory that all players get to be VIPs at mBit casino.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            mBit Races: Play on a high-speed, high-stakes Bitcoin race where top Free Spin prizes are up for grabs. All-day long, every single day.
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        VIP Program
                                    </div>
                                    <div>
                                        In case you want to take the bonuses to another level - or, rather, another planet - you can join mBit's exclusive VIP Space journey.
                                    </div>
                                    <div>
                                        You'll travel from Earth to other planets, and you can even reach for the moon! Along the way, you get to enjoy many benefits:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Redeemable loyalty points
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Personalized rewards
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Exclusive bonuses
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Personal VIP manager
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        It's hands-down one of the most original and rewarding VIP programs we've reviewed so far.
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
                                            <div className="w-[230px]">Generous welcome bonus</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fun VIP program</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">A lot of other promotions</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Bitcoin players are favored</div>
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
                                            Smooth navigation on all platforms
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
                                        mBit has a very distinct visual identity, which is both clean and creative.
                                    </div>
                                    <div>
                                        On one side, its dark colors and plain background help minimize distractions. There is very little visual clutter, and the options that are available to you are few and straightforward.
                                    </div>
                                    <div>
                                        However, there is also a more whimsical side to mBit. This is a casino with an almost cartoony soul, with colorful and detail-rich artwork on its promotional banners.
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Unlike many of its competitors, mBit is not overly serious. It is unabashedly a gaming platform, a place to have fun, and its visual identity certainly helps create this feeling without being too disruptive.
                                        </div>
                                    </div>
                                    <div>
                                        Navigating across the website is smooth and fast, and so is finding your way among more than 2,000 games.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        mBit Mobile Experience
                                    </div>
                                    <div>
                                        This website's mobile version has been strongly streamlined, in order to facilitate navigation on a smaller screen.
                                    </div>
                                    <div>
                                        It's probably one of the best mobile integrations we've reviewed so far, which makes us believe that mBit is more than mobile-friendly: it's mobile-first.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other Features
                                    </div>
                                    <div>
                                        There is a player chat on the right-hand side of the screen on desktop, which will take over your screen on mobile. If you're not very social, you can easily close and ignore it.
                                    </div>
                                    <div>
                                        You can also take advantage of the 'Get Started' pop-up, which will give you a quick overview of your balance, bonuses, and suggest a new game every month.
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
                                                        src={reviewImg1}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                                
                                            </SwiperSlide>
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
                                            <div className="w-[230px]">Easy navigation</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Clean and creative design</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Excellent mobile experience</div>
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
                                            Open mBit
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
                                            A few known Swedes are nowhere to be found
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
                                        We've said it before, but it's such an impressive number that it's worth mentioning it twice: there are over 2,000 different games at mBit Casino.
                                    </div>
                                    <div>
                                        They come in all shapes and sizes as well, except the most coveted of them all: provably fair games.
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Slots
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
                                                Video Poker
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Live Casino
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
                                                Baccarat
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Jackpots
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Lottery
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Dice
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Poker
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Sic Bo
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Scratchcards
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Drops & Wins
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Slot Machines And Jackpots
                                    </div>
                                    <div>
                                        Most of the games available at mBit are slot machines from some of the world's most renowned providers, such as Pragmatic Play and Betsoft.
                                    </div>
                                    <div>
                                        Your keen eye might notice that a few major game studios are missing. Swedish giants NetEnt, Yggdrasil, or Quickspin are notoriously absent, which means you can't play classics such as Starburst or Immortal Romance.
                                    </div>
                                    <div>
                                        If it's jackpot slots you're looking for, then you're in for a treat! There are 70+ different options available, although Microgaming's popular hits are not.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Table Games And Live Casino Games
                                    </div>
                                    <div>
                                        Just like in any other casino, you can find a table games section here as well.
                                    </div>
                                    <div>
                                        Roulette, blackjack, and baccarat are all on offer, as well as several different games of dice.
                                    </div>
                                    <div>
                                        Most of these table games can also be played in the 'Live Dealer' section, which offers more than 50 differnt titles from popular providers such as Evolution Gaming.
                                    </div>
                                    <div>
                                        <span className="font-bold">Interested in honing your poker skills?</span> mBit might not have a live poker client, but it does feature a dedicated video poker section with dozens of games where you can learn all the best poker hands by heart.
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
                                            <div className="w-[230px]">Over 2,000 different games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Large video poker section</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No provably fair games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Quickspin, NetEnt, and Yggdrasil are missing</div>
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
                                            Open mBit
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
                                            As safe as it gets
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
                                        As part of the multi-brand Direx N.V. group (which also owns household brands such as BitStarz or 7BitCasino), mBit holds a Curaçao license.
                                    </div>
                                    <div>
                                        This license assures a high degree of safety, since it is widely recognised all over the world and ensures the validty of your gameplay. However, it does come with a few drawbacks:
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
                                                        Since it requires a KYC check, your anonymity is not guaranteed.
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
                                                    <div>
                                                        Players from several countries, such as the United States and the United Kingdom, cannot register at mBit.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        There are also no provably fair games, which could've added an extra layer of security to this casino.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other mBit Safety Features
                                    </div>
                                    <div>
                                        mBit casino uses the SoftSwiss gaming platform to power its games and process payments. This technology is recognized across the industry as trusted and secure.
                                    </div>
                                    <div>
                                        The website is also protected by SSL 128 Bit Encryption, which is widely regarded as nearly-impossible to crack.
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
                                            <div className="w-[230px]">Large mother company</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">SSL 128 bit encryption</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Curaçao license</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">SoftSwiss platform</div>
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
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">KYC required</div>
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
                                            Open mBit
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
                                            Hassle-free payments
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
                                        Right now, you can choose from 6 different cryptocurrencies when playing at mBit Casino:
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
                                                Bitcoin Cash
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
                                                Dogecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Tether
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        As we mentioned before, mBit bonuses tend to be more interesting in Bitcoin, so we highrly recommend this currency.
                                    </div>
                                    <div>
                                        Of course, if you do prefer one of the six other options, that's entirely possible.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Mbit Casino Withdrawals and Deposits
                                    </div>
                                    <div>
                                        mBit casino claims to have a 10 minute processing time on all withdrawals. In our experience, withdrawing winnings at mBit casino is indeed a lightning-fast and hassle-free process.
                                    </div>
                                    <div>
                                        This is true for all the available cryptocurrencies.
                                    </div>
                                    <div>
                                        However, there is an account verification process (a KYC check) that you must complete before making your first withdrawal.
                                    </div>
                                    <div>
                                        Much to our delight, there are absolutely no transaction fees. However, there are some transaction limits that you should be aware of:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Minimum deposit</span>: 0.0001 BTC (or currency equivalent)
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Minimum withdrawal</span>: 0.001 BTC (or currency equivalent)
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Maximum withdrawal</span>: 10 BTC (or currency equivalent)
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Transaction limits are common across all Bitcoin casinos, and mBit's are on the lower end of the spectrum, so there's nothing to worry about here.s
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
                                            <div className="w-[230px]">10 minute withdrawals</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Absolutely no casino fees</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Low transaction limits</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">KYC required</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Withdrawal limits</div>
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
                                            Open mBit
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
                                            Why not complain if something's wrong?
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
                                        In case of doubt, you can get easily get help at mBit casino, using one of the several options available:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Live Chat
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Email
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Complaints' form
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Players chat
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        The customer support team is <span className="font-bold">available round-the-clock in 4 different languages</span> via live chat or email. If you're looking up something on the website, they will proactively chat with you, which is always appreciated.
                                    </div>
                                    <div>
                                        Even though we hope you won't need it, there is also a complaints' form on the website. This feature goes above and beyond and shows that mBit aims to provide the best customer experience possible.
                                    </div>
                                    <div>
                                        If you're in need of tips or just looking for a friendly chat, you can always ask other users directly using the player chat on the right-hand side (on mobile, it's on the bottom menu).
                                    </div>
                                    <div>
                                        You can also follow mBit on the following platforms:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.facebook.com/mbitcasino"
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
                                                    href="https://twitter.com/mBitCasino"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
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
                                            <div className="w-[230px]">Complaints' form</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">24/7 live chat</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Only 4 languages available</div>
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
                                            Open mBit
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
                                        If you didn't read everything, at least read the FAQs
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Is mBit casino legit?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        Backed by a renowned mother company with many popular casino brands, mBit Casino is a reputable Bitcoin casino. It holds a trusted Curaçao license and it's secured by a highly-robust encryption protocol.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. Can you easily withdraw winnings on mBit casino?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        Yes! mBit Casino guarantees fast, 10-minute withdrawals, as long as your account is verified. Do note that there is a mandatory KYC check before you can withdraw any winnings. Also, of course, you will have to play through any bonuses you might still have.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. Does mBit casino have a no deposit bonus?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        Unfortunately, there is no mBit Casino deposit bonus. However, there are many other promotions, including a rewarding VIP program and daily races offering free spins.
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

export default MBitGameReview;