import "../css/index.css"

import RouoletteLogo from "../../../Assets/images/roulette-provider-logo.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={RouoletteLogo} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Roulette</div>
                        </div>
                        <div className="tax-header__description">
                            As one of the oldest forms of gambling out there, Roulette is the game that can't be left out of any casino. Invented in France many years ago, it soon gained worldwide recognition. Nowadays, Bitcoin roulettes thrill players across most crypto casinos and casino Dapps. Roulette might be a classic, but still hasn't lost its charm!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;