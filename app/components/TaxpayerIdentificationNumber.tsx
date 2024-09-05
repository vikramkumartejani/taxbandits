import React from "react";

const TaxpayerIdentificationNumber = () => {
  return (
    <div className="px-[12px]">
      <div className="border-l border-y border-r-0 border-black flex items-center gap-3">
        <h3 className="bg-black text-lg px-4 text-white font-bold w-[83px]">
          Part I
        </h3>
        <div className="font-bold text-[1.15rem]">
          Taxpayer Identification Number (TIN)
        </div>
      </div>
      <div className="flex items-center">
        <div className="border-r border-black w-[65%] pr-[20px]">
          <p className="mt-1.5 text-sm font-[500] font-helveticaLight text-black leading-[19px]">
            Enter your TIN in the appropriate box. The TIN provided must match
            the name given on line 1 to avoid backup withholding. For
            individuals, this is generally your social security number (SSN).
            However, for a resident alien, sole proprietor, or disregarded
            entity, see the instructions for Part I, later. For other entities,
            it is your employer identification number (EIN). If you do not have
            a number, see How to get a TIN, later.
          </p>
          <p className="mt-1.5 text-sm font-[500] font-helveticaLight text-black leading-[19px]">
            <span className="font-bold">Note:</span>
            If the account is in more than one name, see the instructions for
            line 1. Also see What Name and Number To Give the Requester for
            guidelines on whose number to enter.
          </p>
        </div>
        <div className="pl-1 w-[35%]">
          <div className="w-full">
            <div className="px-[10px] w-full">
              <div className="text-[14px] font-medium mb-0.5">
                <span className="text-red-600">*</span>EIN
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control rounded border border-red-600 outline-[#3097f3] w-[95%] h-full p-[10px] w-full"
                />
                <div className="text-[#ff5252] text-xs font-[400]">
                  EIN required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxpayerIdentificationNumber;
