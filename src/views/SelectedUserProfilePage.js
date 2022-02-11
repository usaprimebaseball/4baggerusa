import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SelectedTeamCard from "components/Cards/SelectedUserProfileCards/SelectedTeamCard";
import SelectedPlayerCard from 'components/Cards/SelectedUserProfileCards/SelectedPlayerCard';
import SelectedDirectorCard from 'components/Cards/SelectedUserProfileCards/SelectedDirectorCard';
import SelectedOtherCard from 'components/Cards/SelectedUserProfileCards/SelectedOtherCard';

// components

export default function SelectedUserProfilePage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('selectedUser')));
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userRole, setUserRole] = useState("");
  const [userActivity, setUserActivity] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('selectedUser')));
    setUserRole(user.role)
    setUserActivity(user.active)
}, [location]);

const back = () => {
  history.push(`/account/admin/users`)
};
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">

            <h6 className="text-blueGray-700 text-xl font-bold">Account Info:</h6>
            <button
              className="btn-lg btn-secondary"
              type="button"
              onClick={back}
            >
              Back
            </button>
          </div>
          
        </div>
        {!userActivity ? <div className='col-12 alert alert-danger font-bold'>
              <i className="fas fa-exclamation-circle"></i> This account is NOT Active yet. to Activate, Click <span className='text-success'>ACTIVATE</span>  in the bottom.
            </div> : <div className='col-12 alert alert-success font-bold'>
              <i className="fas fa-exclamation-circle"></i> This account is ACTIVE. to deactivate, click <span className='text-danger'>DEACTIVATE</span> in the bottom.
            </div>
            }
          {userRole === "team" ? <SelectedTeamCard />: 
          userRole === "player" ? <SelectedPlayerCard />: 
          userRole === "director" ? <SelectedDirectorCard />: 
          userRole === "other" ? <SelectedOtherCard />:""}
      </div>
    </>
  );
}
