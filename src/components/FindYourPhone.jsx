import React from "react";
import findphone from "../assets/images/png/find-phone-img.png";
import CommonBtn from "./common/CommonBtn";

const FindYourPhone = () => {
  return (
    <>
      <div className="sm:pt-[248px] pt-[210px]">
        <div className="container px-3 custom_container mx-auto">
          <div className="rounded-xl">
            <div className="flex rounded-xl bg-full xl:bg-cover bg-center bg-no-repeat bg-find-phone-bg flex-row  flex-wrap items-center lg:pb-0 md:pb-20 sm:pb-16 pb-[46px]">
              <div className="lg:w-[53%] w-full flex justify-center">
                <img
                  src={findphone}
                  alt="findphone"
                  className="lg:max-w-[609px] sm:max-w-[445px] min-[370px]:max-w-[380px] lg:h-[689px] sm:h-[507px] min-[370px]:h-[420px] h-[380px] w-full -translate-y-[24%] lg:-mb-[281px] sm:-mb-[110px] -mb-[110px]"
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
                  className="bg-white !leading-md max-sm:w-[266px]"
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
