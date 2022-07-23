import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Header from "../../components/Cryptocurrencies/Dogecoin/Header"
import Content from "../../components/Games/Crash/Content"
import SiteInfos from "../../components/Games/Crash/Siteinfos"

const Dogecoin = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
            <Footer />
        </div>
    )
}

export default Dogecoin