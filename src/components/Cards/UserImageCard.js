import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
// components

export default function UserImageCard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')));
    setUserInfo(user.result)
}, [location]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
              {!userInfo.profileImage ?
              <Avatar className="mt-2 bg-danger font-bold" style={{borderRadius: "50%", height:"120px", width:"120px"}}>{user?.result.firstName.charAt(0)} {user?.result.lastName.charAt(0) }</Avatar>
              :
              <img
              alt="..."
              style={{height:"200px", width: "160px"}}
              src={userInfo.profileImage}
              className="shadow-xl rounded align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
              }
              </div>
            </div>
            <div className="w-full px-4 text-center mt-5">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="relative text-center">
                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {userInfo.firstName} {userInfo.lastName}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      
                      {userInfo.city && userInfo.state ? <div><i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> {userInfo.city}, {userInfo.state}</div>: ""}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
