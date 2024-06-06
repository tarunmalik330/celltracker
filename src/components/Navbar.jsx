import React, { useState } from "react";
import { Navlogo, Navlogo2, Quick } from "./common/Icon";
import CommonBtn from "./common/CommonBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  function showNav() {
    setnav(!nav);
  }
  if (nav) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <nav>
      <div className="container custom_container px-6 sm:px-3 mx-auto sm:pt-[21px] pt-8">
        <div className="flex justify-between items-center">
          <a href="" className="relative z-[4]" aria-label="Navlogo">
            {nav ? <Navlogo2 /> : <Navlogo />}
          </a>
          <ul
            className={`flex items-center gap-[24px] duration-300 max-lg:fixed max-lg:w-full max-lg:h-full max-lg:justify-start max-lg:pt-[120px] max-lg:flex-col max-lg:z-[3] max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:bg-white ${nav && "!left-0"
              }`}
          >
            <li className="flex items-center gap-[6px]">
              <Quick nav={nav} />
              <Link
                to="/landingpage"
                href="#"
                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[-0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-black" : "text-white"
                  }`}
              >
                Quick Help
              </Link>
            </li>
            <li>
              <a
                onClick={() => setnav(false)}
                href="#Login"
                className={`leading-normal text-base font-normal hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[1px] relative after:left-0 after:bottom-[0px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 ${nav ? "text-black" : "text-white"
                  }`}
              >
                Log in
              </a>
            </li>
            <li className="lg:block hidden">
              <CommonBtn
                btnName="Create your Account"
                className="capitalize bg-white hover:!bg-blue hover:!text-white hover:border-white text-blue py-[16.5px] px-[19.7px]"
              />
            </li>
            <li className="lg:hidden block w-full max-w-[314px]">
              <CommonBtn
                btnName="Create your Account"
                className="capitalize bg-blue text-white py-[16.5px] px-[28px] mt-[115px] w-full"
              />
            </li>
          </ul>
          <button onClick={showNav} className="lg:hidden relative z-[5]">
            {nav ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                <span className="bg-black w-[11px] h-[2px] sm:w-[25px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                <span className="bg-black w-[11px] h-[2px] sm:w-[25px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
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
