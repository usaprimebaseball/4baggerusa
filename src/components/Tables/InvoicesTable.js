import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { getinvoices } from "actions/invoice";
import PropTypes from "prop-types";
import { getinvoice } from "actions/invoice";

// components
export default function InvoicesTable({ color }) {
  const dispatch = useDispatch();
  window.scroll(0, 0);
  const invoices = useSelector((state) => state.invoices);
  const location = useLocation();
  const history = useHistory();

  const handleClick = (invoice) => {
    dispatch(getinvoice(invoice._id, history));
  };

  useEffect(() => {    
    dispatch(getinvoices());
}, [location]);

  return (
    <>
      <div
        style={{marginBottom: invoices?.length === 0 ?"122px":"0"}}
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Invoices List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center col-12 bg-transparent border-collapse ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Full Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Created At
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Tournament Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email Address
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
              {invoices ? invoices.map((invoice) => (
                 <tbody key={invoice._id}> 
                <tr>
                  <th>
                    <button type="button" onClick={() => handleClick(invoice)} className="btn-outline-info border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <Avatar className="bg-danger font-bold">{invoice?.firstName.charAt(0)}</Avatar>
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                            { invoice.firstName + " " + invoice.lastName }

                        </span>
                      </button>
                  </th>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {invoice.createdAt.slice(0, 10)}
                  </td>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {invoice.tournamentName}
                  </td>
                  <td className="uppercase border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {invoice.email}
                  </td>
                  <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                    <button  onClick={() => handleClick(invoice)} className="btn btn-primary" variant="contained">
                      View Invoice Details
                    </button>
                  </td>
                </tr>
                
              </tbody> 
              )):""}
          </table>
        </div>
      </div>
    </>
  );
}

InvoicesTable.defaultProps = {
  color: "light",
};

InvoicesTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

