import React from "react";

const FormThirdSection = () => {
  return (
    <>
      <div className="md:w-8/12 border-black border-t md:border-r">
        <div className="flex flex-col px-[12px]">
          <div className="text-black mb-1 pt-1 text-sm font-medium mr-3">
            <span className="font-bold pr-1">5</span>
            Address (number, street, and apt. or suite no.)
            <a
              href="https://www.irs.gov/pub/irs-pdf/iw9.pdf"
              target="_blank"
              className="text-blue-600 underline"
            >
              {" "}
              See Instructions
            </a>
            .
          </div>
          <div className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="IsForeignAddress"
              id="IsForeignAddress"
              className="form-checkbox h-4 w-4"
              value="on"
            />
            <label
              htmlFor="IsForeignAddress"
              className="ml-2 text-sm cursor-pointer"
            >
              Foreign Address (Outside US)?
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-[12px]">
            <div className="text-sm mb-1">
              <span className="text-red-600">*</span>Address Line 1
            </div>
            <div className="mb-1">
              <input
                type="text"
                id="address1"
                name="address1"
                className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
              />
              <div className="text-red-600 text-xs mt-1">
                Address line 1 required
              </div>
            </div>
          </div>
          <div className="px-[12px]">
            <div className="text-sm mb-1">Address Line 2</div>
            <div className="mb-1">
              <input
                type="text"
                id="address2"
                name="address2"
                className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
              />
              <div className="text-gray-500 text-xs mt-1 italic">
                Eg: Suite 230
              </div>
            </div>
          </div>
        </div>
        <div className="border-y border-black">
          <div className="text-black mb-1 pt-1 px-[12px] text-sm font-medium">
            <span className="font-bold pr-1">6</span>
            City, state, and ZIP code
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-[12px]">
              <div className="text-sm mb-1">
                <span className="text-red-600">*</span>City
              </div>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
                />
                <div className="text-red-600 text-xs mt-1">City required</div>
              </div>
            </div>
            <div className="px-[12px]">
              <div className="text-sm mb-1">
                <span className="text-red-600">*</span>State
              </div>
              <div>
                <select
                  id="stateCode"
                  name="stateCode"
                  className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
                >
                  <option value="">Select</option>
                  {/* Add state options here */}
                </select>
                <div className="text-red-600 text-xs mt-1">State required</div>
              </div>
            </div>
            <div className="px-[12px]">
              <div className="text-sm mb-1">
                <span className="text-red-600">*</span>ZIP Code
              </div>
              <div className="mb-[4px]">
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
                />
                <div className="text-red-600 text-xs mt-1">
                  ZIP code required
                </div>
              </div>
            </div>
            <div className="lg:mt-4 -mt-2 lg:mb-0 mb-1 pt-3 px-[12px]">
              <a href="#" className="text-blue-600 underline cursor-pointer">
                Verify address with USPS
              </a>
            </div>
          </div>
        </div>
        <div className="px-[12px]">
          <div className="text-black mb-1 pt-1 text-sm font-medium">
            <span className="font-bold pr-1">7</span>
            List account number(s) here (optional)
          </div>
          <div className="relative">
            <input
              type="text"
              id="accountNo"
              name="accountNo"
              className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
            />
            <div className="text-red-600 text-xs mt-1 invisible">required</div>
          </div>
        </div>
      </div>

      <div className="md:w-4/12 border-t border-black px-[12px]">
        <div className="text-black mb-1 text-sm font-medium pt-1">
          Requester’s name and address (optional)
        </div>
        <div>
          <div className="text-sm mb-1">Requester Name</div>
          <input
            type="text"
            id="reqBusinessName"
            name="businessName"
            className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
          />
          <div className="text-red-600 text-xs mt-1 invisible">
            businessName
          </div>
        </div>
        <div>
          <div className="text-sm mb-1">Requester Email</div>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control rounded border border-[#45618559] w-full h-full p-[10px]"
          />
          <div className="text-red-600 text-xs mt-1 invisible">
            Email required
          </div>
        </div>
        <div>
          <div className="text-sm mb-1">Requester Address</div>
          <textarea
            id="requesterAddress"
            name="requesterAddress"
            className="form-control rounded border border-[#45618559] w-full h-[130px] p-[10px]"
          ></textarea>
          <div className="text-gray-500 text-xs mt-1 invisible">
            EIN required
          </div>
        </div>
      </div>
    </>
  );
};

export default FormThirdSection;
