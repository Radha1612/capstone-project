import React from 'react';
import * as XLSX from 'xlsx';
import './Sample.css';
import Modal from 'react-modal';
//import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

Modal.setAppElement('#root');
const ExportPreviewModal = ({ isOpen, data, onRequestClose }) => {

  const handleExport = () => {
      const formattedData = data.map(row => ({
        'Invoice Numb': row['Invoice Numb'],
        Date: row.Date,
        Amount: ['Amount'] || row['Amount'],
        Paid: ['Paid'] || row['Paid'],
        'Billed Amount': row['Billed Amount'],
        Balance: row.Balance,
        Actions: row.Actions,
      }));
  
      const ws = XLSX.utils.json_to_sheet(formattedData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'StokistInvoices');
      XLSX.writeFile(wb, 'StokistInvoices.xlsx');
    };

    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.autoTable({
        head: [['Amount', 'Paid', 'Invoice Number', 'Date', 'Billed Amount', 'Balance', 'Actions']],
        body: data.map(row => [row['Amount'], row['Paid'], row['Invoice Numb'], row.Date, row['Billed Amount'], row.Balance, row.Actions]),
      });
      doc.save('StokistInvoices.pdf');
    };
  
  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Export Preview"
      className="export-preview-modal"
      overlayClassName="overlay"
    >
      <div className="export-preview-container">
        <h2 className="modal-title">Export Preview</h2>
        <table className="export-preview-table">
          <thead>
          <tr>
                <th>Invoice Number</th>
                <th>Date</th>
                <th>Amount Billed</th>
                <th>Paid Amount</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
          </thead>
          <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row['Invoice Numb']}</td>
              <td>{row.Date}</td>
              <td>{row['Amount Billed']}</td>
              <td>{row['Paid']}</td>
              <td>{row.Balance}</td>
              <td>{row.Actions}</td>              
            </tr>
          ))}
          </tbody>
        </table>
        <button className="close-modal-button" onClick={onRequestClose}>
          Close
        </button>
      </div>
      <div className="button-container">
        <button className="export-button" onClick={handleExport}>
        <FaDownload className="icon" /> Download Excel
        </button>
        <button className="download-button" onClick={handleDownloadPDF}>
        <FaFilePdf className="icon" /> Download PDF
          </button>
        </div>
      
    </Modal>
  );
};

export default ExportPreviewModal;