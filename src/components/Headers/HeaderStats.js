import React from "react";
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <CardSettings />
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <CardProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
