import SiteSummaryCard from "../Card/SiteSummaryCard";
import { siteDatas } from "../../Interfaces/SiteDatas";
import { ISiteInfoObj } from "../../Interfaces";
import { useState } from "react";

const SiteInfos = () => {
    const dummyInfos: Array<ISiteInfoObj> = [siteDatas[6], siteDatas[1]];

    const [openSubInfoIndex, setOpenSubInfoIndex] = useState<null | number>(null);
    return (
        <div className="bg-gray-100 flex items-center justify-center pb-28">
            <div className="w-full mt-24">
                {dummyInfos.length > 0 &&
                    <div className="flex flex-row justify-between py-2 bg-gray-700 text-white rounded-t-xl shadow-xl">
                        <div className="w-24 flex items-center justify-center">
                            #
                        </div>
                        <div className="w-64 flex flex-row justify-start">
                            Name
                        </div>
                        <div className="w-32 flex items-center justify-start">
                            Bonus
                        </div>
                        <div className="w-40 flex items-start justify-start">
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
                    dummyInfos.map((siteData: ISiteInfoObj, index: number) => {
                        return (
                            <SiteSummaryCard
                                key={index}
                                siteIndex={index}
                                openSubInfoIndex={openSubInfoIndex}
                                setOpenSubInfoIndex={setOpenSubInfoIndex}
                                siteData={siteData}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SiteInfos;