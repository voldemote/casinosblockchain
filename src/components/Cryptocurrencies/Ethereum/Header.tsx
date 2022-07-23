import "../css/index.css";

import EtherIcon from "../../../Assets/images/CryptoIcon/eth-icon.svg"
import EtherBackground from "../../../Assets/images/ethereum_header.png"

const Header = () => {
    return (
        <div className="tax-header tax-header_games bg-cover bg-center" style={{
            backgroundImage: `url(${EtherBackground})`
        }}>
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__subheader" style={{ background: "linear-gradient(169.7deg, rgba(59, 188, 244, 0.32) 0%, rgba(59, 244, 158, 0.32) 100%)" }} >
                            <p className="text-[#3BF4B8] mb-0">our top rating</p>
                        </div>
                        <div className="tax-header__title">
                            <img src={EtherIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Ethereum Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Launched in 2015, Ethereum is already one of the most popular cryptocurrencies at blockchain casinos. Browse our list of best Ethereum casinos and find out all you need to know about Ethereum bonuses, Dapps, and more.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;