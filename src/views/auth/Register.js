import React, { useState } from "react";
import Other from "./rolesRegisterForms/Other";
import Director from "./rolesRegisterForms/Director";
import Player from "./rolesRegisterForms/Player";
import Team from "./rolesRegisterForms/Team";


export default function Register() {

  const [roleValue, setRoleValue] = useState("");

  const handleRoleChange = (e) => {
    e.preventDefault();
    setRoleValue(e.target.value);  
  };




  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-400 text-lg font-bold">
                    REGISTER
                  </h6><br/>
                  <h6 style={{color:"#007bff"}} className="text-xs font-bold">
                    Please choose your role, and fill all the required information according to your role.
                  </h6>
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form>
                  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Role <span style={{color:'red'}}>*</span>
                      </label>
                      <select
                        type="select"
                        onChange={handleRoleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                      >
                        <option disabled selected value="">Choose your role..</option>
                        <option value="director">Director</option>
                        <option value="team">Team</option>
                        <option value="player">Player</option>
                        <option value="other">Other</option>
                      </select>
                    </div><hr/><br/>
                    {/* Determine what the role is */}
                    {roleValue === "director"?
                      <Director />:
                      roleValue === "team"?
                    <Team />:
                    roleValue === "player"?
                      <Player />: roleValue === "other"?
                      <Other />:""
                    }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
