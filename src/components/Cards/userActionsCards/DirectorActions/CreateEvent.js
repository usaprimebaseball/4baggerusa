import React from "react";

// components

import CreateEventForm from "components/Forms/CreateEventForm";

export default function CreateEvent() {
  return (
    <>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                  <div className="flex flex-wrap">
                      <div className="w-full mb-12 px-4">
                          <CreateEventForm />
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  );
}
