import SiteSummaryCard from "../../Card/SiteSummaryCard";
import { siteDatas } from "../../../Interfaces/SiteDatas";
import { ISiteInfoObj } from "../../../Interfaces";
import { useState } from "react";

const SiteInfos = () => {
    const [openSubInfoIndex, setOpenSubInfoIndex] = useState<null | number>(null);
    const [showSiteNumbers, setShowSiteNumbers] = useState(10);

    const dummyInfos = [siteDatas[0], siteDatas[1], siteDatas[3], siteDatas[9], siteDatas[10], siteDatas[13], siteDatas[15], siteDatas[17], siteDatas[32]];

    return (
        <div className="bg-gray-100 flex items-center justify-center pb-10">
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
                {dummyInfos.length > 0 &&
                    dummyInfos.map((summaryInfo: ISiteInfoObj, index: number) => {
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
            </div>

        </div>
    )
}

export default SiteInfos;