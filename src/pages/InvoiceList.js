// src/components/InvoiceList.js
import React from 'react';

const InvoiceList = ({ stockistId }) => {
  // Fetch invoices based on stockistId (you would fetch this from an API)
  const invoices = [
    {
      
    },
    // Add more invoices...
  ];

  return (
    <div>
      <h3>Invoices for Stockist {stockistId}</h3>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            Date: {invoice.date} | Amount: {invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
