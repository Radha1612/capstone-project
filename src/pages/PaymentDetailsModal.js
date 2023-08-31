import React from 'react';
import Modal from 'react-modal';
import './Sample.css';
Modal.setAppElement('#root');

const PaymentDetailsModal = ({ isOpen, data, onRequestClose }) => {
  return (
<Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Payment Details"
        className="payment-modal"
        overlayClassName="overlay"
      >
        <div className="payment-details-container">
          <h2 className="table-name">Invoice Payment details</h2>
          <table className="payment-details-table">
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Date</th>
                <th>Amount Billed</th>
                <th>Paid Amount</th>
                <th>Balance</th>
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
              
            </tr>
          ))}
            </tbody>
          </table>
          <div className="payment-fields"><div className="total-amount">
              Total Amount:
            </div>
            <div className="paying-amount">
              Paying Amount: <input type="text" />
            </div>
            <div className="payment-mode">
              Payment Mode:
              <select>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
            <div className="reference">
              Reference: <input type="text" />
            </div>
            <div className="pay-button1">
              <button>Pay amount</button>
            </div>
          </div>
          <button className="close-modal-button" onClick={onRequestClose}>
            Close
          </button>
        </div>
      </Modal>
      );
    };
    
    export default PaymentDetailsModal;