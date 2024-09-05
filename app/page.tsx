import Header from "./components/Header";
import FormFirstSection from "./components/FormFirstSection";
import FormSecondSection from "./components/FormSecondSection";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <div className="min-w-full p-3 md:block hidden">
      <div className="container-box w-full bg-white mt-12 p-[0.5rem] lg:p-[3rem] pb-4">
        <Header />
        <FormSection />
      </div>
    </div>
  );
}
