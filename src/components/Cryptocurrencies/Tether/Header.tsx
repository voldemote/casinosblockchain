import "../css/index.css";

import UsdtIcon from "../../../Assets/images/CryptoIcon/usdt-icon.svg"
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
                            <img src={UsdtIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Tether Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Pegged to the U.S Dollars, Tether (or USDT) is a stablecoin with a predictable value, high market cap, and large daily volume. This stability is, perhaps, what made it one of the most popular cryptocurrencies in online casinos. Nowadays, you can use it to pay and play online at the many USDT gambling sites available.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;