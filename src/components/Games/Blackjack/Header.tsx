import "../css/index.css"

import BlackJackSvg from "../../../Assets/images/blackjack-logo.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={BlackJackSvg} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Blackjack</div>
                        </div>
                        <div className="tax-header__description">
                            52 cards. Endless exciting opportunities. Bitcoin blackjack takes the world's favorite card game into the blockchain world. Now you can play blackjack with your BTC, ETH, and even your favorite altcoins. But where? Read on as we rank the best Bitcoin blackjack sites and casinos!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;