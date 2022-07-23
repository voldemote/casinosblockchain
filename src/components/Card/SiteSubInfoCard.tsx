import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { ISiteInfoObj } from "../../Interfaces";

interface IProps {
    siteData: ISiteInfoObj
}


const SiteSubInfoCard = (props: IProps) => {
    const siteData = props.siteData;
    return (
        <div className="pb-4">
            <div className="flex flex-col pt-6 pb-4 px-6 shadow-xl border-b border-l border-r border-gray-300 rounded-b-lg bg-white">
                <div className="flex flex-row justify-between items-center border-b pb-1">
                    <div className="text-xl">
                        {siteData.name}
                    </div>
                    <div>
                        <Button
                            className="text-blue text-xs"
                            endIcon={<OpenInNewIcon className="w-4"/>}
                            href={"https://" + siteData.link}
                            target="_BLANK"
                        >
                            {siteData.link}
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row py-5 border-b border-gray-200 pb-8">
                    <div className="w-1/3 flex flex-col pr-10 gap-y-4">
                        <div className="flex flex-row gap-x-3">
                            <InfoOutlinedIcon/>
                            <div className="font-bold">About {siteData.name}</div>
                        </div>
                        <div className="text-sm">
                            {siteData.overview.summary}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col px-10  gap-y-4">
                        <div className="flex flex-row gap-x-3">
                            <AssignmentOutlinedIcon/>
                            <div className="font-bold">Overview</div>
                        </div>
                        <div className="flex flex-col border">
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                <div className="text-sm">
                                    Website
                                </div>
                                <Button
                                    className="text-blue text-sm lowercase text-end"
                                    endIcon={<OpenInNewIcon className="w-4"/>}
                                    href={"https://" + siteData.link}
                                    target="_BLANK"
                                >
                                    {siteData.link}
                                </Button>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                <div className="text-sm">
                                    Established
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.established ? siteData.overview.established : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                <div className="text-sm">
                                    Licence
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.licence ? siteData.overview.licence : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                <div className="text-sm">
                                    Bonus
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.bonus ? siteData.overview.bonus : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                <div className="text-sm">
                                    Wagering Requirement
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.wageringRequrement ? siteData.overview.wageringRequrement : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                <div className="text-sm">
                                    No Deposit Bonus
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.noDepositFaucet ? siteData.overview.noDepositFaucet : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                <div className="text-sm">
                                    Live Chat
                                </div>
                                <div className="text-sm text-end">
                                    {siteData.overview.liveChat}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col pl-10  gap-y-4">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-x-3">
                                <StarBorderOutlinedIcon/>
                                <div className="font-bold">Rating</div>
                            </div>
                            <div className="font-bold text-Green-600">
                                {siteData.overview.rating.total}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            { Number(siteData.overview.rating.bonus) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Bonuses
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.bonus)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.bonus}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.lookAndFeel) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Look & Feel
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.lookAndFeel)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.lookAndFeel}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.LicenceAndSafety) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Licencing & Safety
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.LicenceAndSafety)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.LicenceAndSafety}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.gameSelection) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Game Selection
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.gameSelection)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.gameSelection}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.paymentOption) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Payment Options
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.paymentOption)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.paymentOption}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.customerSupport) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Customer Support
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.customerSupport)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.customerSupport}/5
                                        </div>
                                    </div>
                                </div>
                            }
                            { Number(siteData.overview.rating.customerReview) > 0 &&
                                <div className="flex flex-row items-center justify-between border-b h-8">
                                    <div className="text-sm">
                                        Customer Reviews
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.customerReview)} precision={0.1} className="mr-3"/>
                                        <div className="text-sm w-8 flex justify-end">
                                            {siteData.overview.rating.customerReview}/5
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end py-5 gap-x-10">
                    <div>
                        <Button
                            className="text-blue"
                            href={"/review/" + siteData.link}
                        >
                            Read Review
                        </Button>
                    </div>
                    <div>
                        <Button
                            className="text-white"
                            variant="contained"
                            color="primary"
                            startIcon={<OpenInNewIcon/>}
                            href={"https://" + siteData.link}
                            target="_BLANK"
                            
                        >
                            VISIT WEBSITE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SiteSubInfoCard;