import React from "react";
import UserProfilePage from "views/UserProfilePage.js";
import UserImageCard from "components/Cards/UserImageCard.js";
// components


export default function UserDetails() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <UserProfilePage />
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <UserImageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
