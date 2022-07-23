import "../css/index.css";

import DogecoinIcon from "../../../Assets/images/CryptoIcon/dogecoin-icon.svg"
import backgroundImg from "../../../Assets/images/final_header.png"

const Header = () => {
    return (
        <div className="tax-header tax-header_games bg-cover bg-center" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__subheader" style={{ background: "linear-gradient(169.7deg, rgba(59, 188, 244, 0.32) 0%, rgba(59, 244, 158, 0.32) 100%)" }} >
                            <p className="text-[#3BF4B8] mb-0">our top rating</p>
                        </div>
                        <div className="tax-header__title">
                            <img src={DogecoinIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Dogecoin Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Ah, the mythical Dogecoin - claimed to be Elon Musk's favorite cryptocurrency. The so-called "meme coin" has gained fame and unexpected usability over the years. It's now a staple of many blockchain casinos and a viable (yet funny) altcoin for online gambling.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;