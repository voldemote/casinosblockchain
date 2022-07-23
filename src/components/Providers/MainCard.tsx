import { Link } from "react-router-dom";
import { RightArrowIcon } from "../Icons";


const MainCard = (props: any) => {
    const { item } = props;
    return (
        <div className="w-[340px] h-[150px] md:w-[375px] md:h-[250px] rounded-md flex items-center justify-center flex-row-reverse md:flex-col gap-5" style={{ background: "linear-gradient(180deg, rgb(82, 82, 91) 0%, rgb(82, 82, 91) 100%)" }} >
            <div className="flex flex-row-reverse md:flex-col gap-3">
                <div className="flex justify-between md:justify-center items-end flex-col md:flex-row">
                    <div className="max-w-[90px] md:max-w-[145px] mt-3" >
                        <img src={item.logo} className="w-full" alt="logo" />
                    </div>
                    <div className="w-5 h-10 flex md:hidden md:h-16 bg-no-repeat ml-3 text-black  items-center cursor-pointer">
                        <RightArrowIcon />
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="text-xl md:text-2xl font-bold text-black flex justify-center">
                        {item.title}
                    </div>
                    <div className="text-sm md:text-base font-bold text-black mt-5 flex justify-center">
                        {item.miniTitle}
                    </div>
                    <div className="flex mt-3 justify-between">
                        <div className="w-full flex">
                            {
                                item.gameLogos.map((logo: any, index: number) => (
                                    <Link to={logo.link} key={index} className="z-[5] hover:z-10">
                                        <div className="w-10 h-10 md:w-14 md:h-14 cursor-pointer  ml-[-8px]" >
                                            <img src={logo.logo} className="w-full rounded-full hover:outline hover:outline-white outline-1" alt="MainCard" />
                                        </div>
                                    </Link>
                                ))
                            }
                            {item.count &&
                                <div className="w-10 h-10 md:w-14 md:h-14 cursor-pointer z-[1]  hover:z-10 ml-[-8px] ">
                                    <div className="w-full h-full flex items-center justify-center rounded-full hover:outline bg-white hover:outline-white outline-1 text-[#91A9C9]"  >
                                        +{item.count}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="w-5 h-10 md:h-16 hidden md:flex bg-no-repeat ml-3 text-black  items-center cursor-pointer">
                            <RightArrowIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard;