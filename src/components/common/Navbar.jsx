import React, { useEffect, useState } from "react";
import { Navlogo, Quick, Navlogo2 } from "./Icon";

export default function Navbar() {
    const [nav, setNav] = useState(true);

    useEffect(() => {
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:overflow-hidden");
        }
    }, [nav]);
    return (
        <div>
            <div className="container mx-auto xl:max-w-[1162px] px-3">
                <div className="flex justify-between items-center py-[22px]">
                    <a href="#">
                        <Navlogo />
                    </a>
                    {/* <a href="#">
                        <Navlogo2 />
                    </a> */}
                    <ul
                        className={`${nav ? "left-[-100%]" : "left-0 z-[50]"} flex items-center gap-[24px] max-lg:bg-white lg:flex-row max-lg:justify-center max-lg:flex-col top-0 max-lg:min-h-screen max-lg:w-full max-lg:fixed z-[4] lg:pl-[60px] xl:pl-[100px] transition-all duration-300 ease-linear`}
                    >
                        <li className="flex items-center gap-[6px]">
                            <Quick nav={nav} />
                            <a
                                onClick={() => setNav(!nav)}
                                href='#home'
                                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[-0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-white" : "text-black"}`}
                            >
                                Quick Help
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setNav(!nav)}
                                href='#home'
                                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-white" : "text-black"}`}
                            >
                                Log in
                            </a>
                        </li>
                        <li className='lg:block hidden'>
                            <a href="#" className={`font-semibold text-base py-[15px] px-[27px] border border-solid border-transparent hover:border-white hover:text-white hover:bg-transparent transition-all duration-300 ease-linear bg-white rounded-[4px] ${nav ? "text-blue" : "text-black"}`}>
                                Create an Account
                            </a>
                        </li>
                        <li className='lg:hidden block mt-[115px]'>
                            <a href="#" className='font-semibold text-base py-[14px] text-white px-[104px] bg-blue rounded-[4px]'>
                                Create an Account
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center lg:hidden cursor-pointer">
                        <div
                            onClick={() => setNav(!nav)}
                            className="lg:hidden flex w-[40px] h-[26px] justify-between items-start flex-col z-[50] relative"
                        >
                            <span
                                className={`${!nav && "rotate-[50deg] translate-y-[20px] bg-black rounded-none h-[2.5px] w-[30px]"} bg-white h-[4px] w-[20px] rounded-[10px] flex transition-all ease-linear duration-300`}
                            ></span>
                            <span
                                className={`${!nav && "hidden"} bg-white h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
                            ></span>
                            <span
                                className={`${!nav && "rotate-[-50deg] translate-y-[12%] bg-black rounded-none h-[2.5px] w-[30px]"} bg-white h-[4px] w-[20px] transition-all duration-300 ease-linear rounded-[10px] self-end`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}