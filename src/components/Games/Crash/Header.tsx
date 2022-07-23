import "../css/index.css"

import CrashSvg from "../../../Assets/images/crash.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={CrashSvg} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Crash</div>
                        </div>
                        <div className="tax-header__description">Crash is a cryptocurrency-inspired casino game, available in all the best blockchain casinos and Dapps. Easy-to-play, yet exciting, check out Crash today for a chance at vast profits... But be careful not to crash!</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;