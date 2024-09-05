import React from "react";
import FormFirstSection from "./FormFirstSection";
import FormSecondSection from "./FormSecondSection";
import FormThirdSection from "./FormThirdSection";
import Certification from "./Certification";
import TaxpayerIdentificationNumber from "./TaxpayerIdentificationNumber";

const FormSection = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-[-110px] top-[40%] text-[16px] font-HelveticaNeue">
          <p className="rotate-[-90deg] w-fit text-center">
            <b>Print or type.</b>
            <br />
            See <b>Specific Instructions</b> on page 3.
          </p>
        </div>
        <div className="grid grid-cols-12 border-l border-l-black ms-[3rem]">
          <FormFirstSection />
          <div className="col-span-12 font-HelveticaNeue font-[500]">
            <div className="flex flex-col lg:flex-row">
              <FormSecondSection />
            </div>
            <div className="flex flex-col md:flex-row">
              <FormThirdSection />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TaxpayerIdentificationNumber/>
        <Certification />
      </div>
    </div>
  );
};

export default FormSection;

 
