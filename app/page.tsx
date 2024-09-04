import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-w-full p-3 md:block hidden">
      <div className="container-box w-full bg-white mt-12 p-[0.5rem] lg:p-[3rem] pb-4">
        <Header />
        <div className="relative max-w-4xl mx-auto bg-white border border-gray-400 p-6">
          {/* Vertical Text */}
          <div className="absolute top-0 left-0 h-full transform -translate-x-4 flex items-center">
            <div className="text-xs leading-tight text-gray-600 transform -rotate-90 origin-bottom-left text-center">
              <span className="block font-semibold">Print or type.</span>
              <span className="block">See Specific Instructions on page 3.</span>
            </div>
          </div>
 

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Check the appropriate box in the line above
              for the tax classification of the single-member owner. Do not
              check LLC if the LLC is classified as a single-member LLC that is
              disregarded from the owner unless the owner of the LLC is another
              LLC that is not disregarded from the owner for U.S. federal tax
              purposes. Otherwise, a single-member LLC that is disregarded from
              the owner should check the appropriate box for the tax
              classification of its owner.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Check the appropriate box in the line above
              for the tax classification of the single-member owner. Do not
              check LLC if the LLC is classified as a single-member LLC that is
              disregarded from the owner unless the owner of the LLC is another
              LLC that is not disregarded from the owner for U.S. federal tax
              purposes. Otherwise, a single-member LLC that is disregarded from
              the owner should check the appropriate box for the tax
              classification of its owner.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Check the appropriate box in the line above
              for the tax classification of the single-member owner. Do not
              check LLC if the LLC is classified as a single-member LLC that is
              disregarded from the owner unless the owner of the LLC is another
              LLC that is not disregarded from the owner for U.S. federal tax
              purposes. Otherwise, a single-member LLC that is disregarded from
              the owner should check the appropriate box for the tax
              classification of its owner.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Check the appropriate box in the line above
              for the tax classification of the single-member owner. Do not
              check LLC if the LLC is classified as a single-member LLC that is
              disregarded from the owner unless the owner of the LLC is another
              LLC that is not disregarded from the owner for U.S. federal tax
              purposes. Otherwise, a single-member LLC that is disregarded from
              the owner should check the appropriate box for the tax
              classification of its owner.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Check the appropriate box in the line above
              for the tax classification of the single-member owner. Do not
              check LLC if the LLC is classified as a single-member LLC that is
              disregarded from the owner unless the owner of the LLC is another
              LLC that is not disregarded from the owner for U.S. federal tax
              purposes. Otherwise, a single-member LLC that is disregarded from
              the owner should check the appropriate box for the tax
              classification of its owner.
            </p>
          </div>

          <div className="mt-4">
            <input type="checkbox" id="foreign_partners" className="mr-2" />
            <label htmlFor="foreign_partners" className="text-sm">
              If you have foreign partners, owners, or beneficiaries, check this
              box.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
