import React from "react";

const SIgnHere = () => {
  return (
    <div className="col-span-12 mt-2">
      <div className="border border-2 border-gray-800 border-l-0 border-r-0 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="text-lg font-bold pr-3 w-auto leading-[19px] py-1"
            id="scrollToBottom"
          >
            Sign
            <br />
            Here
          </div>
          <div className="pl-3 font-bold leading-[19px] text-nowrap border-l border-gray-800 py-1">
            Signature of
            <br />
            U.S. person ▶
          </div>
          <div className="pl-3 w-full md:w-1/2 mr-2 xl:mr-0">
            <button
              className="bg-gray-300 text-gray-800 px-3 py-1 text-sm font-medium ms-auto"
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
          <b>Date ▶</b>
          <div className="ml-auto">
            <input
              type="text"
              className="border-0 bg-white pl-2 text-sm"
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
