import "../css/index.css";

import CardanoIcon from "../../../Assets/images/CryptoIcon/cardano-icon.svg"
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
                            <img src={CardanoIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Cardano Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Looking for a more environmentally-friendly option for your cryptocurrency gambling? Then check out the Cardano casinos that we've handpicked just for you: due to proof-of-stake, Cardano (or ADA) is much less power-intensive than proof-of-work coins like Bitcoin, which means you can play a lot more sustainably!
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;