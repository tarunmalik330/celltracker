import React from "react";
import CommonBtn from "./common/CommonBtn";
import { joinCompanies } from "./common/Helper";

const Joincompanies = () => {
  return (
    <div className="bg-join-companies-bg bg-cover bg-center bg-no-repeat">
      <div className="container px-3 custom_container mx-auto">
        <h2 className="text-white lg:text-5xl sm:text-4xl text-2lg text-center font-light sm:leading-xs leading-xxs lg:max-w-[664px] mx-auto lg:pb-[109px] sm:pb-[80px] pb-[65px] pt-[70px]">
          Join <span className="font-extrabold">70,000+ companies</span> doing
          time tracking the easy way
        </h2>
        <div className="flex lg:flex-row flex-col-reverse flex-wrap justify-center lg:items-end items-center max-lg:gap-[42px] pb-[80px]">
          {joinCompanies.map((obj, id) => {
            return (
              <div
                key={id}
                className={`pl-[34px] bg-white rounded-tl-xl rounded-tr-xl rounded-br-xl border-y border-s border-solid w-full h-full relative max-sm:px-6 shadow-[0px_16px_25.3px_0px_#00000014] ${
                  id === 1
                    ? "max-w-[527px] sm:pt-[63px] sm:pb-[34px] pt-[60px] pb-[30px] lg:-translate-x-3"
                    : "max-w-[467px] max-sm:py-[75.5px] py-[34px]"
                }`}
              >
                <h3 className="text-blue font-normal text-xxs leading-sm mb-[18px]">
                  Cell Tracker
                  {id === 1 && <span className="font-extrabold"> Pro</span>}
                </h3>
                <p className="font-normal text-base leading-normal text-black opacity-70 mb-3">
                  {obj.description}
                </p>
                <p className="font-normal text-base text-black opacity-70 leading-normal flex items-center gap-[6px] mb-[6px]">
                  {obj.rightclick}
                  {obj.seat}
                </p>
                <p className="font-normal text-base text-black opacity-70 leading-normal flex items-center gap-[6px] mb-[44px]">
                  {obj.rightclick}
                  {obj.projects}
                </p>
                <p className="text-xsm flex gap-2 items-baseline text-blue font-normal leading-normal mb-[27px]">
                  {obj.billperseat}
                  <span className="text-black opacity-70 text-base leading-normal text-sky">
                    {obj.billmonth}
                  </span>{" "}
                </p>
                <div className="flex sm:flex-row flex-col items-center gap-4 max-sm:w-full">
                  <CommonBtn
                    className="bg-blue text-white max-sm:w-full"
                    btnName="Start your free trial"
                  />
                  {id === 1 && (
                    <p className="font-normal text-base text-black opacity-70 leading-normal">
                      No credit card required.
                    </p>
                  )}
                </div>
                {id === 1 && (
                  <div className="absolute xl:right-[13%] md:right-[17%] right-1/2 translate-x-1/2 top-[-29px]">
                    <CommonBtn
                      className="md:!py-[15px] !font-normal text-2xl md:!px-[35px] py-3 px-4 capitalize !text-white !bg-blue"
                      btnName="Most Popular"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Joincompanies;
