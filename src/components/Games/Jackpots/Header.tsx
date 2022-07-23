import "../css/index.css"

import JackpotGames from "../../../Assets/images/jackpot-games.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={JackpotGames} alt="Crash" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Jackpots</div>
                        </div>
                        <div className="tax-header__description">Crash is a One single spin, a life-changing win. Who hasn't dreamed of winning a juicy Bitcoin jackpot? But don't think you can only win big at progressive jackpot slots: blockchain casinos offer a myriad of jackpot games. From dice to roulette and even casino-wide prize draws, there's a Bitcoin jackpot for every taste.</div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;