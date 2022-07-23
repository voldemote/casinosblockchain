import { Box } from "@mui/material";
import TopBar from "../../components/Common/Topbar";
import Header from "../../components/Dashboard/Header";
import SiteInfos from "../../components/Dashboard/SiteInfos";
import Review from "../../components/Dashboard/Review";
import CasinoExplain from "../../components/Dashboard/CasinoExplain";
import TopDecentralizedCasinos from "../../components/Dashboard/TopDecentralizedCasinos";
import BlockchainGamblingLegal from "../../components/Dashboard/BlockchainGamblingLegal";
import FAQ from "../../components/Dashboard/FAQ";
import Footer from "../../components/Common/Footer";

const Casinos = () => {
    return (
        <Box className="">
            <TopBar />
            <Header />
            <SiteInfos />
            <Review />
            <CasinoExplain />
            <TopDecentralizedCasinos />
            <BlockchainGamblingLegal />
            <FAQ />
            <Footer />
        </Box>
    )
}

export default Casinos;