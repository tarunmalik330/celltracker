import React, { useState } from "react";
import { navData } from "../common/Helper";
import { Navlogo, Navlogo2 } from "../common/Icon";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setnav] = useState(false);
  function opennav() {
    setnav(!nav);
  }
  if (nav) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <nav>
      <div className="container custom_container px-6 sm:px-3 mx-auto py-[20.72px] max-sm:pt-8 max-sm:pb-[10px]">
        <div className="flex justify-between items-center">
          <a href="/" className="relative z-[4]" aria-label="navlogo">
            {nav ? <Navlogo2 /> : <Navlogo />}
          </a>
          <ul
            className={`flex items-center gap-[35px] duration-300 max-lg:fixed max-lg:w-full max-lg:h-full max-lg:justify-start max-lg:pt-[121px] max-lg:flex-col max-lg:z-[3] max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:bg-white lg:pe-[40px]  xl:pe-[80px] ${
              nav && "!left-0"
            }`}
          >
            {navData.map((data, index) => (
              <li key={index}>
                <Link
                  to="/"
                  onClick={() => setnav(false)}
                  href={data.path}
                  className="text-black lg:text-white text-base font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-[-2px] after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  {data.link}
                </Link>
              </li>
            ))}
            <button aria-label="login" className=" lg:hidden bg-blue text-base leading-[26.59px] font-semibold text-white py-4 px-7 rounded-[4px] hover:text-blue hover:bg-white hover:border-blue border-transparent border-2 w-full max-w-[314px] transition-all ease-linear duration-300">
              Log In
            </button>
          </ul>
          <button aria-label="login" className="text-blue lg:block hidden text-base leading-[26.59px] font-semibold bg-white py-[14px] md:py-[15.22px] px-[27.07px] rounded-[4px] border-solid border-transparent border hover:border-white hover:bg-blue hover:text-white transition-all ease-linear duration-300">
            Log In
          </button>
          <button onClick={opennav} className="lg:hidden relative z-[4]">
            {nav ? (
              <div className="flex lg:hidden flex-col relative z-[40px] justify-between w-[18px] h-[17px] cursor-pointer">
                <span className="bg-black w-[11px] h-[2px] sm:w-[25px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                <span className="bg-black w-[11px] sm:w-[25px] h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
              </div>
            ) : (
              <div className="flex lg:hidden flex-col z-[40px] justify-between w-[24px] h-[24px] cursor-pointer relative">
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

export default NavBar;
