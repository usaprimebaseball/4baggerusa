import React from "react";
import SelectedInvoiceDetails from "views/SelectedInvoiceDetails";
// import SelectedUserImageCard from "components/Cards/UserImageCard.js";
// components


export default function SelectedInvoicePage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <SelectedInvoiceDetails />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
