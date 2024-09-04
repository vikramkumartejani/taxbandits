import React from "react";
 
const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-black">
      <div className="max-w-[25%] xl:max-w-[16%] w-full border-r-2 border-black">
        <h1 className="text-[16px] font-helveticaLight font-medium">
          Form
          <span className="text-[36px] font-bold font-helvetica"> W-9</span>
        </h1>
        <h4 className="text-[14px] leading-[17px] font-medium">
          (Rev. March 2024)
        </h4>
        <h4 className="text-[14px] leading-[17px] font-medium">
          Department of the Treasury Internal Revenue Service
        </h4>
      </div>
      <div className="px-1.5 lg:px-3">
        <h1 className="text-nowrap text-center text-[22px] lg:text-[24px] pt-4 leading-[24px] font-bold font-helvetica">
          Request for Taxpayer <br /> Identification Number and Certification
        </h1>
        <p className=" inline-block text-center text-[16px] font-bold pt-6 text-black font-helvetica">
          {/* <BiSolidRightArrow /> */}▶ Go to
          <i className=" list-none italic pr-1">www.irs.gov/FormW9</i>
          for instructions and the latest information.
        </p>
      </div>
      <div className="p-2 second-container  border-l-2 border-black ">
        <h3 className="text-[18px] leading-[19px] font-bold pt-3">
          Give Form to the requester. Do not send to the IRS.
        </h3>
      </div>
    </div>
  );
};

export default Header;
