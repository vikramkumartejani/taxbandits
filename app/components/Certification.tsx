import React from "react";

const Certification = () => {
  return (
    <div className="px-[12px]">
      <div className="border-l border-y border-r-0 border-black flex items-center gap-3">
        <h3 className="bg-black text-lg px-4 text-white font-bold">Part II</h3>
        <div className="font-bold text-[1.15rem] ps-1">Certification</div>
      </div>
      <p className="text-[14px] font-[500] font-helveticaLight leading-[21px] py-1">
        Under penalties of perjury, I certify that:{" "}
      </p>
      <div className="ps-[7px]">
        <p className="text-[14px] font-[500] font-helveticaLight text-black">
          1. The number shown on this form is my correct taxpayer identification
          number (or I am waiting for a number to be issued to me); and{" "}
        </p>
        <div className="py-4 flex">
          <p className="text-[14px] font-[500] font-helveticaLight text-black">
            2. If you have been notified by the IRS that you are subject to
            backup withholding
          </p>
          <div className="pl-4">
            <form className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <input
                  autoComplete="nope"
                  className="form-check-input"
                  type="radio"
                  name="backupWithholding"
                  id="withHoldingYes"
                  value="on"
                />
                <span className="text-[14px] cursor-pointer">Yes</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  autoComplete="nope"
                  className="form-check-input"
                  type="radio"
                  name="backupWithholding"
                  id="withHoldingYes"
                  value="on"
                />
                <span className="text-[14px] cursor-pointer">No</span>
              </div>
            </form>
          </div>
        </div>
        <p className="text-[14px] font-[500] font-helveticaLight text-black pl-4 leading-[19px] pr-4">
          I am not subject to backup withholding because: (a) I am exempt from
          backup withholding, or (b) I have not been notified by the Internal
          Revenue Service (IRS) that I am subject to backup withholding as a
          result of a failure to report all interest or dividends, or (c) the
          IRS has notified me that I am no longer subject to backup withholding;
          and
        </p>
        <p className="text-[14px] font-[500] font-helveticaLight text-black">
          3. I am a U.S. citizen or other U.S. person and
        </p>
        <p className="text-[14px] font-[500] font-helveticaLight text-black">
          4. The FATCA code(s) entered on this form (if any) indicating that I
          am exempt from FATCA reporting is correct.{" "}
        </p>
      </div>
      <p
        className="mt-1.5 text-[14px] font-[500] font-helveticaLight text-black leading-[19px] pe-1"
        style={{ wordSpacing: "-2px" }}
      >
        <span className="font-bold">Certification instructions</span>. You must
        cross out item 2 above if you have been notified by the IRS that you are
        currently subject to backup withholding because you have failed to
        report all interest and dividends on your tax return. For real estate
        transactions, item 2 does not apply. For mortgage interest paid,
        acquisition or abandonment of secured property, cancellation of debt,
        contributions to an individual retirement arrangement (IRA), and
        generally, payments other than interest and dividends, you are not
        required to sign the certification, but you must provide your correct
        TIN. See the instructions for Part II, later.
      </p>
    </div>
  );
};

export default Certification;
