import { useState } from "react";
import { Button } from "@mui/material";

const BlockchainGamblingLegal = () => {
    const [readMoreGamblingLegal, setReadMoreGamblingLegal] = useState(false);
    const [readMoreGamblingLicenses, setReadMoreGamblingLicenses] = useState(false);
    const [readMoreBlockchainCasino, setReadMoreBlockchainCasino] = useState(false);

    return (
        <div className="py-10 bg-gray-200 flex justify-center">
            <div className="w-11/12 flex flex-col justify-center mt-48">
                <div className="flex flex-row justify-between">
                    <div className="w-2/5 text-3xl font-bold text-black">
                        Is Blockchain Gambling Legal?
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">
                            Gambling, has existed, in some form or other, since the dawn of time. It’s one of humankind’s oldest activities. Online gambling, however, is relatively new… and so are cryptocurrencies. It is, therefore, unsurprising that the general public and governments still treat blockchain gambling as a novelty. And while gambling itself is almost always regulated, blockchain casinos are often not.
                        </div>
                        <div className="text-sm text-black">
                            As a rule-of-thumb, if fiat online gambling is legal in your country, so is blockchain gambling, although often under specific restrictions. Countries like the United States and the United Kingdom require all online casinos – including those using blockchain technology – to apply for a local gambling license.
                        </div>
                        {readMoreGamblingLegal &&
                            <div className="text-sm text-black">
                                On the other hand, in many countries where gambling is illegal, ‘cryptocurrencies’ are not legal forms of tender. Betting or playing casino games with coins such as Bitcoin may not be considered gambling because you’re not playing for ‘legal’ money.
                            </div>
                        }
                        {readMoreGamblingLegal &&
                            <div className="text-sm text-black">
                                Overall, there is no straightforward answer to the question: is blockchain gambling legal. It depends on where you live. In countries where online gambling itself is illegal, there is a seemingly clear answer: no. However, as we explained above, even in this purportedly straightforward scenario, it’s not all black-and-white.
                            </div>
                        }
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreGamblingLegal(!readMoreGamblingLegal)}
                            >
                                {readMoreGamblingLegal ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-20">
                    <div className="w-2/5 text-3xl font-bold text-black">
                        Are Gambling Licenses Required for Crypto Casinos?
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">
                            Not exactly. Blockchain gambling still sits in a legal grey area in many countries, especially those that haven’t regulated online gambling. In such places, no local gambling licenses are available.
                        </div>
                        <div className="text-sm text-black">
                            Some governments offer so-called ‘international’ gambling licenses to fill in the gap. While these international licenses do not overrule local legislation, they still protect players: they oversee the casinos and ensure they keep the customer’s best interests at heart.
                        </div>
                        {readMoreGamblingLicenses &&
                            <div className="flex flex-col">
                                <div className="text-sm text-black">
                                    Two examples of international licenses are:
                                </div>

                                <div className="text-sm text-black">
                                    - Curaçao gambling licenses
                                </div>
                                <div className="text-sm text-black">
                                    - MGA (Malta Gambling Authority) licenses
                                </div>
                            </div>
                        }
                        {readMoreGamblingLicenses &&
                            <div className="text-sm text-black">
                                Do note that neither Curaçao nor Malta cater specifically to blockchain or crypto casino players. Instead, they are more generic licenses covering online gaming, from traditional casinos to modern sports gambling websites.
                            </div>
                        }
                        <div>
                            <Button
                                className="text-black text-xs -ml-2"
                                onClick={() => setReadMoreGamblingLicenses(!readMoreGamblingLicenses)}
                            >
                                {readMoreGamblingLicenses ? "READ LESS" : "READ MORE"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-20">
                    <div className="w-2/5 text-3xl font-bold text-black">
                        Are Licensed Blockchain Casinos Better?
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-3">
                        <div className="text-sm text-black">
                            Blockchain casinos? Bitcoin casinos?
                        </div>
                        <div className="text-sm text-black">
                            Unlicensed casinos are often less restrictive than their licensed counterparts and often allow players worldwide to open an account, including from countries where online casinos are restricted. For this reason, many blockchain gambling enthusiasts prefer them. However, at an unlicensed casino, crypto or otherwise, no entity validates game fairness or advocates for players’ rights if they suspect foul-play on the casino’s part.
                        </div>
                        <div className="text-sm text-black">
                            It’s generally unsafe to play at crypto casinos that don’t hold a license, which is why we hardly ever recommend them. Instead, we firmly believe you should always play at licensed casinos when you have the chance.
                        </div>
                        {readMoreBlockchainCasino &&
                            <div className="text-sm text-black">
                                But can you ever play anonymously at a licensed blockchain casino? Not quite. Licensing bodies often require the casinos to have strict customer verification procedures, to prevent identity fraud and money laundering. While disruptive, these procedures help foster a safer, more responsible gambling environment.
                            </div>
                        }
                        {readMoreBlockchainCasino &&
                            <div className="text-sm text-black">
                                However, players looking for a genuinely anonymous blockchain gambling experience can still find it at a few reputable websites.
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
            </div>
        </div>
    )
}

export default BlockchainGamblingLegal;