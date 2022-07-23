import { useState } from "react";
import { Button } from "@mui/material";

const CasinoExplain = () => {
    const [readMoreGambling, setReadMoreGambling] = useState(false);
    const [readMoreCryptoCasino, setReadMoreCryptoCasino] = useState(false);
    const [readMoreBlockchainCasino, setReadMoreBlockchainCasino] = useState(false);
    const [readMoreHouseAllWin, setReadMoreHouseAllWin] = useState(false);
    const [readMoreDecentralCasinos, setReadMoreDecentralCasinos] = useState(false);
    const [readMorePotentialDisruption, setReadMorePotentialDisruption] = useState(false);
    const [readMoreFasterWithdrawals, setReadMoreFasterWithdrawals] = useState(false);
    const [readMoreReducedFees, setReadMoreReducedFees] = useState(false);
    const [readMoreLowerEntryBarrier, setReadMoreLowerEntryBarrier] = useState(false);

    return (
        <div className="py-20 bg-white flex justify-center">
            <div className="w-11/12 flex flex-col justify-center">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold text-black">
                        Why Blockchain Gambling?
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">
                            All cards have been dealt for blockchain gambling sites to take over the online casino industry. Their revolutionary blockchain technology, the same behind famous cryptocurrencies like Bitcoin and Ethereum, is a decentralized ledger database that can operate transparently in a distributed network of devices. It can also trigger certain actions that are executed only under specific conditions or rules – also known as smart contracts.
                        </div>
                        <div className="text-sm text-black">
                            If that sounds like technical gibberish, you’re not alone. Just think of Bitcoin and other cryptocurrencies as a fancy programmable form of money. Blockchain is, then, the database where all transactions are registered. Since it has millions of copies stored on many different computers, it’s a decentralized database. Because of that, it can be verified by just about anyone – hence its transparency. That’s about it.
                        </div>
                        {readMoreGambling && 
                            <div className="text-sm text-black">
                                Whether people like cryptocurrencies or not, its core technology, blockchain, has come to stay – and it will improve many industries in ways we can’t quite fathom yet. What’s more, if you’re interested in blockchain casinos and don’t want to pay using Bitcoin or other coins, that’s fine. Several blockchain gambling sites with provably fair casino games also accept fiat currencies like the U.S. Dollar ($) or the Euro (€).
                            </div>
                        }
                        {readMoreGambling && 
                            <div className="text-sm text-black">
                                Provably fair games allow you to confirm, in some way or another, that the game you are playing is indeed using a Random Number Generator (RNG). This is an acceptable way of ensuring the casino is not partaking in any questionable practices. While you can also choose to play games manufactured by reputable providers, provably fair games are a viable alternative, particularly when trying new games.
                            </div>
                        }
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreGambling(!readMoreGambling)}
                            >
                                {readMoreGambling ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-20">
                    <div className="text-3xl font-bold text-black">
                        Cryptocurrency Casinos
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">              
                            Cryptocurrency casinos are more than just websites where you can gamble with Bitcoin. Not only can they guarantee an optimal player experience – keeping up with the highest standards in the industry – but they can also offer several other payment options. If you’re really into cryptocurrency gambling and own more exotic coins, then you’ll be glad to hear that the following are also widely accepted: Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Dogecoin (DOGE), and Tether (USDT).
                        </div>
                        <div className="text-sm text-black">
                            If you’re into the anonymous side of cryptocurrency gambling, then even Monero (XMR) and Zcash (ZEC) are supported by some casinos. Furthermore, depending on which casino you choose, you won’t be required to go through a KYC process, either because of its licensing or its blockchain implementation.
                        </div>
                        <div className="text-sm text-black">
                            You can see a complete list of cryptocurrencies you can use for gambling here.
                        </div>
                        {readMoreCryptoCasino && 
                            <div className="text-sm text-black">
                                The cryptocurrency gambling trend has caught up so feverously that more traditional online casinos are now offering cryptocurrencies as a payment method. Likewise, other online casinos that started exclusively accepting Bitcoin have expanded their options to include fiat currencies. The trend is backed up by data from renowned players in the industry, such as the crypto-friendly game platform SoftSwiss, which recently divulged they reported a threefold increase in crypto gambling traffic in 2020.
                            </div>
                        }
                        {readMoreCryptoCasino && 
                            <div className="text-sm text-black">
                                There is much to say about game diversity as well. Don’t think all crypto casinos solely feature original and provably fair games: you can also find all the best titles by your favorite providers on our recommended casinos. However, we encourage you to try out the more novel casinos in this space, ripe with innovation and surprising features.
                            </div>
                        }
                        {readMoreCryptoCasino && 
                            <div className="text-sm text-black">
                                With the popularity surge of cryptocurrencies over the past years, the diversity of options at Bitcoin casinos is undeniable. Want to play live casino games using Bitcoin? You can! Would you rather discover provably fair games on an Ethereum-based Dapp? Sure! Perhaps you’re more into playing your favorite slot by NetEnt or Playtech with Litecoin? That’s an option too!
                            </div>
                        }
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreCryptoCasino(!readMoreCryptoCasino)}
                            >
                                {readMoreCryptoCasino ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-20">
                    <div className="text-3xl font-bold text-black">
                        Cryptocurrency Casinos
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">              
                            Blockchain casinos? Bitcoin casinos?
                        </div>
                        <div className="text-sm text-black">
                            It’s common to see these two terms used interchangeably and wrongly so. At first, differences between a blockchain casino and a Bitcoin casino might be hard to spot, especially because there is no precise definition of these terms. The question remains: what are they, really?
                        </div>
                        <div className="text-sm text-black">
                            Any traditional online casino that accepts Bitcoin (BTC) as a form of payment can automatically be considered a Bitcoin casino. When playing at such a casino, you’re using the blockchain to transfer funds.
                        </div>
                        <div className="text-sm text-black">
                            However, cryptocurrency gambling per se is just scratching the surface of blockchain technology, which has nearly unlimited potential. Casinos can incorporate the blockchain into their core structures, thus becoming a true blockchain gambling hub.
                        </div>
                        {readMoreBlockchainCasino && 
                            <div className="text-sm text-black">
                                On one end, we have casinos that include cryptocurrencies as a payment option. On the other end, the casino can resort to smart contracts, automating payments for each game and making your winnings instantly available in your wallet. In this more extreme view of cryptocurrency gambling, the mere idea of deposits and withdrawals is irrelevant.
                            </div>
                        }
                        {readMoreBlockchainCasino && 
                            <div className="text-sm text-black">
                                This dichotomy is something we consider extremely relevant when evaluating the casinos we recommend here at CasinosBlockchain. Read our reviews if you want to know more about how each casino incorporates this technology into its platform.
                            </div>
                        }
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreBlockchainCasino(!readMoreBlockchainCasino)}
                            >
                                {readMoreBlockchainCasino ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-20">
                    <div id="tempBG2-1" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                The House Always Wins?
                            </div>
                            <div className="text-sm text-black">
                                The house always has to win. But what if the house could lower its edge? We all know casinos make money because of their mathematical edge. This allows them to pay winning players, cover operational costs, and in the end, profit.
                            </div>
                            {readMoreHouseAllWin && 
                                <div className="text-sm text-black">
                                    With blockchain, developers can create their own games and make them directly available to players. Casinos that are fully incorporated with this technology and lower their operational costs give players a chance to win more.
                                </div>
                            }
                            {readMoreHouseAllWin && 
                                <div className="text-sm text-black">
                                    So yes, the house still wins… the house always. But players win more too.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreHouseAllWin(!readMoreHouseAllWin)}
                            >
                                {readMoreHouseAllWin ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                    <div id="tempBG2-2" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                Decentralized Casinos
                            </div>
                            <div className="text-sm text-black">
                                Casino games are now offered through decentralized applications – or Dapps. Since decentralized casinos rely exclusively on the blockchain, they are the epitome of blockchain gambling.
                            </div>
                            {readMoreDecentralCasinos && 
                                <div className="text-sm text-black">
                                    Consequently, these games are the building blocks of a decentralized casino. They must, however, adhere to certain specifications.
                                </div>
                            }
                            {readMoreDecentralCasinos && 
                                <div className="text-sm text-black">
                                    For instance, they must be open-source and fully independent from third-party controls. Moreover, transparency is key: decentralized casinos invariably keep their records public.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreDecentralCasinos(!readMoreDecentralCasinos)}
                            >
                                {readMoreDecentralCasinos ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                    <div id="tempBG2-3" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                Potential For Disruption
                            </div>
                            <div className="text-sm text-black">
                                The many intricacies that assemble blockchain technology will bring new building blocks to this industry. Players, regulators, and casinos have multiple reasons to welcome them.
                            </div>
                            {readMorePotentialDisruption && 
                                <div className="text-sm text-black">
                                    Exactly how blockchain and casino companies choose to approach the situation is inconsequential; it can only bring a much-needed breath of fresh air to everyone involved.
                                </div>
                            }
                            {readMorePotentialDisruption && 
                                <div className="text-sm text-black">
                                    One thing is clear – crypto casinos are becoming more popular, with more and more gamblers opting for cryptocurrency payments and looking for a fairer, more decentralized gambling experience.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMorePotentialDisruption(!readMorePotentialDisruption)}
                            >
                                {readMorePotentialDisruption ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                    <div id="tempBG2-4" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                Faster Withdrawals
                            </div>
                            <div className="text-sm text-black">
                                Your withdrawal request gets processed instantly, and the funds go straight to your wallet. No third parties are involved. In rare cases, payments can take up to one hour to be processed.
                            </div>
                            {readMoreFasterWithdrawals && 
                                <div className="text-sm text-black">
                                    This is very different from traditional casinos, where payments can take up to 5 business days to complete.
                                </div>
                            }
                            {readMoreFasterWithdrawals && 
                                <div className="text-sm text-black">
                                    Furthermore, using cryptocurrencies means that no third-party payment provider enters the equation. Everything is carried out (you guessed) on the blockchain.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreFasterWithdrawals(!readMoreFasterWithdrawals)}
                            >
                                {readMoreFasterWithdrawals ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                    <div id="tempBG2-5" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                Reduced Fees
                            </div>
                            <div className="text-sm text-black">
                                One of cryptocurrency gambling’s many advantages is that you can typically expect to pay much lower withdrawal fees. This is true whether you play with Bitcoin or any other coin.
                            </div>
                            {readMoreReducedFees && 
                                <div className="text-sm text-black">
                                    Whatever tiny fee you may incur will be a miner’s fee – one which is paid to the cryptocurrency’s own blockchain.
                                </div>
                            }
                            {readMoreReducedFees && 
                                <div className="text-sm text-black">
                                    This is possible because all transactions take place on the blockchain, and therefore no extra burden is placed on the casino’s operating costs.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreReducedFees(!readMoreReducedFees)}
                            >
                                {readMoreReducedFees ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                    <div id="tempBG2-6" className="flex flex-col justify-between gap-y-3 px-5 py-5 rounded-xl">
                        <div className="flex flex-col justify-start gap-y-3">
                            <div className="text-xl font-bold text-black">
                                Lower Entry Barrier
                            </div>
                            <div className="text-sm text-black">
                                On some Bitcoin casinos, you can start playing right away without needing to disclosing any personal data. For the most part, all you need is an e-mail and a password.
                            </div>
                            {readMoreLowerEntryBarrier && 
                                <div className="text-sm text-black">
                                    We’re sure you agree that being able to play without disclosing sensitive data is a plus. Players can get started within seconds, sometimes even testing out the games for free with whatever amount they can get from the platform’s faucet. If you value your data privacy, cryptocurrency gambling is the way to go.
                                </div>
                            }
                        </div>
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreLowerEntryBarrier(!readMoreLowerEntryBarrier)}
                            >
                                {readMoreLowerEntryBarrier ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasinoExplain;