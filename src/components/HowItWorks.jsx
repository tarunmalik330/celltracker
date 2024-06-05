import React from "react";
import worksimg from "../assets/images/webp/howItWorks-img.webp";
import vectorImg1 from '../assets/images/png/verctorImg1.png';
import vectorImg2 from '../assets/images/png/vectorImg2.png';
import { worksData } from "./common/Helper";
import CommonBtn from "./common/CommonBtn";

const HowItWorks = () => {
  return (
    <div className='relative'>
      <img src={vectorImg1} alt="vectorimg" className='left-0 top-[9%] lg:top-[17%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute ' />
      <img src={vectorImg2} alt="vectorimg" className='right-0 bottom-0 lg:bottom-[-3%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute z-[2]' />
      <div className="container xl:max-w-[1162px] mx-auto px-3 mt-[104px] pb-[57px]">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-light text-blue text-2lg sm:text-xsm md:text-6xl !leading-xxs text-center mb-[12px] lg:mb-2">
            How it <span className="font-extrabold">works</span>
          </h2>
          <p className="text-grey text-base font-normal !leading-normal md:max-w-[472px] text-center">
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
            elit rhoncus vestibulum fames libero id.
          </p>
          <div className="flex flex-row flex-wrap justify-between items-center mt-[70px] lg:mt-[100px]">
            <div className="lg:w-[50%] w-full">
              <img
                src={worksimg}
                alt="worksimg"
                className="w-full max-w-[680px]"
              />
            </div>
            <div className="lg:w-[49%] w-full flex flex-col lg:items-end mt-[50px] lg:mt-0">
              {worksData.map((data, index) => (
                <div
                  key={index}
                  className="lg:max-w-[536px] min-h-[240px] lg:min-h-[273px] bg-white p-[20px] shadow-[0px_16px_25.3px_0px_#00000014] border-[1px] border-solid border-lightSky hover:border-blue transition-all duration-300 ease-linear rounded-[12px] mb-[18px]"
                >
                  <div>{data.svg}</div>
                  <h3
                    className={`${index === 1 ? "mt-[6.5px]" : ""
                      } font-normal text-xl md:text-2xl lg:max-w-[465px] !leading-sm text-blue mb-[6px]`}
                  >
                    {data.heading}
                  </h3>
                  <p className="text-base font-normal !leading-normal text-lghtGrey">
                    {data.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-[14px] sm:flex-row flex-col max-sm:w-full sm:pt-[67px] pt-[22px]">
            <CommonBtn
              btnName="Create your Account"
              className="capitalize bg-blue text-white py-[16.5px] px-[27.2px]"
            />
            <CommonBtn
              btnName="Got more Question?"
              className="border border-solid !border-blue py-[16.5px] px-[27.3px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
