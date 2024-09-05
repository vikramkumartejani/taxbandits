import React from "react";
import { MdInfoOutline } from "react-icons/md";

const FormFirstSection = () => {
  return (
    <>
      <div className="col-span-6 lg:col-span-4 px-[12px] py-[8px]">
        <div className="text-sm mb-1 leading-none font-helveticaLight font-[500]">
          <span className="text-[#ff5252]">*</span>Type of TIN
        </div>
        <div className="relative">
          <div className="form-floating-radio form-control rounded p-[7px] pt-[9px] mt-1 relative rounded-sm border border-[#45618559] flex items-center">
            <div>
              <div className="inline-flex items-center flex-grow">
                <input
                  className="form-check-input"
                  type="radio"
                  name="TINType"
                  id="inlineRadioEIN"
                  value="on"
                />
                <label
                  className="text-[.875em] leading-[1.5] text-[#212529] cursor-pointer ml-1"
                  htmlFor="inlineRadioEIN"
                  id="inlineRadioEIN"
                >
                  EIN
                </label>
              </div>
              <div className="inline-flex items-center flex-grow ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="TINType"
                  id="inlineRadioSSN"
                  value="on"
                />
                <label
                  className="text-[.875em] leading-[1.5] text-[#212529] cursor-pointer ml-1"
                  htmlFor="inlineRadioSSN"
                  id="inlineRadioSSN"
                >
                  SSN
                </label>
              </div>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center justify-center">
              <button type="button">
                <MdInfoOutline size={24} color="#9e9e9e" />
              </button>
              <div className="parent-tooltip"></div>
            </div>
          </div>
          <div className="form-label font-normal italic text-muted text-xs mb-2 invisible">
            Select the type of TIN
          </div>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-4 px-[12px] py-[8px] font-helveticaLight font-[500]">
        <div className="text-sm mb-1 leading-none">
          <span className="text-[#ff5252]">*</span>EIN
        </div>
        <div className="mb-0 relative mt-1 w-full">
          <div className="form-floating error w-full h-full">
            <input
              type="text"
              autoComplete="nope"
              className="form-control rounded border border-[#ff5252] w-full h-full p-[10px]"
              name="EIN"
              id="EIN"
            />
          </div>
          <div className="form-label text-[#ff5252] font-normal text-xs mb-1">
            EIN required
          </div>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-4 px-[12px] py-[8px] font-helveticaLight font-[500]">
        <div className="text-sm mb-1 leading-none">Email Address</div>
        <div className="form-floating mt-1">
          <input
            type="email"
            autoComplete="nope"
            className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
            name="emailAddress"
            id="emailAddress"
          />
        </div>
      </div>

      <div className="col-span-12 px-[12px] font-helveticaLight font-[500]">
        <div className="text-sm mb-1 leading-none flex items-center">
          <span className="font-bold pe-1">1</span>
          <span className="text-[#ff5252]">*</span>
          <span>
            Name (as shown on your income tax return). Name is required on this
            line; do not leave this line blank.
          </span>
        </div>
      </div>

      <div className="col-span-12 border-b border-gray-900 px-[12px] font-helveticaLight font-[500]">
        <div className="form-floating error">
          <input
            type="text"
            autoComplete="nope"
            className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
            name="vendorName"
            id="vendorName"
          />
        </div>
        <div className="form-label text-[#ff5252] font-normal text-xs mb-1">
          Business Name required
        </div>
      </div>

      <div className="col-span-12 px-[12px] pt-1 border-b border-gray-900 font-helveticaLight font-[500]">
        <div className="relative">
          <div className="text-sm leading-none text-black mb-1">
            <span className="font-bold pe-1">2</span>
            Business name/disregarded entity name, if different from above
          </div>
          <div className="form-floating">
            <input
              type="text"
              autoComplete="nope"
              className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
              name="businessName"
              id="businessName"
            />
          </div>
          <div className="form-label font-normal text-muted text-xs mb-1 invisible">
            Enter your Business Name 2 as shown on your tax return
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFirstSection;
