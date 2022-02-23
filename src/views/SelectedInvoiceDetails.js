import React from 'react';
import { useHistory } from 'react-router-dom';
import InvoiceCard from 'components/Cards/InvoiceCard';

// components

export default function SelectedInvoiceDetails() {
  const invoice = JSON.parse(localStorage.getItem('invoice'));
  const history = useHistory();

  const back = () => {
      history.push(`/account/admin/invoices`)
    }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <button
              className="btn-lg btn-warning mb-1"
              type="button"
              onClick={back}
              >
              Back
          </button>
          <InvoiceCard subTitle = "" invoice = {invoice}/>
        </div>
      </div>
    </>
  );
}
