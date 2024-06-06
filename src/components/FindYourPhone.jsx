import React from "react";
import findphone from "../assets/images/webp/find-phone-img.webp";
import vectorImg1 from "../assets/images/webp/verctorImg1.webp";
import CommonBtn from "./common/CommonBtn";

const FindYourPhone = () => {
  return (
    <>
      <div className="sm:pt-[248px] pt-[270px] relative">
        <img
          src={vectorImg1}
          alt="vectorimg"
          className="left-0 top-[5%] lg:top-[56%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute sm:block hidden"
        />
        <div className="container sm:px-3 px-6 custom_container mx-auto">
          <div className="rounded-xl">
            <div className="flex rounded-xl xl:bg-cover bg-center bg-no-repeat bg-find-phone-bg flex-row  flex-wrap items-center lg:pb-0 md:pb-20 sm:pb-16 pb-[46px]">
              <div className="lg:w-[53%] w-full flex justify-center">
                <img
                  src={findphone}
                  alt="findphone"
                  className="lg:max-w-[609px] sm:max-w-[445px] min-[370px]:min-w-[380px] lg:h-[689px] sm:h-[507px] min-[370px]:h-[420px] h-[380px] w-full -translate-y-[24%] lg:-mb-[281px] sm:-mb-[110px] -mb-[110px] sm:mt-0 -mt-[50px]"
                />
              </div>
              <div className="lg:w-[36%] w-full flex flex-col items-center">
                <h2 className="text-white font-light sm:text-5xl text-2lg  leading-xs lg:mb-2 mb-3">
                  Find your <span className="font-extrabold">phone</span>
                </h2>
                <p className="text-white leading-normal text-base font-normal text-center lg:mb-8 mb-7 lg:px-0 px-2">
                  Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper
                  nisi sit elit rhoncus vestibulum fames libero id.
                </p>
                <CommonBtn
                  className="bg-white sm:py-[15.15px] !leading-md max-sm:w-[266px] hover:!bg-blue hover:border-white hover:text-white"
                  btnName="Start Now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourPhone;
