import "../css/index.css";

import BitcoinIcon from "../../../Assets/images/CryptoIcon/bitcoin-icon.svg"
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
                            <img src={BitcoinIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Bitcoin Casinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Bitcoin casinos are the future: with faster payments, more transparency, and fewer costs, they bring more to the table than your run-of-the-mill online casino. But not all Bitcoin casinos are the same. Browse our list to learn all about the very best and the not-so-great casinos accepting BTC in 2022.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;