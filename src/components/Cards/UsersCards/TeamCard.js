
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FileBase from 'react-file-base64';
import Form from "utilities/Forms";
import states from 'json/states';
import decode from 'jwt-decode';
import { updateteam } from 'actions/user';
import { useDispatch } from 'react-redux';
// components
  
const initialState = {
    active: false, role: "team", profileImage: "", teamName: "", firstName: "", lastName: "", email: "", phoneNumber: "", city: "", state: "", ageGroup: "", 
    division: ""
};

const TeamCard = () => {
    const [accountData, setAccountData] = useState(initialState);
    const [validate, setValidate] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isUpdated, setIsUpdated] = useState(false);
    const location = useLocation();
    const [id, setId] = useState({});

    const dispatch = useDispatch();
    // const history = useHistory();

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            profileImage: {
                value: accountData.profileImage,
                isRequired: true,
            },
            teamName: {
                value: accountData.teamName,
                isRequired: true,
            },
            firstName: {
                value: accountData.firstName,
                isRequired: true,
            },
            lastName: {
                value: accountData.lastName,
                isRequired: true,
            },
            email: {
                value: accountData.email,
                isRequired: true,
                isEmail: true,
            },
            phoneNumber: {
                value: accountData.phoneNumber,
                isRequired: true,
                type: Number,
                minLength: 10
            },
            city: {
                value: accountData.city,
                isRequired: true,
            },
            state: {
                value: accountData.state,
                isRequired: true,
            },
            ageGroup: {
                value: accountData.ageGroup,
                isRequired: true,
            },
            division: {
                value: accountData.division,
                isRequired: true,
            }
        });

        // Make sure our MUSt match fields are matching 


        if (validator !== null) {
            setValidate({
            validate: validator.errors,
            });

            isValid = false;
        }
        return isValid;
    };

    const update = (e) => {
        e.preventDefault();
        
        console.log(accountData);

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setAccountData({...accountData, profileImage: ""});
            setAccountData({...accountData, firstName: ""});
            setAccountData({...accountData, lastName: ""});
            setAccountData({...accountData, email: ""});
            setAccountData({...accountData, phoneNumber: ""});
            setAccountData({...accountData, teamName: ""});
            setAccountData({...accountData, city: ""});
            setAccountData({...accountData, state: ""});
            setAccountData({...accountData, ageGroup: ""});
            setAccountData({...accountData, division: ""});
            dispatch(updateteam(id, accountData));
            setIsUpdated(true);
        }
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime());
        }

        setUser(JSON.parse(localStorage.getItem('profile')));

        setAccountData(user.result)

        setId(user.result._id);

    }, [location]);

    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          {isUpdated?
              <div class="alert mt-1 uppercase alert-success" role="alert">
                  <h2><span className='text-success font-bold'>SUCCESS</span>: Updated Successfully!</h2>
              </div>:""}
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Upload Your Image
            </h6>
          <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <FileBase
                    type="file"
                    className={`form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        validate.validate && validate.validate.profileImage
                        ? "is-invalid "
                        : ""
                    }`}
                    defaultValue={user.result.profileImage}
                    onDone={({base64}) => setAccountData({...accountData, profileImage: base64})}
                    multiple={false}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <div
                className={`invalid-feedback text-start ${
                    validate.validate && validate.validate.profileImage
                    ? "d-block"
                    : "d-none"
                }`}
                >
                {validate.validate && validate.validate.profileImage
                    ? validate.validate.profileImage[0]
                    : ""}
                </div>
                </div>
              </div>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Account Information
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Team Name
                    </label>
                    <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.teamName}
                    onChange={(e) => setAccountData({...accountData, teamName: e.target.value})}                    
                    />
                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.teamName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.teamName
                        ? validate.validate.teamName[0]
                        : ""}
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Head Coach Email Address
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue={user.result.email}
                            onChange={(e) =>setAccountData({...accountData, email: e.target.value})}
                        />
                        <div
                            className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.email
                                ? "d-block"
                                : "d-none"
                            }`}
                        >
                            {validate.validate && validate.validate.email
                            ? validate.validate.email[0]
                            : ""}
                        </div>
                    </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach Phone Number
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.phoneNumber}
                    onChange={(e) =>setAccountData({...accountData, phoneNumber: e.target.value})}
                  />
                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.phoneNumber
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.phoneNumber
                      ? validate.validate.phoneNumber[0]
                      : ""}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.firstName}
                    onChange={(e) => setAccountData({...accountData, firstName: e.target.value})}
                  />
                  <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.firstName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.firstName
                        ? validate.validate.firstName[0]
                        : ""}
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Head Coach Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.lastName}
                    onChange={(e) => setAccountData({...accountData, lastName: e.target.value})}
                  />
                  <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.lastName
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.lastName
                        ? validate.validate.lastName[0]
                        : ""}
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Age Group
                  </label>
                  <select
                        type="select"
                        defaultValue={user.result.ageGroup}
                        onChange={(e) => setAccountData({...accountData, ageGroup: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                        <option value="5u">5U</option>
                        <option value="6u">6U</option>
                        <option value="7u">7U</option>
                        <option value="8u">8U</option>
                        <option value="9u">9U</option>
                        <option value="10u">10U</option>
                        <option value="11u">11U</option>
                        <option value="12u">12U</option>
                        <option value="13u">13U</option>
                        <option value="14u">14U</option>
                        <option value="15u">15U</option>
                        <option value="16u">16U</option>
                        <option value="175u">17U</option>
                        <option value="18u">18U</option>
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.ageGroup
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.ageGroup
                            ? validate.validate.ageGroup[0]
                            : ""}
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Division
                    </label>
                    <select
                        type="select"
                        onChange={(e) => setAccountData({...accountData, division: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"   
                        defaultValue={user.result.division}
                        >
                        <option value="aa">AA</option>
                        <option value="aaa">AAA</option>
                        <option value="majors">Majors</option>
                        <option value="showcase">Showcase</option>
                        <option value="highSchool">High School</option>
                     </select>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Address Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.result.city}
                    placeholder="City"
                    onChange={(e) => setAccountData({...accountData, city: e.target.value})}
                    />

                    <div
                    className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.city
                        ? "d-block"
                        : "d-none"
                    }`}
                    >
                    {validate.validate && validate.validate.city
                        ? validate.validate.city[0]
                        : ""}
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <select
                        type="select"
                        defaultValue={user.result.state}
                        onChange={(e) => setAccountData({...accountData, state: e.target.value})}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                        <option defaultValue={true} value="">-- State --</option>
                        { states.map((state) => <option key={state.abbreviation}>{state.name}</option> )}
                    </select>
                    <div
                        className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.state
                            ? "d-block"
                            : "d-none"
                        }`}
                        >
                        {validate.validate && validate.validate.state
                            ? validate.validate.state[0]
                            : ""}
                    </div>
                </div>
              </div>
              <hr/>
              <button
              className="mt-10 col-12 btn-lg btn-success"
              type="button"
              onClick={update}
            >
              Save Updates
            </button>

            </div>
          </form>
        </div>
    )
}

export default TeamCard;