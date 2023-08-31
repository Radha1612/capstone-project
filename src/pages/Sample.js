import React, { useState } from 'react';
// import './Sample.css';
import { Button, Table, TableContainer, TableHead, TableBody, TableCell, TableFooter, TableRow, Paper } from '@mui/material';
import PaymentDetailsModal from './PaymentDetailsModal';
import * as XLSX from 'xlsx';


const Sample = ({ data }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  
  const handleExport = () => {
    const formattedData = data.map(row => ({
      'Invoice Numb': row['Invoice Numb'],
      Date: row.Date,
      Amount: row['Amount'],
      Paid: row['Paid'],
      'Billed Amount': row['Billed Amount'],
      Balance: row.Balance,
      Actions: row.Actions,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'StokistInvoices');
    XLSX.writeFile(wb, 'StokistInvoices.xlsx');
  };

  const handlePayClick = () => {
    setIsPaymentModalOpen(true);
  };

  const closeModal = () => {

    setIsPaymentModalOpen(false);
  };
  return (
    <div className="table-container">
      <h2 className="table-name">Stokist Invoices</h2>
      <div className="button-container">
        <Button variant="contained" className="export-button" onClick={handleExport}>
          Export
        </Button>
        <Button variant="contained" className="pay-button" onClick={handlePayClick}>
          Pay
        </Button>
      </div>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount Billed</TableCell>
              <TableCell>Paid Amount</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row['Invoice Numb']}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>{row['Amount Billed']}</TableCell>
                <TableCell>{row['Paid']}</TableCell>
                <TableCell>{row.Balance}</TableCell>
                <TableCell>{row.Actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          {/* You can add any additional footer content here */}
        </TableFooter>
      </TableContainer>
      <PaymentDetailsModal
        isOpen={isPaymentModalOpen}
        data={data}
        onRequestClose={closeModal}
      />
    </div>
  );
};


export default Sample;