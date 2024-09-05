import React from "react";
import FormFirstSection from "./FormFirstSection";
import FormSecondSection from "./FormSecondSection";
import FormThirdSection from "./FormThirdSection";

const FormSection = () => {
  return (
    <div className="grid grid-cols-12 border-l border-l-black">
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
  );
};

export default FormSection;
