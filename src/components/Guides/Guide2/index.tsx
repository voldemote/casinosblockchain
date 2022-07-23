import backgroundImg from "../../../Assets/images/Header.svg"

import { ISiteRankBlogCardObj } from "../../../Interfaces"
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";
import { Check } from "@mui/icons-material"

import ReadMoreCards from "../../Card/ReadMoreCards";


import ReadMoreImg8 from "../../../Assets/images/ReadMore/8.jpg"

import EuroBankNotes from "../../../Assets/images/Content/euro-bank-notes.jpg"
import GoleImg from "../../../Assets/images/Content/gold.jpg"
import BitcoinCash from "../../../Assets/images/Content/Bitcoin-cash.jpg"
import Alpridephoto from "../../../Assets/images/Content/alpridephoto.jpg"
import BcGame from "../../../Assets/images/Content/bcgame.png"
import Cloudbet1 from "../../../Assets/images/Content/Cloudbet1.jpg"



import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";
import { siteDatas } from "../../../Interfaces/SiteDatas";
import NavBarMiniTable from "../../Card/NavBarMiniTable";

const MainContent = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };


    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("div.container ul a");
        window.onscroll = () => {
            let current: any;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
        }
    }, [])

    return (
        <div className="w-full flex gap-6 justify-center">
            <div className="xl:w-8/12 w-full h-full ">
                <div className="w-full xl:w-fit h-fit xl:h-[435px] rounded-md border-4 border-white">
                    <img alt="MainPageImg" src={ReadMoreImg8} className="w-full max-h-full object-cover " />
                </div>
                <div className="blog pl-24 pb-16 w-10/12">
                    <p id="modified-date" className="text-sm" >
                        Updated:&nbsp;
                        <span>July 8, 2022</span>
                    </p>
                    <div className="h1">Stablecoin Casinos: The Full Guide to Gambling with Tether, USDC, and More</div>
                    <p>The world of crypto is extremely new – even Bitcoin hasn’t been around for that long. And, while blockchain-based currencies offer exciting new opportunities for finance, they also have one major problem:&nbsp;</p>
                    <p><strong>Volatility.&nbsp;</strong></p>
                    <p>Stablecoins are here to change this. </p>
                    <p>They are cryptocurrencies that are built to address volatility by pegging their value to another asset, like the US dollar. This makes them much more usable for everyday transactions.</p>
                    <div className="w-full h-[220px] p-10 flex justify-center items-center  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <div className="h2 text-white text-lg md:text-2xl">
                            Wherever you spend crypto, stablecoins can help you avoid price swings.
                        </div>
                    </div>
                    <p>Because stablecoins stay around the same value, you can use them to make bets without losing money to volatility. This makes them perfect for the gambling industry, which needs to be able to trust its currency.</p>
                    <p><strong>But which stablecoin to pick – and how do you choose a stablecoin casino to play in?</strong>&nbsp; </p>
                    <p>Our top stablecoin casinos are: </p>
                    <div className="mt-4">
                        {
                            [siteDatas[0], siteDatas[4], siteDatas[3]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
                                return (
                                    <SiteRankBlogTable
                                        key={index}
                                        siteIndex={index}
                                        summaryData={summaryInfo}
                                    />
                                )
                            })
                        }
                    </div>
                    <section id="in-short">
                        <div className="h2">Stablecoins and Gambling: In Short	</div>
                        <p>Playing with stablecoins removes volatility from crypto casinos. There are three main reasons to pick USDT or DAI over traditional cryptos:</p>
                        <ul className="is-style-dotted-list"><li><strong>Stability</strong> – as the name suggests, stablecoins are more ‘solid’, a haven from the sharp swings of other cryptos.</li><li><strong>Reduce risk</strong> – with stablecoins, you’re no longer gambling on the bet AND the price of your crypto. You can (theoretically) reduce losses – but also wins. </li><li><strong>Enjoy crypto casino perks</strong> – stablecoins are still cryptocurrencies, so you can enjoy all the perks of gambling with crypto like lower <a href="https://casinosblockchain.io/house-edge-casinos/" target="_blank" rel="noreferrer noopener">house edges</a>.</li></ul>
                        <p>Our <strong>number one stablecoin casino</strong> is <a href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a> for the awesome game selection, social experience, and the range of cryptos they accept.</p>
                        <div className="mt-4">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <p><br />Curious to learn more? Read on…</p>
                    </section>
                    <section id="what-are-stablecoins">
                        <div className="h2" >What Are Stablecoins?</div>
                        <p>Stablecoins are cryptocurrencies that are attached to a stable asset, usually a fiat currency.</p>
                        <p>When you sell a volatile cryptocurrency for a stablecoin, you know that the stablecoin will maintain its value. You can then keep the stablecoin on the exchange as you prepare for your next trade.</p>
                        <p >But, stablecoins are useful beyond trading, too.</p>
                        <div className="w-full h-[220px] p-10 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="h2 text-white text-sm">Stablecoin advantages</p>
                            <div className="text-white text-lg md:text-2xl">
                                The main perk of stablecoins is they help with everyday transactions.
                            </div>

                        </div>
                        <p className="mt-3"><strong>Imagine you wanted to place a $10 bet. </strong></p>
                        <p>With Bitcoin’s price fluctuations, your $10 might be worth $15 tomorrow. So, most people will simply choose to HODL. The same goes for anything else you buy – pizza (remember the guy who bought ‘za worth millions?), software subscriptions, travel tickets, etc.</p>
                        <p><strong>With a stablecoin, you don’t have to worry about price fluctuations. </strong></p>
                        <p>The stablecoin will always be worth the same amount, so you can use it without any fear of losing money. In other words, stablecoins make crypto usable and spendable.</p>
                        <figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout"><tbody><tr><td></td><td><strong>Traditional Cryptos</strong></td><td><strong>Stablecoins</strong></td></tr><tr><td><strong>Volatility</strong></td><td>Very high</td><td>Low</td></tr><tr><td><strong>Centralization?</strong></td><td>Decentralized</td><td>Centralized</td></tr><tr><td><strong>Use</strong></td><td>Trading, investments, store of value (for cryptos on an uptrend)</td><td>Medium of exchange, store of value (e.g., from trades or bets)</td></tr><tr><td><strong>Popular coins</strong></td><td>BTC, ETH, DOGE</td><td>USDT, DAI, BUSD</td></tr></tbody></table></figure>
                    </section>
                    <section id="stablecoin-types" >
                        <div className="h2"> Types of Stablecoins</div>
                        <p>Now that we covered stablecoins as a whole, let’s talk about the diffferent <em>types </em>of stablecoins out there:</p>
                    </section>
                    <section id="fiat-backed">
                        <div className="h3" >Fiat-backed </div>
                        <img src={EuroBankNotes} className="w-full h-auto" alt="EuroBankNotes" />
                        <p className="mt-3">Fiat-backed stablecoins are cryptocurrencies that are pegged to the value of a traditional currency, like the US dollar. The fiat currency is essentially collateral for the stablecoin’s promise of stored value.&nbsp;</p>
                        <p><strong>Stablecoin providers keep fiat reserves to maintain the coin’s stability.</strong> These reserves are private, but they get regular audits to ensure the custodian is keeping their commitment.&nbsp;</p>
                        <p>Take <a href="https://casinosblockchain.io/tether-casinos/" target="_blank" rel="noreferrer noopener">Tether (USDT) casinos </a>for example. Tether is pegged to the US dollar, meaning that 1 USDT is always worth 1 US dollar. This means you can gamble with Tether without risking your earnings to volatility.  </p>
                        <p>Tether’s creators also claim there is a 1:1 ratio between USDT and US dollars. For every $1 in existence, they say, there is also 1 USDT.&nbsp;</p>
                        <p>This has proven to be a <a href="https://www.theverge.com/2021/10/15/22728253/tether-41-million-misleading-statements-fiat-currency-bitfinex-cftc#:~:text=The%20Tether%20controversy%2C%20explained,2016%20order%20from%20the%20CFTC." target="_blank" rel="noreferrer noopener">controversial claim</a>, but the fact remains that USDT has been much more stable than other cryptocurrencies. If you buy $1-worth of Tether today, the price won’t change tomorrow.&nbsp;</p>
                        <p><strong>Other fiat-backed stablecoins include USD Coin and Gemini dollar.&nbsp;</strong></p>
                    </section>
                    <section id="Commodity-backed">
                        <div className="h3">Commodity-backed</div>
                        <img src={GoleImg} className="w-full h-auto" alt="GoleImg" />
                        <p className="mt-3"><strong>A commodity-backed stablecoin is a digital currency whose value is pegged to that of a physical commodity like oil or gold.</strong>&nbsp;</p>
                        <p>The idea behind commodity-backed stablecoins is that, as long as there is demand for the physical commodity, the stablecoin will maintain its value. This means you’re exposed to the asset’s value. If you have a gold-backed stablecoin, for example, and the price of gold goes up – so will the price of your coin.&nbsp;</p>
                        <p><strong>Gold is, in fact, the most common commodity used in stablecoins.</strong></p>
                        <p><a href="https://casinosblockchain.io/pax-gold-casinos/">PAX Gold (PAXG)</a> is the best-known example. Every token represents one troy ounce of the London Good Delivery gold bar.&nbsp;</p>
                        <p>PAXG’s backing company, Paxos, is in charge of the reserve, but they get regular audits. So far, PAXG has been one of the more reliable, less controversial stablecoins.</p>
                    </section>
                    <section id="Cryptocurrency-backed">
                        <div className="h3"> Cryptocurrency-backed 	</div>
                        <img src={BitcoinCash} className="w-full h-auto" alt="BitcoinCash" />
                        <p className="mt-3"><strong>Cryptocurrency-backed stablecoins are, as the name suggests, stablecoins that are backed by other cryptocurrencies.</strong></p>
                        <p>Crypto collaterals mean a stablecoin can be decentralized. This removes the need for a central authority (like Tether) to maintain the coin’s peg. It also appeals to blockchain enthusiasts who distrust central institutions on principle.&nbsp;</p>
                        <p>The most popular cryptocurrency-backed stablecoin is Dai. Dai is pegged to the value of the US dollar, but it’s not backed by fiat currency. Instead, it’s backed by Ether, the native cryptocurrency of the Ethereum blockchain.&nbsp;</p>
                        <p>To avoid volatility, crypto-backed stablecoins are often over-collateralized. But, even that didn’t help DAI in March 2020. On the <strong>infamous Black Thursday</strong> two things happened at once:&nbsp;</p>
                        <ul className="is-style-dotted-list"><li><strong>ETH’s price crashed.</strong></li><li><strong>The Ethereum network was clogged.&nbsp;</strong></li></ul>
                        <p>This brought about to a <strong>momentary DAI price spike</strong>, which (thanks to <a className="text-blue-500" href="https://medium.com/@whiterabbit_hq/black-thursday-for-makerdao-8-32-million-was-liquidated-for-0-dai-36b83cac56b6" target="_blank" rel="noreferrer noopener">zero bids auctions</a>) led to over $8 million in losses.&nbsp;Thankfully, the DAI company has learnt its lesson and is now <strong>diversifying the collaterals, to include physical assets and fiat currency, too</strong>.</p>

                    </section>
                    <section id="Algorithmic" >
                        <div className="h3">Algorithmic </div>
                        <img src={Alpridephoto} className="w-full h-auto" alt="Alpridephoto" />
                        <p className="mt-3"><strong>Algorithmic stablecoins are cryptocurrencies that are stabilized by a mathematical formula, as opposed to a collateralized asset.&nbsp;</strong></p>
                        <p>This is a newer technology, and there are currently only a few algorithmic stablecoins in circulation. Rather than actually <em>owning </em>a collateral, algorithmic stablecoin providers peg the price of that reference asset through mathematical calculations.&nbsp;</p>
                        <p>While some argue non-backed stablecoins are the future, others are<a className="text-blue-600" href="http://www.wakeforestlawreview.com/2021/10/built-to-fail-the-inherent-fragility-of-algorithmic-stablecoins/" target="_blank" rel="noopener noreferrer"> less enthusiastic</a> about them. So far there are very few algorithmic stablecoin projects anyway – and none of them work in crypto casinos.&nbsp;</p>
                        <p>We’ll be keeping an eye out for the future, though.</p>

                    </section>
                    <section id="why-stablecoins">
                        <div className="h2">Why Gamble with Stablecoins?</div>
                        <p><strong>Volatility is a huge issue for the gambling industry.</strong> Trust is essential, but it’s hard to maintain when your currency can swing in value by 20-30-50% in a day.</p>
                        <p><strong>With traditional cryptos, you’re gambling on two things:&nbsp;</strong></p>
                        <ul className="pl-4 list-none">
                            <li>
                                <Check fontSize="small" color="success" className="mr-2 " />
                                The game you’re playing
                            </li>
                            <li>
                                <Check fontSize="small" color="success" className="mr-2 " />
                                The price of the coin
                            </li>
                        </ul>
                        <p>Let’s take two scenarios:&nbsp;</p>
                        <ul className="is-style-dotted-list"><li><strong>You place a bet of 0.05 BTC.<br /></strong>At the time, 1 BTC is worth $10,000, so you bet $500. You win and double your money – $1000 worth of BTC, or 0.1 BTC. Unfortunately, when you decide to withdraw your earnings, BTC dips to $4,000 (this actually happened in March 2020). So, your 0.1 BTC is now worth just $400.<br />Even though you won the bet, you lost $100!</li><li><strong>You place that same bet of 0.05 BTC, worth $500 at the time. You win and now have 0.1 BTC.</strong><br />The next day BTC soars to $20,000. Now, your 0.1 BTC is worth $2000 – you won $1000 extra from the crypto’s upswing.</li></ul>
                        <p>As you can see, crypto volatility can go both ways. It could benefit you or harm you, but it’s definitely an added risk.&nbsp;</p>
                        <p>Stablecoins make crypto gambling much more similar to regular betting. You can trust that the stablecoin will maintain its value, so you can focus on the game itself. This makes it much easier to enjoy a relaxing game of poker or blackjack without worrying about doubling your losses.&nbsp;</p>
                        <p>What is more, stablecoins make the issue of <a href="https://casinosblockchain.io/crypto-gambling-taxes/" target="_blank" rel="noreferrer noopener">crypto gambling taxes</a> (which is notoriously complex) a little simpler, since documenting the market value is a non-issue. </p>

                    </section>
                    <section id="best-stablecoin-casinos">
                        <div className="h2">The Best Stablecoin Casinos</div>
                        <p>So where do you go to gamble with stablecoins? Here are our top picks:&nbsp;</p>
                    </section>
                    <section id="bcgame-casino">
                        <div className="h3">  BC.Game Casino 	</div>
                        <img src={BcGame} className="w-full h-auto" alt="BcGame" />
                        <p className="mt-3">BC.Game is a new online casino that accepts a <strong>range of cryptocurrencies</strong>, including stablecoins. They offer an <strong>excellent selection of games</strong>, including slots, roulette, blackjack, and poker.&nbsp;</p>
                        <p><strong>BC.Game also has a social aspect </strong>that rewards players with bonuses and free spins for participating in the community.&nbsp;</p>
                        <p> ?  <strong>What Stablecoins Are Available?&nbsp;</strong></p>
                        <p>BC.Game Casino has DAI, Tether, Binance USD (BUSD), and USDC. There are 65+ cryptocurrencies in total.</p>
                        <div className="mt-4">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                    </section>
                    <section id="Cloudbet-casino">
                        <div className="h3">Cloudbet</div>
                        <img src={Cloudbet1} className="w-full h-auto" alt="Cloudbet1" />
                        <p><a href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet </a>is another great choice for crypto gambling. They’re one of the oldest and most well-established cryptocurrency casinos on this list.&nbsp;</p>
                        <p>The game selection features over 50 providers, a range of live table games, and a comprehensive sportsbook (though if you’re into eSports we recommend <a className="text-blue-600" href="https://casinosblockchain.io/thunderpick-review/" target="_blank" rel="noreferrer noopener">Thunderpick</a> instead). Cloudbet also has over 1000 slots, as well as a provably fair selection of crypto favorites.&nbsp;</p>
                        <p> ?  <strong>What Stablecoins Are Available?</strong></p>
                        <div className="mt-4">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                    </section>
                    <section id="get-started">
                        <div className="h2"> How to Get Started With Stablecoin Casinos?</div>
                        <p>Playing at stablecoin casinos isn’t that much different than gambling with any other crypto.&nbsp;</p>
                        <ul className="is-style-dotted-list"><li><strong>First, you want to set up your wallet.</strong><br />We recommend MetaMask, because it’s easy to use and secure. It also allows gambling transactions in the Terms &amp; Conditions.&nbsp;</li><li><strong>Then, head over to a cryptocurrency exchange.</strong><br />We love Binance, because they have a large selection of stablecoins and low fees. If you prefer a more beginner-friendly option, Coinbase also has all major stablecoins.&nbsp;</li><li><strong>Once on the exchange, you want to deposit fiat and buy your stablecoin.</strong><br />If you’re wondering which coin to pick, for the time being, Tether is best. Even with the controversy, it’s still the biggest stablecoin out there.&nbsp;</li><li><strong>Finally, you want to transfer your stablecoin to MetaMask</strong> (don’t keep it on the exchange). From there, make a transaction to your casino of choice.</li></ul>
                        <p>Wondering which stablecoin casino to pick? Our number one choice remains BC.Game!</p>
                        <div className="h2">Final Thoughts</div>
                        <p>When it comes to gambling, stablecoins offer a few key advantages over other cryptocurrencies:&nbsp;</p>
                        <ul className="pl-4 list-none">
                            <li>
                                <Check fontSize="small" color="success" className="mr-2 " />
                                They’re <b>less risky</b> because their value doesn’t fluctuate as much as other cryptocurrencies.
                            </li>
                            <li>
                                <Check fontSize="small" color="success" className="mr-2 " />
                                They’re <b>usable</b> for everyday transactions.
                            </li>
                            <li>
                                <Check fontSize="small" color="success" className="mr-2 " />
                                They’re <b>perfect for gambling</b>, since you don’t have to worry about price swings.
                            </li>
                        </ul>
                        <p>As crypto grows in popularity, so do stablecoin casinos. Big-name players like Cloudbet and ambitious newcomers like BC.Game alike begin to offer them. If you ask us, BC.Game is currently the best casino for stablecoins (and overall).&nbsp;</p>
                        <p>Did we get it right? Check it out for yourself and let us know by leaving a <a className="text-blue-600" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">review</a>.&nbsp;</p>
                    </section>
                    <section id="FAQ">
                        <div className="h2">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What Is the Best Stablecoin to Hold?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">Fiat and asset-backed stablecoins are best for holding - for example,
                                    <a href="https://casinosblockchain.io/tether-casinos/" className="text-blue-600">Tether</a>
                                    Tether or PAX Gold. But, stablecoins mostly exist for transactions, so they’re not really the best investment.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What Is the Safest Stablecoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <a href="https://casinosblockchain.io/pax-gold-casinos/" className="text-blue-600">PAX Gold</a>
                                    is considered one of the safest stablecoins out there. Backed by real gold, it has suffered far less fluctuations and controversies than Tether or other popular options.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is Stablecoin Better Than Bitcoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Stablecoins offer their unique set of perks - stability, preserving value, better for transactions. But, if you’re a hardcore decentralization enthusiast, you might see them as a threat to everything crypto represents. Ultimately, both stablecoins and traditional coins have a place in the crypto universe.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is Tether a Gambling Coin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">Yes,
                                    <a href="https://casinosblockchain.io/tether-casinos/" className="text-blue-600">Tether</a> is one of the most popular coins for gambling.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden 
bg-white shadow-md shadow-slate-600 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#in-short" className="in-short hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                In Short
                            </li>
                        </a>
                        <a href="#what-are-stablecoins" className="what-are-stablecoins hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                What Are Stablecoins?
                            </li>
                        </a>
                        <a href="#stablecoin-types" className="stablecoin-types hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Types of Stablecoins
                            </li>
                        </a>
                        <a href="#fiat-backed" className="fiat-backed hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Fiat-backed
                            </li>
                        </a>
                        <a href="#Commodity-backed" className="Commodity-backed hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Commodity-backed
                            </li>
                        </a>
                        <a href="#Cryptocurrency-backed" className="Cryptocurrency-backed hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cryptocurrency-backed
                            </li>
                        </a>
                        <a href="#Algorithmic" className="Algorithmic hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Algorithmic
                            </li>
                        </a>
                        <a href="#why-stablecoins" className="why-stablecoins hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Why Gamble with Stablecoins?
                            </li>
                        </a>
                        <a href="#best-stablecoin-casinos" className="best-stablecoin-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best Stablecoin Casinos
                            </li>
                        </a>
                        <a href="#bcgame-casino" className="bcgame-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BC.Game Casino
                            </li>
                        </a>
                        <a href="#trueflip-casino" className="trueflip-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                True Flip
                            </li>
                        </a>
                        <a href="#Cloudbet-casino" className="Cloudbet-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cloudbet
                            </li>
                        </a>
                        <a href="#get-started" className="get-started hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                How to Get Started
                            </li>
                        </a>
                        <a href="#FAQ" className="FAQ hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Frequently Asked Questions
                            </li>
                        </a>
                    </ul>
                    <p className="font-bold my-8">Popular Casinos</p>
                    {
                        [siteDatas[0], siteDatas[1], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
                            return (
                                <NavBarMiniTable
                                    key={index}
                                    siteIndex={index}
                                    summaryData={summaryInfo}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const MainPage = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-full h-32 bg-[#000331]" />
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center xl:mt-[-5rem]">
                <MainContent />

                <div className="p-10 w-full flex flex-col justify-center">
                    <div className="h1">Latest News</div>
                    <ReadMoreCards />
                </div>
            </div>
        </div>
    )
}

export default MainPage;