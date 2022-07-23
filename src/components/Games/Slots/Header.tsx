import "../css/index.css"

import SlotsLogo from "../../../Assets/images/slots-logo.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={SlotsLogo} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Slots</div>
                        </div>
                        <div className="tax-header__description">
                            Slots are by far the most popular casino game, which is not surprising considering the large variety of themes available. Whether you're into burgers, leprechauns, or something else entirely, you’ll find a game that suits you. And yes, all the best slots are available to play with cryptocurrencies – and with bonuses too!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;