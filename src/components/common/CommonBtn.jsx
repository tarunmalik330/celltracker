import React from "react";

const CommonBtn = (props) => {
  return (
    <>
      <button
        aria-label="common btn"
        rel="noopener noreferrer"
        className={`leading-normal font-semibold sm:text-base text-sm rounded text-blue hover:bg-white hover:text-blue hover:shadow-button transition-all ease-linear duration-300 hover:border-blue hover:border hover:border-solid border-transparent border ${
          props.padding ? "" : "sm:py-[16.5px] py-3 px-7"
        } ${props.className}`}
      >
        {props.btnName}
      </button>
    </>
  );
};

export default CommonBtn;
