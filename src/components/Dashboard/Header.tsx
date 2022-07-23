import backgroundImg from "../../Assets/images/final_header.png"
const Header = () => {
    return (
        <div className="bg-center bg-cover pt-20 pb-40 flex justify-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="">
                    <span className="text-yellow-500 text-base font-bold bg-orange-700 rounded px-2 py-1">
                        2022 CRYPTO CASINO POWER LIST (+30 REVIEWS)
                    </span>
                </div>
                <div className="text-white font-bold text-3xl md:text-6xl">
                    Blockchain Casinos
                </div>
                <div className="flex flex-row items-center justify-start gap-x-8">
                    <div className="flex flex-row items-center justify-center gap-x-1.5">
                        <div className="bg-green-500 text-sm font-bold rounded-full w-5 h-5 mt-1 flex justify-center items-center">
                            ✓
                        </div>
                        <div className="text-white text-xl">Instant Payments</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-1.5">
                        <div className="bg-green-500 text-sm font-bold rounded-full w-5 h-5 mt-1 flex justify-center items-center">
                            ✓
                        </div>
                        <div className="text-white text-xl">Higher Winnings</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-1.5">
                        <div className="bg-green-500 text-sm font-bold rounded-full w-5 h-5 mt-1 flex justify-center items-center">
                            ✓
                        </div>
                        <div className="text-white text-xl">Full Transparency</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;