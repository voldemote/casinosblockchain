import Topbar from "../../components/Common/Topbar"
import GameProvider from "../../components/Providers/GameProvider"
import TopSection from "../../components/Providers/TopSection"

const Providers = () => {
    return (
        <div className="select-none">
            <Topbar />
            <TopSection />
            <GameProvider />
        </div>
    )
}

export default Providers