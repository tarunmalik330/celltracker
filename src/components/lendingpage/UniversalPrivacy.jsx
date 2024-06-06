import React from 'react'
import { privacyData } from '../common/Helper';
import vectorImg2 from '../../assets/images/webp/vectorImg2.webp';

const UniversalPrivacy = () => {
    return (
        <div className='relative mt-[42px] xl:mt-[76px] sm:mt-9'>
            <img src={vectorImg2} alt="vectorimg" className='right-0 top-[-6%] md:top-[-5%] lg:top-[-30%] xl:top-[10%] max-w-[41px] sm:max-w-[55px] md:max-w-[65px] lg:max-w-[106px] w-full absolute pointer-events-none' />
            <div className='container xl:max-w-[1162px] mx-auto px-3'>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-light text-blue text-2lg sm:text-xsm md:text-5xl !leading-xs text-center mb-[12px] lg:mb-2' data-aos="fade-up" >Universal <span className='font-extrabold'>Privacy</span></h2>
                    <p className='text-grey text-base font-normal !leading-normal md:max-w-[472px] text-center' data-aos="fade-up">Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between mt-[34px] md:mt-[56px]'>
                    {privacyData.map((data, index) => (
                        <div key={index}
                            className="lg:w-[24%] sm:w-[48%] w-full mb-[18px] lg:mb-0" data-aos="zoom-in">
                            <div className="xl:max-w-[267px] max-h-[187px] sm:max-w-[430px] w-full h-full sm:min-h-[261px] hover:bg-bluegradient bg-black pb-3 bg-opacity-10 group rounded">
                                <div className=" sm:max-w-[430px] xl:max-w-[267px] min-h-[187px] sm:min-h-[261px] h-full relative rounded  duration-300 border group goup3  border-black border-opacity-[10%] before:rounded before:absolute before:w-full before:h-full before:bg-white before:duration-300 before:top-0 hover:before:bg-transparent">
                                    <div className="sm:w-[75px] sm:h-[70px] w-[61px] h-[57px] relative z-[4] left-[-1px] border-l-[1px] border-l-black border-opacity-10 group-hover:bg-white bg-offBlue  flex justify-center items-center mt-6 sm:mt-7">
                                        {data.svg}
                                    </div>
                                    <div className='py-[13px] pr-[14px] pl-[12px] relative'>
                                        <h3 className='font-normal text-xl group-hover:text-white group md:text-2xl !leading-sm text-black sm:max-w-[241px] mb-[6px] transition-all duration-300 ease-linear'>{data.heading}</h3>
                                        <p className="sm:text-base text-sm font-normal group-hover:text-white group group-hover:opacity-[70%] !leading-normal sm:max-w-[241px] text-lghtGrey transition-all duration-300 ease-linear">{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UniversalPrivacy;
