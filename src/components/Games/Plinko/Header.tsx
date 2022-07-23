import "../css/index.css"

import PlinkoSvg from "../../../Assets/images/plinko.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={PlinkoSvg} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Plinko</div>
                        </div>
                        <div className="tax-header__description">Nostalgia meets blockchain in Plinko. Drop the ball and keep your fingers crossed! If Lady Luck is on your side, there are juicy prizes ahead. Did we mention Plinko is provably fair, too?</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;