import "../css/index.css"

import DiceSvg from "../../../Assets/images/dice-1.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={DiceSvg} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Dice</div>
                        </div>
                        <div className="tax-header__description">Looking for the best Bitcoin dice games? Your search is over! In this article, we'll cover the top BTC dice casinos and Dapps. From exciting virtual betting to live tables and everything in-between, we've got you govered</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;