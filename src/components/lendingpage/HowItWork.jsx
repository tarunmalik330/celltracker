import React from "react";
import {
  RoadmapLine,
  ReceiveLocation,
  Message,
  PhoneNumber,
} from "../common/Icon";
import vectorImg1 from "../../assets/images/webp/verctorImg1.webp";

const HowItWork = () => {
  return (
    <div className="pb-[45px] sm:mt-[98px] mt-[85px] sm:mb-0 xl:mb-[45px] relative ">
      <img
        src={vectorImg1}
        alt="vectorimg"
        className="left-0 bottom-[-6%] md:bottom-[-5%] lg:bottom-[-30%] xl:bottom-[-14%] max-w-[41px] sm:max-w-[55px] md:max-w-[65px] lg:max-w-[106px] w-full absolute"
      />
      <div
        id="works"
        className="container custom_container mx-auto px-6 sm:px-3"
      >
        <div className="md:mt-[98px] mt-[61px]">
          <h2
            className="text-blue sm:text-5xl text-2lg font-light leading-xs text-center"
            data-aos="fade-up"
          >
            How it
            <span className="font-extrabold"> works</span>
          </h2>
          <p
            className="max-w-[472px] max-sm:max-w-[277px] mx-auto font-normal text-sm md:text-base leading-normal text-center text-black opacity-70 mt-2"
            data-aos="fade-up"
          >
            Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
            sit elit rhoncus vestibulum fames libero id.
          </p>
        </div>
        <div className="flex flex-wrap mt-[46px] md:mt-[56px] relative z-[1] justify-center  px-9 xl:px-0">
          <div
            className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center lg:justify-start"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-7 px-2 items-center pb-8">
              <span>
                <PhoneNumber className="w-[61px] h-[57px] sm:w-[75px] sm:h-[71px]" />
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
            <span className="md:absolute rotate-[90deg] md:rotate-0 sm:m-20 mt-16 mb-12 sm:mt-16 md:mt-0 top-[10%] sm:top-[15%]">
              <RoadmapLine className="sm:w-[152px] sm:h-[19px] w-[111px] h-[14px]" />
            </span>
          </div>
          <div
            className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[28px] items-center pb-8">
              <span>
                <Message className="sm:w-[75px] w-[61px] h-[57px] sm:h-[70px]" />
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
            <span className="md:absolute rotate-[90deg] md:rotate-0 sm:m-20 mt-16 mb-12 sm:mt-16 md:mt-0 top-[10%] sm:top-[15%]">
              <RoadmapLine className="sm:w-[152px] sm:h-[19px] w-[111px] h-[14px]" />
            </span>
          </div>
          <div
            className="w-full md:w-[40%] lg:w-[28%] xl:w-[20%] flex justify-center lg:justify-end"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[28px] items-center pb-8">
              <span>
                <ReceiveLocation className="sm:w-[75px] sm:h-[71px] w-[61px] h-[57px]" />
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
    </div>
  );
};
export default HowItWork;
