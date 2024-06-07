import React from "react";
import worksimg from "../../assets/images/webp/howItWorks-img.webp";
import vectorImg1 from "../../assets/images/webp/verctorImg1.webp";
import vectorImg2 from "../../assets/images/webp/vectorImg2.webp";
import { worksData } from "../common/Helper";
import CommonBtn from "../common/CommonBtn";

const HowItWorks = () => {
  return (
    <div className="relative">
      <img
        width={106}
        height={113}
        src={vectorImg1}
        alt="vectorimg"
        className="left-0 top-[9%] lg:top-[13%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute pointer-events-none"
      />
      <img
        width={106}
        height={113}
        src={vectorImg2}
        alt="vectorimg"
        className="right-0 bottom-0 lg:bottom-[-3%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute z-[2] pointer-events-none"
      />
      <div className="container custom_container mx-auto sm:px-3 px-6 xl:mt-[104px] sm:mt-[90px] mt-[74px] xl:pb-[57px] sm:pb-8 pb-[90px]">
        <div className="flex justify-center items-center flex-col">
          <h2
            className="font-light text-blue text-2lg sm:text-5xl sm:leading-xs leading-xsm text-center mb-[12px] lg:mb-2"
            data-aos="fade-up"
          >
            How it <span className="font-extrabold">works</span>
          </h2>
          <p
            className="text-grey text-base font-normal sm:!leading-normal leading-xl md:max-w-[472px] text-center"
            data-aos="fade-up"
          >
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
            sit elit rhoncus vestibulum fames libero id.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center lg:justify-end relative items-center mt-[40px] sm:mt-[20px] lg:mt-[100px]">
          <img
            src={worksimg}
            alt="worksimg"
            className="w-full max-w-[510px] xl:max-w-[680px] absolute xl:left-[-7%] left-0 lg:block hidden"
          />
          <div className="lg:w-[50%] w-full lg:hidden flex justify-center">
            <img
              src={worksimg}
              alt="worksimg"
              className="w-full min-w-[390px] sm:max-w-[510px]"
            />
          </div>
          <div
            className="lg:w-[49%] w-full flex flex-col lg:items-end mt-[40px] lg:mt-0"
            data-aos="fade-up"
          >
            {worksData.map((data, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "sm:px-5 px-[18px]" : ""
                } lg:max-w-[536px] max-[576px]:h-[303px] min-h-[240px] lg:min-h-[273px] bg-white p-5 shadow-[0px_16px_25.3px_0px_#00000014] border-[1px] border-solid border-lightSky hover:border-blue transition-all duration-300 ease-linear rounded-[12px] mb-[18px]`}
              >
                <div className="max-sm:mb-4">{data.svg}</div>
                <h3
                  className={`${
                    index === 1 ? "mt-[6.5px]" : ""
                  } font-normal text-xl md:text-2xl lg:max-w-[465px] !leading-sm text-blue mb-[6px]`}
                >
                  {data.heading}
                </h3>
                <p
                  className={`${
                    index === 1 ? "max-sm:!max-w-[275px]" : ""
                  } sm:text-base text-sm font-normal !leading-normal text-lghtGrey`}
                >
                  {data.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-[14px] sm:flex-row flex-col max-sm:w-full sm:pt-[70px] pt-[22px]"
          data-aos="fade-up"
        >
          <CommonBtn
            btnName="Create your Account"
            className="capitalize bg-blue text-white py-[16.5px] px-[27.2px] max-sm:w-full"
          />
          <CommonBtn
            btnName="Got more Question?"
            className="border border-solid !border-blue py-[16.5px] px-[27.3px] max-sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
