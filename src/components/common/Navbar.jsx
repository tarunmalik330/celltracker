// import React, { useEffect, useState } from "react";
// import { Navlogo, Quick, Navlogo2 } from "./Icon";
// import CommonBtn from "./CommonBtn";

// export default function Navbar() {
//     const [nav, setNav] = useState(true);
//     function showNav() {
//         setNav(!nav);
//     }

//     useEffect(() => {
//         if (nav === false) {
//             document.body.classList.add("max-lg:overflow-hidden");
//         } else {
//             document.body.classList.remove("max-lg:overflow-hidden");
//         }
//     }, [nav]);
//     return (
//         <div>
//             <div className="container mx-auto xl:max-w-[1162px] px-3">
//                 <div className="flex justify-between items-center pt-[32px] pb-[10px] lg:py-[22px]">
//                     <a href="/" className="relative z-[50]" aria-label="logo">
//                         {nav ? <Navlogo /> : <Navlogo2 />}
//                     </a>

//                     <ul
//                         className={`${nav ? "left-[-100%]" : "left-0 z-[50]"} flex items-center gap-[24px] max-lg:bg-white lg:flex-row max-lg:justify-center max-lg:flex-col top-0 max-lg:min-h-screen max-lg:w-full max-lg:fixed z-[4] lg:pl-[60px] xl:pl-[100px] transition-all duration-300 ease-linear`}
//                     >
//                         <li className="flex items-center gap-[6px]">
//                             <Quick nav={nav} />
//                             <a
//                                 onClick={() => setNav(!nav)}
//                                 href='#home'
//                                 className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[-0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-white" : "text-black"}`}
//                             >
//                                 Quick Help
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 onClick={() => setNav(!nav)}
//                                 href='#home'
//                                 className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-white" : "text-black"}`}
//                             >
//                                 Log in
//                             </a>
//                         </li>
//                         <li className='lg:block hidden'>
//                             <CommonBtn
//                                 btnName="Create your Account"
//                                 className="capitalize bg-white text-blue"
//                             />
//                         </li>
//                         <li className='lg:hidden block mt-[115px]'>
//                             <a href="#" className='font-semibold text-base py-[14px] text-white px-[104px] bg-blue rounded-[4px]'>
//                                 Create an Account
//                             </a>
//                         </li>
//                     </ul>
//                     <div className="flex items-center lg:hidden cursor-pointer">
//                         <div
//                             onClick={() => setNav(!nav)}
//                             className="lg:hidden flex w-[30px] h-[21px] sm:w-[40px] sm:h-[26px] justify-between items-start flex-col z-[50] relative"
//                         >
//                             <span
//                                 className={`${!nav && "rotate-[50deg] translate-y-[18px] sm:translate-y-[21px] !bg-black rounded-none h-[2.5px] w-[30px] sm:w-[40px]"} bg-white h-[3px] sm:h-[4px] w-[20px] rounded-[10px] flex transition-all ease-linear duration-300`}
//                             ></span>
//                             <span
//                                 className={`${!nav && "hidden"} bg-white sm:h-[4px] h-[3px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
//                             ></span>
//                             <span
//                                 className={`${!nav && "rotate-[-50deg] translate-y-[12%] !bg-black rounded-none h-[2.5px] w-[30px] sm:w-[40px]"} bg-white h-[3px] sm:h-[4px] w-[20px] transition-all duration-300 ease-linear rounded-[10px] self-end`}
//                             ></span>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div >
//     );
// }


import React, { useState } from "react";
import { Navlogo, Navlogo2, Quick } from "../common/Icon";

const Navbar = () => {
    const [navBar, setnavBar] = useState(false);
    function showNav() {
        setnavBar(!navBar);
    }
    if (navBar) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <nav>
            <div className="container xl:max-w-[1164px] px-6 sm:px-3 mx-auto pt-[21.5px]">
                <div className="flex justify-between items-center">
                    <a href="" className="relative z-[4]" aria-label="Navlogo">
                        {navBar ? <Navlogo2 /> : <Navlogo />}
                    </a>
                    <ul
                        className={`flex items-center gap-[24px] duration-300 max-lg:fixed max-lg:w-full max-lg:h-full max-lg:justify-start max-lg:pt-[120px] max-lg:flex-col max-lg:z-[3] max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:bg-white ${navBar && "!left-0"
                            }`}
                    >
                        <li className="flex items-center gap-[6px]">
                            <Quick navBar={navBar} />
                            <a
                                onClick={() => setnavBar(!navBar)}
                                href='#home'
                                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[-0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${navBar ? "text-black" : "text-white"}`}
                            >
                                Quick Help
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setnavBar(!navBar)}
                                href='#home'
                                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${navBar ? "text-black" : "text-white"}`}
                            >
                                Log in
                            </a>
                        </li>

                        <button className="lg:hidden bg-blue text-base leading-[26.59px] font-semibold text-white py-4 px-7 rounded-[4px] mt-[115px] max-w-[314px] w-full">
                            Create an Account
                        </button>
                        <button className="lg:block hidden bg-white text-base leading-[26.59px] font-semibold text-blue py-[16.3px] px-[28.3px] rounded-[4px]">
                            Create an Account
                        </button>
                    </ul>
                    <button onClick={showNav} className="lg:hidden relative z-[4]">
                        {navBar ? (
                            <div className="flex lg:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                                <span className="bg-black w-[11px] h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                                <span className="bg-black w-[11px] h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
                            </div>
                        ) : (
                            <div className="flex lg:hidden flex-col z-50 justify-between w-[24px] h-[24px] cursor-pointer relative">
                                <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                                <span className="bg-white rounded-md w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                                <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;