import React from "react";
import logo from "../../assets/images/svg/footer-logo.svg";
import { footerLink2, footerSocialLink } from "../common/Helper";

const LendingFooter = () => {
  return (
    <>
      <div className="lg:pt-[102px] sm:pt-[70px] pt-[58px] relative">
        <div className="container sm:px-3 px-6 custom_container mx-auto">
          <div className="flex items-center md:justify-between md:flex-row max-md:gap-6 max-sm:gap-0 flex-col md:pb-12 pb-[58px]">
            <a aria-label="logo" href="/">
              <img
                width={259}
                height={36}
                src={logo}
                alt="logo"
                className="lg:max-w-[259px] lg:h-[36px] sm:max-w-[196px] max-w-[211px] sm:h-[29px] w-full mb-[38px] md:mb-0"
              />
            </a>
            <ul className="flex gap-6 mb-8 md:mb-0">
              {footerLink2.map((obj, id) => {
                return (
                  <li key={id}>
                    <a
                      aria-label="links"
                      className="leading-normal font-normal text-black opacity-70 hover:opacity-100 transition-all ease-linear duration-300 text-base capitalize"
                      href={obj.path}
                    >
                      {obj.link}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-[18px]">
              {footerSocialLink.map((obj, id) => {
                return (
                  <div key={id}>
                    <a
                      target="_blank"
                      aria-label={obj.arialable}
                      href={obj.link}
                    >
                      {obj.socialicon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t-[0.5px] border-solid border-blue"></div>
          <p className="leading-normal text-center text-sm font-normal text-black opacity-70 pt-[18px] sm:pb-[17px] pb-5">
            © {new Date().getFullYear()} Cell Tracker. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default LendingFooter;
