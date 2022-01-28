import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import TeamCard from "../Cards/UsersCards/TeamCard";
import PlayerCard from './UsersCards/PlayerCard';
import DirectorCard from './UsersCards/DirectorCard';
import OtherCard from './UsersCards/OtherCard';
// components

export default function CardSettings() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [userRole, setUserRole] = useState("");
  

  useEffect(() => {
    const token = user?.token;

    if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime());
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    setUserRole(user.result.role)
}, [location]);


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
          </div>
        </div>
          {userRole === "team" ? <TeamCard />: 
          userRole === "player" ? <PlayerCard />: 
          userRole === "director" ? <DirectorCard />: 
          userRole === "director" ? <DirectorCard />:
          userRole === "other" ? <OtherCard />:""}
      </div>
    </>
  );
}
