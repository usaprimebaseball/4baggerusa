import React from "react";

// components

import UsersTable from "../UsersTable";

export default function AdminAction() {
  return (
    <>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
            <div>
                <div className="flex flex-wrap">
                    <div className="w-full mb-12 px-4">
                        <UsersTable />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}
