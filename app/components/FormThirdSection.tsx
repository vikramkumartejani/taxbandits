import React from "react";

const FormThirdSection = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-8 border-black border-t md:border-r lg:border-b-0">
        <div className="flex items-center px-[12px]">
          <div className="text-black mb-1 pt-1 text-sm font-medium mr-3">
            <span className="font-bold pr-1">5</span>
            Address (number, street, and apt. or suite no.)
            <a
              href="https://www.irs.gov/pub/irs-pdf/iw9.pdf"
              target="_blank"
              className="text-blue-600 underline"
            >
              See Instructions
            </a>
            .
          </div>
          <div>
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[12px]">
          <div className="px-[12px]">
            <div className="text-sm mb-1">
              <span className="text-red-600">*</span>Address Line 1
            </div>
            <div className="mb-1">
              <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Address Line 1"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                placeholder="Address Line 2"
                className="block w-full px-3 py-2 border border-gray-300 bg-blue-50 rounded-md"
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
                  placeholder="City"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
                  placeholder="ZIP Code"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <div className="text-red-600 text-xs mt-1">
                  ZIP code required
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 px-[12px]">
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
              placeholder="Account Number"
              className="block w-full px-3 py-2 border border-gray-300 bg-blue-50 rounded-md"
            />
            <div className="text-red-600 text-xs mt-1 invisible">required</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 border-t border-black px-[12px]">
        <div className="text-black mb-1 text-sm font-medium pt-1">
          Requester’s name and address (optional)
        </div>
        <div>
          <div className="text-sm mb-1">Requester Name</div>
          <input
            type="text"
            id="reqBusinessName"
            name="businessName"
            placeholder="Requester Name"
            className="block w-full px-3 py-2 border border-gray-300 bg-blue-50 rounded-md"
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
            placeholder="Requester Email"
            className="block w-full px-3 py-2 border border-gray-300 bg-blue-50 rounded-md"
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
            placeholder="Leave a comment here"
            className="block w-full p-2 border border-gray-300 bg-blue-50 rounded-md h-32 resize-none"
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
