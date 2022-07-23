import React from 'react';
import { Button } from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import giftImg from "../../Assets/images/gift.png";


import { ISiteRankBlogCardObj } from "../../Interfaces";

interface IProps {
    siteIndex: number,

    summaryData: ISiteRankBlogCardObj
}

const SiteRankBlogTable = (props: IProps) => {
    const summaryData = props.summaryData;
    return (
        <React.Fragment>
            <div className="flex flex-row justify-between border-b border-l border-r border-gray-300 p-3 bg-white shadow-xl hover:bg-gray-200 cursor-pointer">
                <div className="w-full md:w-40 flex flex-row justify-start gap-x-4" >
                    <div className="flex items-center justify-center">
                        <img className="w-16 rounded-full" src={summaryData.logo} alt="RankBlogImg" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-0.5 w-full">
                        <span className="text-base font-bold">{summaryData.name}</span>
                        <div className='flex md:hidden'>
                            {summaryData.bonus &&
                                <Button
                                    className="w-24 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                                    endIcon={<KeyboardArrowRightIcon className="text-black rounded-full bg-orange-400" />}
                                >
                                    <img className="h-3" src={giftImg} alt="RankBlogImg" />
                                    <span className="text-xs text-black">{summaryData.bonus}</span>
                                </Button>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-32 md:flex items-center justify-start hidden">
                    {summaryData.bonus &&
                        <Button
                            className="w-20 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                            endIcon={<KeyboardArrowRightIcon className="text-black rounded-full bg-orange-400 text-xs" />}
                        >
                            <img className="h-3" src={giftImg} alt="RankBlogImg" />
                            <span className="text-[10px] text-black">{summaryData.bonus}</span>
                        </Button>
                    }
                </div>
                <div className="w-40  flex-col items-start justify-center hidden md:flex">
                    {summaryData.features.length > 0 && <div className="text-sm">{summaryData.features[0]}</div>}
                    {summaryData.features.length > 1 && <div className="text-sm">{summaryData.features[1]}</div>}
                </div>

                <div className="w-48 flex items-center justify-center">
                    <div className='hidden md:block'>
                        <Button
                            className="text-white text-xs h-10"
                            variant="contained"
                            size='small'
                            color="primary"
                            startIcon={<OpenInNewIcon />}
                            href={summaryData.link}
                            target="_BLANK"
                        >
                            VISIT WEBSITE
                        </Button>
                    </div>
                    <div className='block md:hidden'>
                        <Button
                            className="text-white text-xs h-10"
                            variant="contained"
                            size='small'
                            color="primary"
                            href={summaryData.link}
                            target="_BLANK"
                        >
                            Play
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default SiteRankBlogTable;