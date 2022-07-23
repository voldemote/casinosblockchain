import { useState } from 'react';


const FAQ = () => {
    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);
    const [openFAQ4, setOpenFAQ4] = useState(false);
    const [openFAQ5, setOpenFAQ5] = useState(false);

    return (
        <div className="py-10 bg-white flex justify-center">
            <div className="w-11/12 flex flex-row justify-between">
                <div className="w-2/5 text-3xl font-bold text-black">
                    Frequently Asked Questions
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                    <div className="flex flex-col border-b border-gray-400 px-1 py-2">
                        <div
                            className="text-md text-black font-medium cursor-pointer"
                            onClick={() => { setOpenFAQ1(!openFAQ1) }}
                        >
                            Are blockchain casinos better than traditional alternatives?
                        </div>
                        {openFAQ1 &&
                            <div className="text-sm text-black mt-5">
                                If playing with Bitcoin isn’t a hassle for you, then there is no reason for you not to play with BTC (or any other cryptocurrency). The best blockchain gambling sites have all the top game providers, a seamless website design, helpful customer support, hefty bonuses, and much more.
                                <br></br>
                                <br></br>
                                On top of that, depositing and withdrawing with cryptocurrencies is much faster than with more traditional payment methods. So, in a way, yes – blockhain casinos, including Bitcoin casinos, are better than their alternatives (as long as you choose the best ones). The same goes for casinos where you can pay with other cryptocurrencies.
                            </div>
                        }
                    </div>
                    <div className="flex flex-col border-b border-gray-400 px-1 py-2">
                        <div
                            className="text-md text-black font-medium cursor-pointer"
                            onClick={() => { setOpenFAQ2(!openFAQ2) }}
                        >
                            Can a Bitcoin casino be considered a blockchain casino?
                        </div>
                        {openFAQ2 &&
                            <div className="text-sm text-black mt-5">
                                There is no clear definition. The usage of blockchain technology by a casino can vary quite a bit, and just how much of it is necessary for a casino to officially fall under that category or another is still a blur.
                                <br></br>
                                <br></br>
                                Technically, the fact that a casino accepts Bitcoin or any other cryptocurrency as a form of payment implies that it uses the blockchain to transfer funds. But a casino can go a lot further than this and be decentralized at its core.
                                <br></br>
                                <br></br>
                                But while technically a Bitcoin casino uses the blockchain, some people consider it unfair to call it a blockchain casino because they don’t rely on that technology to function. Again, no clear definition exists, so we won’t pick a side.
                                <br></br>
                                <br></br>
                                We will, however, leave an aphorism for consideration: is a chicken a bird if it can’t fly?
                            </div>
                        }
                    </div>
                    <div className="flex flex-col border-b border-gray-400 px-1 py-2">
                        <div
                            className="text-md text-black font-medium cursor-pointer"
                            onClick={() => { setOpenFAQ3(!openFAQ3) }}
                        >
                            Is Blockchain gambling legal?
                        </div>
                        {openFAQ3 &&
                            <div
                                className="text-sm text-black mt-5">
                                In short: yes. You should, however, be aware of which jurisdiction you are playing from and if the casino accepts players from it.
                                <br></br>
                                <br></br>
                                It is fair to say that Bitcoin and other coins impose difficulties for regulators worldwide because any central authority does not control them, transactions aren’t easily monitored. They can’t be effectively interrupted or controlled in any way.
                                <br></br>
                                <br></br>
                                Cryptocurrencies – including Bitcoin – often sit in a gray legal area. However, cryptocurrency gambling sites have gone all the way to obtain licenses from reputable regulatory bodies. Like you’d expect from other respected online casinos.
                            </div>
                        }
                    </div>
                    <div className="flex flex-col border-b border-gray-400 px-1 py-2">
                        <div
                            className="text-md text-black font-medium cursor-pointer"
                            onClick={() => { setOpenFAQ4(!openFAQ4) }}
                        >
                            What is a decentralized casino?
                        </div>
                        {openFAQ4 &&
                            <div className="text-sm text-black mt-5">
                                Decentralized casinos or Dapps (short for Decentralized Application) run entirely within a blockchain.
                                <br></br>
                                <br></br>
                                These casinos use smart-contracts and open-source programming to increase their transparency. What’s more, game outcomes are publicly verifiable, meaning that the casino doesn’t have to rely on third-parties to double-check game fairness.
                                <br></br>
                                <br></br>
                                Overall, Dapps more straightforward and inherently more anonymous than traditional online casinos. In some cases, you don’t even have to make a deposit or create an account before you start playing. You simply have to connect your wallet to the gambling Dapp through a browser extension, and you’re ready to go.
                            </div>
                        }
                    </div>
                    <div className="flex flex-col border-b border-gray-400 px-1 py-2">
                        <div
                            className="text-md text-black font-medium cursor-pointer"
                            onClick={() => { setOpenFAQ5(!openFAQ5) }}
                        >
                            Are blockchain casinos safe?
                        </div>
                        {openFAQ5 &&
                            <div
                                className="text-sm text-black mt-5">
                                If you’re simply talking about casinos that accept Bitcoin or any other cryptocurrency as a payment method, then you should be careful and only choose trustworthy casinos. Luckily, there are quite a few. You’ll find them right here on our homepage.
                                <br></br>
                                <br></br>
                                If you’re talking about decentralized casinos that run entirely on the blockchain, then you have no reason to worry. Most of them are safe for two reasons:
                                1) they don’t even hold your funds; and
                                2) their games are provably fair.
                                <br></br>
                                <br></br>
                                <br></br>
                                However, we can only vouch for the ones we have reviewed.
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;