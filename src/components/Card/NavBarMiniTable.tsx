import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";

import { IProps } from "../../Interfaces";

import giftImg from "../../Assets/images/gift.png";
import logoImg from "../../Assets/images/logos/bc-game.png";


const NavBarMiniTable = (props: IProps) => {
    const summaryData = props.summaryData;
    return (
        <React.Fragment>
            <div className="flex flex-row justify-between border border-gray-300 p-3 bg-white shadow-xl hover:bg-gray-200 cursor-pointer">
                <div className="w-full flex flex-row justify-start gap-x-4" >
                    <div className="flex w-16 items-center justify-center">
                        <img className=" rounded-full" src={summaryData.logo} alt="MainPageImg" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-0.5 w-full">
                        <span className="text-base font-bold">{summaryData.name}</span>
                        <div className='flex'>
                            {summaryData.bonus &&
                                <Button
                                    className="w-20 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                                    endIcon={<KeyboardArrowRight className="text-black text-xs rounded-full bg-orange-400" />}
                                >
                                    <img className="h-3" src={giftImg} alt="MainPageImg" />
                                    <span className="text-[10px] text-black">{summaryData.bonus}</span>
                                </Button>
                            }
                        </div>

                    </div>
                </div>

                <div className="w-48 flex items-center justify-end">
                    <div className='block'>
                        <Button
                            className="text-white text-[10px] h-8"
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

export default NavBarMiniTable