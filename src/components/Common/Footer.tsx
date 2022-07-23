import backgroundImg from "../../Assets/images/final_header.png"
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full bg-center bg-cover py-5 flex justify-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex flex-row justify-between w-11/12">
                <div className="">
                    <Button href='/' className="text-lg text-gray-300 normal-case hover:text-amber-500">
                        casinoblockchain.io
                    </Button>
                </div>
                {/* <div className="flex flex-row gap-x-5">
                    <Button href='/' className="text-white text-sm hover:text-amber-500">
                        {t("ABOUT")}
                    </Button>
                    <Button href='/' className="text-white text-sm hover:text-amber-500">
                        {t("title5")}
                    </Button>
                    <Button href='/' className="text-white text-sm hover:text-amber-500">
                        {t("title6")}
                    </Button>
                    <Button href='/' className="text-white text-sm hover:text-amber-500">
                        {t("title7")}
                    </Button>
                    <Button href='/' className="text-white text-sm hover:text-amber-500">
                        {t("title12")}
                    </Button>
                </div> */}
                <div className="text-white text-sm flex items-center">
                    © Casinos Blockchain, 2022. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;