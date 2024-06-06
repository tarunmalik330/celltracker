import React from 'react'
import { CellPhone, GrabLocation, MessageSvg, MobileNumber, UnlimitedLocation } from '../common/Icon';
import anyoneMobile from '../../assets/images/png/anyoneMobileimg.png';

const FindAnyone = () => {
    return (
        <div className='mt-[132px] !mb-[33px]'>
            <div className="container sm:px-3 px-6 custom_container mx-auto" >
                <div className="flex justify-center items-center flex-col">
                    <h2 className="font-light text-blue text-2lg sm:text-5xl sm:!leading-xs leading-xxs text-center mb-[12px] lg:mb-2">
                        Find Anyone Anywhere for
                        <span className="font-extrabold leading-xs">Under $1</span>
                    </h2>
                    <p className="text-grey text-sm sm:text-base font-normal !leading-normal md:max-w-[472px] text-center">
                        Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.
                    </p>
                </div>
                <div className="flex justify-between max-lg:flex-wrap items-center mt-[31px] md:mt-[56px]">
                    <div className="lg:w-[34%] max-lg:order-1 max-lg:mt-12  w-full">
                        <div className=" max-w-[500px] lg:max-w-[376px] lg:h-[156px] h-[152px] rounded flex mx-auto relative overflow-hidden z-[1] after:absolute after:inset-0 after:bg-bluegradient after:opacity-0 after:transition-all after:ease-linear after:duration-300 hover:after:opacity-100 after:z-[-1] border border-gray-low-300 lg:p-[12px_18px_12px_0] p-[16px_16px_16px_0] group mb-[24px]">
                            <div className="flex gap-[14px] items-center">
                                <div className="bg-offBlue inline-block group-hover:bg-white md:p-[17px_19px_17px_20px] p-[14px_16px] transition-all duration-300 ease-linear">
                                    <CellPhone />
                                </div>
                                <p className="font-normal text-lg xl:text-xl leading-[184%] group-hover:text-white group-hover:opacity-70 transition-all ease-linear duration-300 ">
                                    Cell Tracker runs on all phones and configurations, of all
                                    brands
                                </p>
                            </div>
                        </div>
                        <div className=" max-w-[500px] lg:max-w-[376px] lg:h-[156px] h-[152px] rounded flex mx-auto relative overflow-hidden z-[1] after:absolute after:inset-0 after:bg-bluegradient after:opacity-0 after:transition-all after:ease-linear after:duration-300 hover:after:opacity-100 after:z-[-1] border border-gray-low-300 lg:p-[12px_18px_12px_0] p-[16px_16px_16px_0] group">
                            <div className="flex gap-[14px] items-center">
                                <div className="bg-offBlue inline-block group-hover:bg-white md:p-[17px_19px_17px_20px] p-[14px_16px] transition-all duration-300 ease-linear">
                                    <MessageSvg />
                                </div>
                                <p className="font-normal text-lg xl:text-xl leading-[184%] group-hover:text-white group-hover:opacity-70 transition-all ease-linear duration-300 ">
                                    Customize the message you want the recipient to recieve. Or
                                    use the one suggested by default
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33%] w-full">
                        <img
                            src={anyoneMobile}
                            alt="anyoneMobile"
                            className="w-full max-h-[386.58px] max-w-[211px] lg:max-w-[255.26px] mx-auto"
                        />
                    </div>
                    <div className="lg:w-[34%] w-full max-lg:mt-[18px] max-lg:order-2 ">
                        <div className="max-w-[500px] lg:max-w-[376px] lg:h-[156px] h-[152px] rounded flex mx-auto relative overflow-hidden z-[1] after:absolute after:inset-0 after:bg-bluegradient after:opacity-0 after:transition-all after:ease-linear after:duration-300 hover:after:opacity-100 after:z-[-1] border border-gray-low-300 lg:p-[12px_18px_12px_0] p-[16px_16px_16px_0] group mb-[24px]">
                            <div className="flex gap-[14px] items-center">
                                <div className="bg-offBlue inline-block group-hover:bg-white md:p-[17px_19px_17px_20px] p-[14px_16px] transition-all duration-300 ease-linear">
                                    <GrabLocation />
                                </div>
                                <p className="font-normal text-lg xl:text-xl leading-[184%] group-hover:text-white group-hover:opacity-70 transition-all ease-linear duration-300 ">
                                    Grab real-time location as precise coordinates
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[500px] lg:max-w-[376px] lg:h-[156px] h-[152px] rounded flex mx-auto relative overflow-hidden z-[1] after:absolute after:inset-0 after:bg-bluegradient after:opacity-0 after:transition-all after:ease-linear after:duration-300 hover:after:opacity-100 after:z-[-1] border border-gray-low-300 lg:p-[12px_18px_12px_0] p-[16px_16px_16px_0] group">
                            <div className="flex gap-[14px] items-center">
                                <div className="bg-offBlue inline-block group-hover:bg-white md:p-[17px_19px_17px_20px] p-[14px_16px] transition-all duration-300 ease-linear">
                                    <MobileNumber />
                                </div>
                                <p className="font-normal text-lg xl:text-xl leading-[184%] group-hover:text-white group-hover:opacity-70 transition-all ease-linear duration-300 ">
                                    Any mobile number in the world can be tracked
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" max-w-[500px] lg:max-w-[376px] mx-auto mt-[21px] w-full after:transition-all after:ease-linear after:duration-300 hover:after:opacity-100 after:z-[-1] group relative z-[1] after:absolute after:inset-0 after:bg-bluegradient after:opacity-0">
                    <div className="max-md:mt-[18px] mt-[21px] border border-gray-low-300 rounded-[4px] lg:h-[156px] h-[152px] flex lg:p-[12px_18px_12px_0] p-[16px_16px_16px_0]">
                        <div className="flex gap-[14px] items-center">
                            <div className="bg-offBlue inline-block group-hover:bg-white md:p-[17px_19px_17px_20px] p-[14px_16px] transition-all duration-300 ease-linear">
                                <UnlimitedLocation />
                            </div>
                            <p className="group-hover:text-white group-hover:opacity-70 duration-300  font-normal text-lg xl:text-xl leading-[184%]">
                                Send unlimited geo-location requests
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FindAnyone
