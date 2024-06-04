import React from 'react';
import { cellTrackerData } from './common/Helper';
import heroLayer from '../assets/images/png/heroWhite-layer.png';

const Celltrackers = () => {
    return (
        <div className='relative'>
            <img src={heroLayer} alt="heroLayer" className='right-0 left-0 top-[-3%] sm:top-[-10%] lg:top-[-22%] w-full absolute z-0' />
            <div className='container xl:max-w-[1162px] mx-auto px-3 relative z-1 pt-[70px]'>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-light text-blue text-2lg sm:text-xsm md:text-6xl !leading-xxs text-center mb-[12px] lg:mb-2'>Advantages of <span className='font-extrabold'>Celltracker</span></h2>
                    <p className='text-grey text-base font-normal !leading-normal md:max-w-[472px] text-center'>Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between my-[50px]'>
                    {cellTrackerData.map((data, index) => (
                        <div key={index}
                            className={`${(index === 1 || index === 3) ? "lg:mt-[23px]" : ""} lg:w-[24%] sm:w-[48%] w-full mb-[18px] lg:mb-0`}>
                            <div className='lg:max-w-[271px] min-h-[184px] sm:min-h-[253px] bg-white p-[20px] shadow-[0px_16px_25.3px_0px_#00000014] border-[2px] border-solid border-lightSky rounded-[12px] hover:border-blue transition-all duration-300 ease-linear'>
                                <div>
                                    {data.svg}
                                </div>
                                <h3 className='font-normal text-xl md:text-2xl !leading-sm text-blue sm:max-w-[231px] mb-[6px] mt-1'>{data.heading}</h3>
                                <p className={`${(index === 0) ? "!leading-[144%]" : ""} text-base font-normal !leading-normal sm:max-w-[231px] text-lghtGrey`}>{data.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-[16px] px-[28px] bg-blue text-white rounded-[4px] text-base font-semibold leading-lg'>Create your Account</button>
                </div>
            </div>
        </div>
    );
}

export default Celltrackers
