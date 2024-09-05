import Header from "./components/Header";
import FormSection from "./components/FormSection";
import SIgnHere from "./components/SIgnHere";

export default function Home() {
  return (
    <div className="min-w-full p-3 md:block hidden">
      <div className="container-box w-full bg-white mt-12 p-[0.5rem] lg:p-[3rem] pb-4">
        <Header />
        <FormSection />
        <SIgnHere />
      </div>
    </div>
  );
}
