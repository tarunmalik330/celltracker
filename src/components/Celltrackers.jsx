import React from "react";
import { cellTrackerData } from "./common/Helper";
import heroLayer from "../assets/images/webp/heroWhite-layer.webp";
import vectorImg1 from "../assets/images/webp/verctorImg1.webp";
import vectorImg2 from "../assets/images/webp/vectorImg2.webp";
import CommonBtn from "./common/CommonBtn";

const Celltrackers = () => {
  return (
    <div className="relative">
      <img
        src={heroLayer}
        alt="heroLayer"
        className="right-0 left-0 top-[-3%] sm:top-[-10%] lg:top-[-22%] w-full absolute z-0"
      />
      <img
        src={vectorImg1}
        alt="vectorimg"
        className="left-0 lg:top-[15%] top-0 max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute "
      />
      <img
        src={vectorImg2}
        alt="vectorimg"
        className="right-0 bottom-0 max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute "
      />
      <div className="container custom_container mx-auto sm:px-3 px-6 relative z-1 sm:pt-[50px] pt-[110px]">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-light text-blue text-2lg sm:text-5xl sm:!leading-xs leading-xxs text-center mb-[12px] lg:mb-2" data-aos="fade-up">
            Advantages of{" "}
            <span className="font-extrabold leading-xs">Celltracker</span>
          </h2>
          <p className="text-grey text-base font-normal sm:!leading-normal leading-xl md:max-w-[472px] text-center" data-aos="fade-up">
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
            sit elit rhoncus vestibulum fames libero id.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between sm:mb-[50px] mb-[24px] sm:mt-[42px] mt-12">
          {cellTrackerData.map((data, index) => (
            <div
              key={index}
              className={`${
                index === 1 || index === 3 ? "lg:mt-[27px]" : ""
                } lg:w-[24%] sm:w-[48%] w-full mb-[18px] lg:mb-0`} data-aos="zoom-in"
            >
              <div className="lg:max-w-[271px] h-[184px] sm:h-[253px] bg-white p-[20px] shadow-[0px_16px_25.3px_0px_#00000014] border-[2px] border-solid border-lightSky rounded-[12px] hover:border-blue transition-all duration-300 ease-linear">
                <div>{data.svg}</div>
                <h3 className="font-normal text-xl md:text-2xl !leading-sm text-blue sm:max-w-[231px] mb-[6px] sm:mt-1 mt-4">
                  {data.heading}
                </h3>
                <p
                  className='sm:text-base text-sm font-normal sm:max-w-[231px] leading-normal text-lghtGrey'
                >
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <CommonBtn
            btnName="Create your Account"
            className="capitalize bg-blue text-white py-[16.5px] px-[27.2px] max-sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Celltrackers;
