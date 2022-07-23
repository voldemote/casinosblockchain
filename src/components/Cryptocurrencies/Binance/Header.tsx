import "../css/index.css";

import BnbIcon from "../../../Assets/images/CryptoIcon/bnb-icon.svg"
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
                            <img src={BnbIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Binance Coin Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            BNB, or Binance Coin, was created as a utility token for the Binance exchange back in 2017. While, originally, it was almost exclusively used to pay for transaction fees at Binance, it has since become more widely accepted. Nowadays, you can use it to play slot machines, live casino games, and more at Binance Casinos.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;