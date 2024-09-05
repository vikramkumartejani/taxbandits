import Header from "./components/Header";
import FormSection from "./components/FormSection";
import SIgnHere from "./components/SIgnHere";

export default function Home() {
  return (
    <div className="min-w-full p-3 md:block hidden pb-[26px]">
      <div className="container-box w-full bg-white mt-12 p-[0.5rem] lg:p-[3rem] pb-4">
        <Header />
        <FormSection />
        <SIgnHere />
      </div>
      <div className="text-center mt-[1.5rem] font-helveticaLight">
        <a className="rounded text-[1.15rem] text-white bg-[#f26d21] px-4 py- w-[93.4px] h-[45.2px] flex items-center justify-center font-[500] shadow-md mx-auto">
          Done
        </a>
      </div>
    </div>
  );
}
