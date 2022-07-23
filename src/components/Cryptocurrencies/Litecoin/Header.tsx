import "../css/index.css";

import LiteCoinIcon from "../../../Assets/images/CryptoIcon/litecoin_icon.svg"
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
                            <img src={LiteCoinIcon} alt="bitcoin-icon" />
                            <h1 className="text-white font-bold my-2">Litecoin Сasinos</h1>
                        </div>
                        <div className="tax-header__description">
                            Litecoin is infamous for being to silver what Bitcoin is to gold. Developed as a faster and cheaper alternative to Bitcoin, it's often seen as its 'lighter' counterpart. Litecoin hasn't completely stolen its predecessor's thunder so far, but it's an attractive option for online casino players looking for a more accessible coin.
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;