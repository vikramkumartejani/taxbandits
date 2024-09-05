import React from "react";
import { IoMdPlay } from "react-icons/io";

const SIgnHere = () => {
  return (
    <div className="col-span-12 mt-2 font-helveticaLight px-[12px]">
      <div className="border-2 border-gray-800 border-l-0 border-r-0 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="text-[18px] font-bold font-helveticaLight pr-[16px] w-auto leading-[19px] py-1"
            id="scrollToBottom"
          >
            Sign
            <br />
            Here
          </div>
          <div className="pl-[16px] font-bold leading-[19px] text-nowrap border-l-2 border-gray-800 py-1">
            Signature of
            <br />
            U.S. person <IoMdPlay className="inline-block" />
          </div>
          <div className="pl-3 w-full md:w-1/2 mr-2 xl:mr-0">
            <button
              className="bg-[#3097f3] text-white rounded px-[16px] py-1 text-[17.1px] font-[500] ms-auto"
              data-bs-toggle="modal"
              data-bs-target="#newesign"
              id="esignfocus"
              aria-label="Close"
              type="button"
              name="sign"
            >
              Click to E-Sign
            </button>
            <div className="parent-tooltip"></div>
          </div>
        </div>
        <div className="md:flex items-center">
          <b className="flex items-center">
            Date
            <IoMdPlay className="mt-[1px] ms-1" />
          </b>
          <div className="ml-auto">
            <input
              type="text"
              className="border-0 bg-white text-[16.4px] pl-2 text-sm"
              id="floatingInput"
              placeholder="name"
              disabled
              value="09/02/2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnHere;
