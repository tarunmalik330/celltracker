import React from "react";
import {
  LocationSvg,
  TrackPhoneSvg,
  MultipleWaysSvg,
  ProtectSvg,
  MoneyBack,
  PrivateSvg,
  CardTongelSvg,
  TracesIcon,
  EmailAddressIcon,
  ValidNumberIcon,
  CalenderIcon,
  SecurityCodeIcon,
} from "./common/Icon";
import visaimg from "../assets/images/svg/visaimg.svg";
import thememastercard from "../assets/images/svg/theme-mastercard.svg";
import CommonBtn from "./common/CommonBtn";
import layer from "../assets/images/png/create-acc-toplayer.png";
import vectorimg1 from "../assets/images/png/verctorImg1.png";
import vectorimg2 from "../assets/images/png/vectorImg2.png";

const CreateYourAccount = () => {
  return (
    <div className="lg:pt-[220px] sm:pt-[180px] pt-[100px] relative">
      <img
        src={vectorimg1}
        alt="vectorimg1"
        className="absolute w-full sm:max-w-[106px] max-w-[41px] left-0 sm:top-[25%] top-[4%]"
      />
      <img
        src={vectorimg2}
        alt="vectorimg2"
        className="absolute w-full sm:max-w-[106px] max-w-[41px] right-0 sm:bottom-[11%] bottom-[-6%]"
      />
      <img
        src={layer}
        alt="layer"
        className="absolute sm:top-[-67px] -top-[30px] max-sm:h-[65px] w-full z-10 h-[181px]"
      />
      <div className="container sm:px-3 px-6 mx-auto custom_container relative z-10">
        <h2 className="capitalize text-blue sm:text-5xl text-2lg sm:leading-xs leading-xxs font-light text-center mb-2">
          Create your <span className="font-extrabold"> account</span>
        </h2>
        <p className="leading-normal sm:text-base text-sm text-black opacity-70 font-normal text-center">
          Join now and protect your family's phones
        </p>
        <div className="flex flex-row items-center flex-wrap lg:pt-[72px] sm:pt-[50px] pt-[33.7px] gap-[37px] xl:gap-0">
          <div className="lg:w-5/12 w-full flex flex-col max-lg:justify-center max-lg:items-center">
            <p className="leading-sm text-blue sm:text-xxs text-2xl font-light mb-[26px]">
              Get a <span className="font-extrabold">24 hour</span> trial!
            </p>
            <div className="flex flex-col gap-[11px] pb-10">
              <p className="leading-normal sm:text-base text-sm  font-normal text-black opacity-70 flex items-center gap-2">
                <LocationSvg />
                Unlimited location searches
              </p>
              <p className="leading-normal sm:text-base text-sm  font-normal text-black opacity-70 flex items-center gap-2">
                <TrackPhoneSvg />
                Track up to 5 phones
              </p>
              <p className="leading-normal sm:text-base text-sm  font-normal text-black opacity-70 flex items-center gap-2">
                <MultipleWaysSvg />
                Multiple ways to locate a phone
              </p>
              <p className="leading-normal sm:text-base text-sm  font-normal text-black opacity-70 flex items-center gap-2">
                <ProtectSvg />
                Protect your family
              </p>
              <p className="leading-normal sm:text-base text-sm  font-normal text-black opacity-70 flex items-center gap-2">
                <MoneyBack />
                14 day money back guarantees
              </p>
              <p className="leading-normal sm:text-base text-sm font-normal text-black opacity-70 flex items-center gap-2">
                <PrivateSvg />
                Private & confidential
              </p>
            </div>
            <div className="sm:p-[18px] p-6 rounded-xl shadow-[0px_0px_9.5px_0px_#00000014] lg:max-w-[424px] max-w-[560px]">
              <p className="text-center sm:text-base text-sm leading-normal font-normal text-black opacity-70">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.
                <span className="text-sky">View full terms.</span>
              </p>
            </div>
          </div>
          <div className="xl:w-7/12 lg:w-6/12 w-full">
            <div className="pb-9 border border-solid border-lighblue shadow-[0px_16px_25.3px_0px_#00000014] rounded-xl">
              <div className="bg-blue p-[20px] rounded-tl-xl rounded-tr-xl flex justify-between">
                <p className="capitalize text-white sm:text-xxs text-2xl leading-sm flex gap-3 items-center">
                  <CardTongelSvg className="sm:w-[30px] sm:h-[30px] h-5 w-5" />
                  Debit/Credit Card
                </p>
                <div className="flex sm:gap-[34px] gap-[6px] items-center">
                  <img
                    src={visaimg}
                    alt="visaimg"
                    className="sm:w-[73px] sm:h-[27px] w-[33px] h-[12px]"
                  />
                  <img
                    src={thememastercard}
                    alt="thememastercard"
                    className="sm:w-[57px] sm:h-[49px] w-[25px] h-[21px]"
                  />
                </div>
              </div>
              <form className="sm:pt-[30px] pt-[42px] sm:px-6 px-2" action="">
                <div className="mb-5">
                  <label className="capitalize text-blue font-normal sm:text-base text-sm  leading-normal mb-2">
                    Your Address
                  </label>
                  <div className="border border-solid max-sm:h-[45px] bg-primary border-lighblue rounded flex items-center">
                    <TracesIcon className="w-[48px] sm:h-[52px] h-[45px]" />
                    <input
                      required
                      type="text"
                      placeholder="Address Line 1"
                      className="sm:px-[14px] pl-5 placeholder:text-blue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm text-blue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                  <p className="mt-1 text-secondary sm:text-base text-sm  font-normal leading-normal">
                    Our enter address manually
                  </p>
                </div>
                <div className="mb-5">
                  <label className="capitalize text-blue font-normal sm:text-base text-sm  leading-normal mb-2">
                    Email Address
                  </label>
                  <div className="border border-solid max-sm:h-[45px] bg-primary border-lighblue rounded flex items-center">
                    <EmailAddressIcon className="w-[48px] sm:h-[52px] h-[45px]" />
                    <input
                      required
                      type="text"
                      placeholder="Email Address"
                      className="sm:px-[14px] pl-5 capitalize placeholder:text-blue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm  text-blue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="capitalize text-blue font-normal sm:text-base text-sm leading-normal mb-2">
                    Card Number (Visa or Mastercard)
                  </label>
                  <div className="border border-solid max-sm:h-[45px] bg-primary border-lighblue rounded flex items-center">
                    <ValidNumberIcon className="w-[48px] sm:h-[52px] h-[45px]" />
                    <input
                      required
                      type="text"
                      placeholder="Valid Card Number"
                      className="sm:px-[14px] pl-5 capitalize placeholder:text-blue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm  text-blue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="sm:mb-[46px] mb-[38px] flex gap-[17px]">
                  <div className="lg:max-w-[307px] w-full">
                    <label className="capitalize text-blue font-normal sm:text-base text-sm leading-normal mb-2">
                      Expiry Date
                    </label>
                    <div className="border border-solid max-sm:h-[45px] bg-primary border-lighblue rounded flex items-center">
                      <CalenderIcon className="w-[48px] sm:h-[52px] h-[45px]" />
                      <input
                        required
                        type="text"
                        placeholder="MM/YY"
                        className="sm:px-[14px] pl-5 placeholder:text-blue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm capitalize font-normal sm:text-base text-sm  text-blue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="lg:max-w-[307px] w-full">
                    <label className="capitalize text-blue font-normal sm:text-base text-sm leading-normal mb-2">
                      Card Security Code
                    </label>
                    <div className="border border-solid max-sm:h-[45px] bg-primary border-lighblue rounded flex items-center">
                      <SecurityCodeIcon className="w-[48px] sm:h-[52px] h-[45px]" />
                      <input
                        required
                        type="text"
                        placeholder="E.x @ 0123"
                        className="sm:px-[14px] pl-5 placeholder:text-blue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm capitalize font-normal sm:text-base text-sm  text-blue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <CommonBtn
                  btnName="Buy Now (50C)"
                  className="capitalize text-white px-0 bg-blue w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateYourAccount;
