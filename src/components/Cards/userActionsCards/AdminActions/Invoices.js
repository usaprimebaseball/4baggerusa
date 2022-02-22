import React from "react";

// components

import InvoicesTable from "../../../Tables/InvoicesTable";

export default function Invoices() {
  return (
    <>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
            <div>
                <div className="flex flex-wrap ">
                    <div className="w-full  px-4" style={{marginBottom: "172px"}}>
                        <InvoicesTable />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}
