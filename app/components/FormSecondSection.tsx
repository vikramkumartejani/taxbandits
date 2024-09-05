import React from "react";
import { IoIosArrowDown, IoMdPlay } from "react-icons/io";

const FormSecondSection = () => {
  return (
    <>
      <div
        className="lg:w-9/12 border-b border-black lg:border-r lg:border-b-0 pt-1"
        id="taxclassificationdropdown"
      >
        <div className="px-[12px]">
          <div className="text-sm leading-tight flex text-black">
            <span className="pr-1 font-bold">3a</span>
            <span className="text-red-600">*</span>
            <span>
              Check appropriate box for federal tax classification of the person
              whose name is entered on line 1. Check only
              <b className="inline-block pl-1">one</b> of the following seven
              boxes.
            </span>
          </div>

          <div className="block md:grid lg:flex justify-between">
            <div className="flex items-start pt-3 pb-1">
              <input
                className="form-checkbox ml-0 mt-0 cursor-pointer"
                type="checkbox"
                name="individualProprietor"
                id="individualProprietor"
                value="Individual/Sole Proprietor or single member LLC"
              />
              <label
                className="text-dark pl-2 text-sm leading-snug"
                htmlFor="individualProprietor"
              >
                Individual/sole proprietor or <br className="hidden lg:block" />{" "}
                single-member LLC
              </label>
            </div>

            <div className="flex items-center py-3 cursor-pointer">
              <input
                className="form-checkbox ml-0 mt-0 cursor-pointer"
                type="checkbox"
                name="C-Corporation"
                id="C-Corporation"
                value="C Corporation"
              />
              <label
                className="text-dark pl-2 text-sm cursor-pointer"
                htmlFor="C-Corporation"
              >
                C Corporation
              </label>
            </div>

            <div className="flex items-center py-3 cursor-pointer">
              <input
                className="form-checkbox ml-0 mt-0 cursor-pointer"
                type="checkbox"
                name="S-Corporation"
                id="S-Corporation"
                value="S Corporation"
              />
              <label
                className="text-dark pl-2 text-sm cursor-pointer"
                htmlFor="S-Corporation"
              >
                S Corporation
              </label>
            </div>

            <div className="flex items-center py-3 cursor-pointer">
              <input
                className="form-checkbox ml-0 mt-0 cursor-pointer"
                type="checkbox"
                name="Partnership"
                id="Partnership"
                value="Partnership"
              />
              <label
                className="text-dark pl-2 text-sm cursor-pointer"
                htmlFor="Partnership"
              >
                Partnership
              </label>
            </div>

            <div className="flex items-center py-3 cursor-pointer">
              <input
                className="form-checkbox ml-0 mt-0 cursor-pointer"
                type="checkbox"
                name="Trust/Estate"
                id="Trust/Estate"
                value="Trust/Estate"
              />
              <label
                className="text-dark pl-2 text-sm cursor-pointer"
                htmlFor="Trust/Estate"
              >
                Trust/Estate
              </label>
            </div>
          </div>

          <div className="w-full flex items-start">
            <input
              className="form-checkbox ml-0 mt-0 cursor-pointer"
              type="checkbox"
              name="LLC-Classification"
              id="LLC-Classification"
              value="Limited Liability Company"
            />
            <label
              className="text-dark pl-2 mt-[1.5px] text-sm leading-snug"
              htmlFor="LLC-Classification"
            >
              Limited liability company. Enter the tax classification (C=C
              corporation, S=S corporation, P=Partnership)
            </label>
            <IoMdPlay className="mt-1 ms-2" />
          </div>

          <div className="text-dark pl-[1.5rem] text-sm mt-2">
            <b>Note</b> : Check the appropriate box in the line above for the
            tax classification of the single-member owner. Do not check LLC if
            the LLC is classified as a single-member LLC that is disregarded
            from the owner unless the owner of the LLC is another LLC that is
            <b>Not</b> disregarded from the owner for U.S. federal tax purposes.
            Otherwise, a single-member LLC that is disregarded from the owner
            should check the appropriate box for the tax classification of its
            owner.
          </div>

          <div className="flex items-start pt-1">
            <input
              className="form-checkbox ml-0 mt-0 cursor-pointer"
              type="checkbox"
              name="Others"
              id="Others"
              value="Others"
            />
            <label className="text-dark pl-2 pr-2 text-sm" htmlFor="Others">
              Other (see instructions)
            </label>
            <IoMdPlay className="mt-1" />
          </div>
        </div>

        <div className="border-t border-black py-2 mt-2 px-[12px]">
          <div className="flex">
            <span className="pr-1 font-bold">3b</span>
            <label
              className="text-dark leading-snug cursor-pointer"
              htmlFor="beneficiariesCheckbox"
            >
              If on line 3a you checked “Partnership” or “Trust/estate,” or
              checked “LLC” and entered “P” as its tax classification, and you
              are providing this form to a partnership, trust, or estate in
              which you have an ownership interest, check this box if you have
              any foreign partners, owners, or beneficiaries.
            </label>
            <span className="w-[20px]">
              <input
                className="form-checkbox ml-2 mt-0 cursor-pointer"
                type="checkbox"
                id="beneficiariesCheckbox"
                name="IsBeneficiaries"
                disabled
              />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-3/12 border-b border-black lg:border-b-0 pt-1 px-[12px]">
        <div className="text-sm leading-none text-black">
          <b>4</b> Exemptions (codes apply only to certain entities, not
          individuals;{" "}
          <a
            href="https://www.irs.gov/pub/irs-pdf/iw9.pdf"
            target="_blank"
            className="inline-block text-blue-600"
          >
            See instructions
          </a>{" "}
          on page 3):
        </div>

        <div className="mb-4 mt-4">
          <label className="block text-sm mb-2">
            Exempt payee code (if any)
          </label>
          <div className="relative">
            <select
              className="form-select block w-full appearance-none pe-[33px] p-[9px] border border-[#45618559] rounded"
              name="exemptionPayeeCode"
              id="exemptionPayeeCode"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
            </select>
            <div className="absolute top-1/2 right-[12px] transform -translate-y-1/2 pointer-events-none">
              <IoIosArrowDown size={17} color="#4561851" />
            </div>
          </div>
        </div>
        <div className="form-label fw-normal text-muted text-xs mb-1 invisible">
          Enter Exempt payee code
        </div>

        <div className="mt-2 mb-4">
          <label className="block text-sm mb-2 leading-[19px]">
            Exemption from FATCA reporting code (if any)
          </label>
          <div className="relative">
            <select
              className="form-select block w-full appearance-none p-[9px] pr-[28px] border border-[#45618559] rounded"
              name="exemptionFatca"
              id="exemptionFatca"
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M">M</option>
            </select>
            <div className="absolute top-1/2 right-[12px] transform -translate-y-1/2 pointer-events-none">
              <IoIosArrowDown size={17} color="#4561851" />
            </div>
          </div>
        </div>
        <div className="form-label font-[400] text-muted text-xs mb-1 invisible">
          Enter Exemption from FATCA reporting code
        </div>

        <div className="text-xs italic pb-1">
          (Applies to accounts maintained outside the U.S.)
        </div>
      </div>
    </>
  );
};

export default FormSecondSection;
