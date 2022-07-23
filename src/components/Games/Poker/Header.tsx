import "../css/index.css"

import PokerLogo from "../../../Assets/images/poker-logo.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={PokerLogo} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Poker</div>
                        </div>
                        <div className="tax-header__description">Can you master a poker face? Poker is that infamous casino game you can play professionally, but only if you've got nerves of steel. A similar mindset can come in handy at a blockchain casino. Whether you play with Bitcoin, Ethereum, or something else, keeping your cool can take you to victory.</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;