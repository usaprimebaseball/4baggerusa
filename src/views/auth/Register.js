import React, { useState } from "react";
import Other from "./rolesRegisterForms/Other";
import Director from "./rolesRegisterForms/Director";
import Player from "./rolesRegisterForms/Player";
import Team from "./rolesRegisterForms/Team";
import { Link } from "react-router-dom";

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
                  <h1 className="text-blue text-xl font-bold" style={{color:'#0EA5E9'}}>
                    REGISTER
                  </h1><br/>
                  <h6 className="text-dark text-sm font-bold">
                    Please choose your role, and fill all the required information <br/>according to your role.
                  </h6>
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form>
                  <div className="relative w-full mb-3">
                      <label
                        className="uppercase text-info font-bold"
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
                        <option defaultValue={true} value="">-- CHOOSE YOUR ROLE --</option>
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
                    <div className="text-center mt-6">
                        <Link
                            to="/auth/login"
                            className="text-info hover:text-blueGray-800 font-semibold block pb-2 font-bold text-sm"

                        >
                        Already have an account ? Click here to log in
                        </Link>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
