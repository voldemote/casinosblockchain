import { NavigateBefore, NavigateNext } from "@mui/icons-material"
import { Fab } from "@mui/material"
import { Navigation } from "swiper"

import { IReadMoreDataObj } from "../../../Interfaces"
import ReadMoreCard from "./ReadMoreCard"

import { ReadMoreData } from "./ReadMoreData"

import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ReadMoreCards = () => {
    return (
        <div className="w-full flex justify-center ">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    prevEl: '.Swiper-prev',
                    nextEl: '.Swiper-next'
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
            >
                {
                    ReadMoreData.map(((item: IReadMoreDataObj, index: number) => (
                        <SwiperSlide key={index}>
                            <ReadMoreCard item={item} index={index} />
                        </SwiperSlide>
                    )))
                }
                <div className="Swiper-prev">
                    <Fab className="bg-[#272822] text-white" aria-label="prev" color="default" size="small">
                        <NavigateBefore />
                    </Fab>
                </div>
                <div className="Swiper-next">
                    <Fab className="bg-[#272822] text-white" aria-label="next" color="default" size="small">
                        <NavigateNext />
                    </Fab>
                </div>
            </Swiper>
        </div >
    )
}

export default ReadMoreCards