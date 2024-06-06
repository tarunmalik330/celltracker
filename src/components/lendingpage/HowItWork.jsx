import React from "react";
import {
  RoadmapLine,
  ReceiveLocation,
  Message,
  PhoneNumber,
} from "../common/Icon";

const HowItWork = () => {
  return (
    <section className="pb-[45px]">
      <div className="container custom_container mx-auto px-6 sm:px-3">
        <div className="md:mt-[98px] mt-[61px]">
          <h2 className="text-blue sm:text-5xl text-2lg font-light leading-xs text-center">
            How it
            <span className="font-extrabold"> works</span>
          </h2>
          <p className="max-w-[472px] max-sm:max-w-[277px] mx-auto font-normal text-sm md:text-base leading-normal text-center text-black opacity-70 mt-2">
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
            sit elit rhoncus vestibulum fames libero id.
          </p>
        </div>
        <div className="flex flex-wrap mt-[46px] md:mt-[56px] relative z-[1] justify-center  px-9 xl:px-0">
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center lg:justify-start">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-7 px-2 items-center pb-8">
              <span>
                <PhoneNumber />
              </span>
              <h3 className="text-xl sm:text-2xl text-black font-normal leading-sm text-center mt-[14px]">
                Provide target phone number
              </h3>
              <p className="font-normal mt-[6px] text-center text-sm sm:text-base leading-normal text-black opacity-70">
                Enter the mobile number you want to locate in the provided
                field.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[20%] lg:w-[18%] flex justify-center relative">
            <span className="md:absolute rotate-[90deg] md:rotate-0 m-20 sm:mt-16 md:mt-0 top-[10%] sm:top-[15%]">
              <RoadmapLine />
            </span>
          </div>
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[28px] items-center pb-8">
              <span>
                <Message />
              </span>
              <h3 className="text-xl sm:text-2xl text-black font-normal leading-sm text-center mt-[14px]">
                Customize the message
              </h3>
              <p className="font-normal mt-[6px] text-center text-sm sm:text-base leading-normal text-black opacity-70 px-[13px]">
                Create a message that will make them approve access to their
                location. You can always choose the one by default. Specify
                sender name.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[8%] lg:w-[18%] flex md:absolute top-[40%] xl:rotate-0  xl:translate-x-0 xl:static xl:flex md:hidden justify-center relative">
            <span className="md:absolute rotate-[90deg] md:rotate-0 m-20 sm:mt-16 md:mt-0 top-[10%] sm:top-[15%]">
              <RoadmapLine />
            </span>
          </div>
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[20%] flex justify-center lg:justify-end">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[28px] items-center pb-8">
              <span>
                <ReceiveLocation />
              </span>
              <h3 className="text-xl sm:text-2xl text-black font-normal leading-sm text-center mt-[14px]">
                Receive their precise location
              </h3>
              <p className="font-normal mt-[6px] text-center text-sm sm:text-base leading-normal text-black opacity-70">
                Get notification as soon as GEOfinder locates the pesron on a
                map. View their accurate position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
