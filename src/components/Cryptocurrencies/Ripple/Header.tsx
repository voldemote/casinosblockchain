import "../css/index.css";

import RippleIcon from "../../../Assets/images/CryptoIcon/ripple-icon.svg"
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
                            <img src={RippleIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Ripple Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Ripple (XRP) is a controversial cryptocurrency among blockchain enthusiasts. Despite recent legal troubles, it's still backed by major companies around the world, and it's a very functional coin for payment processing. And yes, you can use it at some of the best online casinos.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;