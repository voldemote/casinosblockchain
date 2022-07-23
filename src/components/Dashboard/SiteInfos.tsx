import SiteSummaryCard from "../Card/SiteSummaryCard";
import { siteDatas } from "../../Interfaces/SiteDatas";
import { ISiteInfoObj } from "../../Interfaces";
import { useState } from "react";
import { Button } from '@mui/material';
import KeyboardArrowRightICon from '@mui/icons-material/KeyboardArrowRight';

const SiteInfos = () => {
    const [openSubInfoIndex, setOpenSubInfoIndex] = useState<null | number>(null);
    const [showSiteNumbers, setShowSiteNumbers] = useState(10);

    return (
        <div className="bg-gray-100 flex items-center justify-center pb-28">
            <div className="w-11/12 -mt-24">
                {siteDatas.length > 0 &&
                    <div className="flex flex-row justify-between py-2 bg-gray-700 text-white rounded-t-xl shadow-xl">
                        <div className="w-24 flex items-center justify-center">
                            #
                        </div>
                        <div className="w-64 flex flex-row justify-start">
                            Name
                        </div>
                        <div className="w-40 flex items-center justify-start">
                            Bonus
                        </div>
                        <div className="w-20 flex items-start justify-start">
                            Features
                        </div>
                        <div className="w-20 flex items-center justify-center">
                            Rating
                        </div>
                        <div className="w-44">
                        </div>
                        <div className="w-44 mr-6 flex items-center justify-start">
                            Website
                        </div>
                    </div>
                }
                {siteDatas.length > 0 &&
                    siteDatas.map((summaryInfo: ISiteInfoObj, index: number) => {
                        if (index < showSiteNumbers) {
                            return (
                                <SiteSummaryCard
                                    key={index}
                                    siteIndex={index}
                                    openSubInfoIndex={openSubInfoIndex}
                                    setOpenSubInfoIndex={setOpenSubInfoIndex}
                                    siteData={summaryInfo}
                                />
                            )
                        }
                        return "";

                    })
                }
                {showSiteNumbers < siteDatas.length &&
                    <Button
                        className="w-full mt-10 text-black bg-white py-3 justify-center gap-x-4 rounded-lg shadow-xl hover:bg-gray-200"
                        endIcon={<KeyboardArrowRightICon className="text-black" />}
                        onClick={() => { setShowSiteNumbers(showSiteNumbers + 10) }}
                    >
                        Show More
                    </Button>
                }
            </div>

        </div>
    )
}

export default SiteInfos;