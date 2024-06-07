import React, { useState } from "react";
import NavBar from "../../components/lendingpage/NavBar";
import heroImg from "../../assets/images/webp/heroPhoneimg.webp";
import {
  HeroLocation,
  India,
  Locate,
  France,
  SouthKorea,
  Uk,
} from "../common/Icon";
import vectorImg1 from "../../assets/images/webp/verctorImg1.webp";

const Hero = () => {
  const [value, setValue] = useState("");
  const handleKeyPress = (event) => {
    // Allow only digits
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="bg-heroBg max-xs:bg-headersmbg max-lg:min-h-screen lg:h-[810px] lg:bg-bgsize bg-cover bg-no-repeat relative">
      <NavBar />
      <div
        id="home"
        className="container custom_container mx-auto sm:px-3 px-6 mt-[56px] pb-[30px] lg:mt-[83px]"
      >
        <div className="flex flex-row flex-wrap items-center justify-center lg:justify-between relative">
          <div className="lg:block hidden">
            <img
              width={612}
              height={599}
              src={heroImg}
              alt="heroImg"
              className="w-full absolute right-0 xl:right-[-3%] top-0 xl:max-w-[612px] max-w-[470px]"
            />
          </div>
          <div
            className="bg-blueLight rounded-[12px] w-full max-w-[164px] md:max-w-[220px] lg:max-w-[247px] p-[16px_16px_16px_14px] shadow-[0px_0px_24.6px_0px_#00000059] absolute right-0 lg:bottom-[-80px] xl:bottom-[-48%] sm:bottom-[16%] lg:block hidden"
            data-aos="fade-left"
          >
            <div className="relative">
              <img
                width={106}
                height={113}
                src={vectorImg1}
                alt="vector-img"
                className="absolute left-[-15px] bottom-[-7px] max-w-[39px]"
              />
              <div className="flex justify-between sm:pb-0 pb-[5px]">
                <HeroLocation />
                <p className="text-blue font-normal text-xl !leading-md">
                  Geolocation found!
                </p>
              </div>
              <p className="text-blue text-2xl font-semibold leading-md">
                +44 633 427 390
              </p>
              <p className="text-black font-normal text-sm md:text-base leading-normal md:leading-normal mb-3 md:mb-[14px] max-w-[216px]">
                3 Succession Walk, Fish Island, London E3 2RX, United Kingdom
              </p>
              <p className="font-light text-sm text-black flex justify-end mb-[1.6px]">
                June 02,2024 17:34
              </p>
            </div>
          </div>
          <div className="lg:w-[49%] w-full lg:mt-[56px]" data-aos="fade-right">
            <h1 className="text-white text-xxs sm:text-6xl xl:text-md leading-xxs sm:!leading-xs font-light xl:max-w-[553px] sm:mb-2 mb-3 lg:text-start text-center">
              <span className="font-extrabold">Locate any phone, </span>
              anywhere, anytime
            </h1>
            <p className="font-normal text-white text-sm sm:text-base leading-normal lg:max-w-[553px] mb-[32px] lg:mb-[24px] lg:text-start text-center md:px-14 lg:px-0">
              Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat
              nunc cursus. Lacus ornare aliquet condimentum elementum elementum
              nisl nibh sed. Egestas aliquam id quam nunc.
            </p>
            <div className="flex lg:justify-start justify-center">
              <div className="sm:max-w-[448px] max-w-[327px] w-full bg-white rounded-[4px] pl-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[7px] pr-[7px]">
                  <span className="cursor-pointer pr-1.5">
                    {selectedOption === "" && <India />}
                    {selectedOption === "UK" && <Uk />}
                    {selectedOption === "southkorea" && <SouthKorea />}
                    {selectedOption === "france" && <France />}
                  </span>
                  <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                    className="outline-none cursor-pointer bg-white"
                  >
                    <option
                      value=""
                      className="leading-6 text-sm sm:text-base sm:leading-[100%] text-black hover:bg-!blue"
                    >
                      +91
                    </option>
                    <option
                      value="UK"
                      className="leading-6 text-sm sm:text-base sm:leading-[100%] text-black hover:bg-!blue"
                    >
                      +44
                    </option>
                    <option
                      value="southkorea"
                      className="leading-6 text-sm sm:text-base sm:leading-[100%] text-black hover:!bg-blue"
                    >
                      +82
                    </option>
                    <option
                      value="france"
                      className="leading-6 text-sm sm:text-base sm:leading-[100%] text-black hover:!bg-blue"
                    >
                      +33
                    </option>
                  </select>
                </div>
                <div className="flex items-center gap-[7px] w-full">
                  <label className="hidden"></label>
                  <input
                    className="w-full pr-[5px] text-black outline-none"
                    type="tel"
                    inputMode="numeric"
                    pattern="\d{10}"
                    placeholder=""
                    maxLength="10"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <div>
                  <button
                    aria-label="locate btn"
                    className="relative flex items-center gap-1 bg-blue text-white text-sm sm:text-base font-semibold rounded-[4px] py-[15.5px] px-[24px] transition-transform ease-linear duration-300 hover:scale-95"
                  >
                    <div className="flex items-center gap-1">
                      <Locate /> Locate
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:w-[49%] md:w-[65%] sm:w-[70%] max-sm:max-w-[318px] w-full mt-[68px] lg:mt-0 relative"
            data-aos="fade-left"
          >
            <div className="bg-blueLight rounded-[12px] w-full max-w-[205px] md:max-w-[220px] lg:max-w-[247px] p-[8px] md:p-[16px_16px_16px_14px] shadow-[0px_0px_24.6px_0px_#00000059] absolute right-[-4%] md:right-[-1%] sm:bottom-[16%] md:bottom-[1%] bottom-[-8%] lg:hidden block">
              <div className="relative">
                <img
                  src={vectorImg1}
                  alt="vector-img"
                  className="absolute left-[-8px] md:left-[-15px] bottom-0 md:bottom-[-7px] max-w-[22px] md:max-w-[39px]"
                />
                <div className="flex justify-between sm:pb-0 pb-[5px]">
                  <HeroLocation />
                  <p className="text-blue font-normal text-lg md:text-xl !leading-md">
                    Geolocation found!
                  </p>
                </div>
                <p className="text-blue text-2xl font-semibold leading-md">
                  +44 633 427 390
                </p>
                <p className="text-black font-normal text-sm md:text-base leading-normal md:leading-normal mb-3 md:mb-[12px] max-w-[216px]">
                  3 Succession Walk, Fish Island, London E3 2RX, United Kingdom
                </p>
                <p className="font-light text-sm text-black flex justify-end">
                  June 02,2024 17:34
                </p>
              </div>
            </div>
            <div className="lg:hidden block">
              <img src={heroImg} alt="heroImg" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
