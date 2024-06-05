import React, { useState } from "react";
import Navbar from "./common/Navbar";
import heroImg from '../assets/images/webp/heroImage.webp';
import { Arrow, India, Locate, Needhelp } from "./common/Icon";
import CommonBtn from "./common/CommonBtn";

const Header = () => {
  const [value, setValue] = useState('');

  const handleKeyPress = (event) => {
    // Allow only digits
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="bg-heroBg bg-bgsize min-h-screen bg-no-repeat ">
        <Navbar />
        <div className="container xl:max-w-[1162px] mx-auto px-3 mt-[56px] pb-[30px] lg:mt-[63.86px]">
          <div className="flex flex-row flex-wrap items-center justify-between">
            <div className="lg:w-[46%] w-full lg:mb-[70px] xl:mb-[140px]">
              <h1 className="text-white text-xxs sm:text-6xl xl:text-md !leading-xs font-light xl:max-w-[520px] mb-2 lg:text-start text-center"><span className="font-extrabold">Find the location</span> of any phone by its number</h1>
              <p className="font-normal text-white text-base leading-normal lg:max-w-[506px] mb-[32px] lg:mb-[24px] lg:text-start text-center md:px-14 lg:px-0">Add phones to your account & track them when neededAdd phones to your account & track them when needed</p>
              <div className="flex lg:justify-start justify-center">
                <div className='sm:max-w-[448px] max-w-[327px] w-full bg-white rounded-[4px] pl-[10px] flex items-center justify-between'>
                  <div className='flex items-center gap-[7px] pr-[7px]'>
                    <India />
                    <p className="text-black text-base font-normal flex items-center gap-1">+91 <Arrow /></p>
                  </div>
                  <div className="flex items-center gap-[7px] w-full">
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
                    <button className="flex items-center gap-1 bg-blue text-white text-sm sm:text-base font-semibold rounded-[4px] py-[14px] px-[24px] !leading-normal sm:!leading-lg"><Locate /> Locate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[49%] md:w-[65%] sm:w-[70%] max-sm:max-w-[420px] w-full mx-auto mt-[40px] lg:mt-0 relative">
              <div className="bg-white rounded-tl-[12px] w-full rounded-br-[12px] max-w-[164px] md:max-w-[220px] lg:max-w-[280px] p-[8px] sm:p-[12px] lg:p-[18px] shadow-[0px_0px_24.6px_0px_#00000059] absolute right-0 md:right-[-5%] lg:right-0 lg:bottom-[22%] sm:bottom-[16%] md:bottom-[19%] bottom-[5%] ">
                <div className='flex justify-between'>
                  <p className='text-sky font-bold text-xl md:text-2xl !leading-md'>Need help?</p>
                  <Needhelp />
                </div>
                <p className='text-blue font-normal text-sm md:text-base leading-normal md:leading-normal mb-[8px] md:mb-[12px] max-w-[198px]'>Get help with technical, account and billing enquiries.</p>
                <div className="w-full">
                  <CommonBtn
                    btnName="Customer Support"
                    className="capitalize bg-blue text-white py-[16.5px] px-[28px] w-full"
                  />
                </div>
              </div>
              <img src={heroImg} alt="heroImg" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;