import React from "react";
import logo from "../../assets/images/svg/footer-logo.svg";
import vectorImg2 from "../../assets/images/webp/vector2.webp";
import { footerSocialLink } from "./Helper";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="lg:pt-[102px] sm:pt-[70px] pt-[58px] relative">
      <img
        width={106}
        height={113}
        src={vectorImg2}
        alt="vectorimg"
        className="right-0 bottom-[19%] lg:bottom-[13%] max-w-[41px] md:max-w-[65px] lg:max-w-[106px] w-full absolute pointer-events-none"
      />
      <div className="container sm:px-3 px-6 custom_container mx-auto">
        <div className="flex items-center md:justify-between md:flex-row flex-col md:pb-12 pb-[58px]">
          <Link rel="noreferrer" aria-label="logo" href="/">
            <img
              width={259}
              height={36}
              src={logo}
              alt="logo"
              className="lg:max-w-[259px] lg:h-[36px] sm:max-w-[196px] max-w-[211px] sm:h-[29px] w-full mb-[38px] md:mb-0"
            />
          </Link>
          <ul className="flex gap-6 mb-8 md:mb-0">
            {props.mapdata.map((obj, id) => {
              return (
                <li key={id}>
                  <Link
                    rel="noreferrer"
                    onClick={() => window.location.replace(obj.path)}
                    aria-label="links"
                    className="leading-normal font-normal text-black opacity-70 hover:opacity-100 transition-all ease-linear duration-300 text-sm sm:text-base capitalize"
                    href={obj.path}
                  >
                    {obj.link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-[18px]">
            {footerSocialLink.map((obj, id) => {
              return (
                <div key={id}>
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    aria-label={obj.arialable}
                    to={obj.link}
                  >
                    {obj.socialicon}
                  </Link>
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
  );
};

export default Footer;
