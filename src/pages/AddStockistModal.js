// AddStockistModal.js

// AddStockistModal.js

import React,{useState} from 'react';
import Modal from 'react-modal';
import './AddStockistModal.css';
import axios from 'axios';


const AddStockistModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [gstNumber, setgstNumber] = useState('');
  const [email, setemail] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [newStockist, setNewStockist] = React.useState({
    name: name,
    gstNumber: gstNumber,
    email: email,
    contactNumber: contactNumber,
    BilledAmount:'0',
    PaidAmount:'0',
    Balance:'0'

  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewStockist(prevStockist => ({
      ...prevStockist,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/stockist', newStockist); // Replace with your API endpoint
      onSubmit(response.data); // Pass the response data to the onSubmit function
      setNewStockist({
        name: name,
        gstNumber: '',
        email: '',
        contactNumber: '',
        BilledAmount:'0',
    PaidAmount:'0',
    Balance:'0'
        
      });
    } catch (error) {
      console.error('Error adding stockist:', error);
    }
  };
  //  // onSubmit(newStockist);
  //   setNewStockist({
  //     name: '',
  //     gstNumber: '',
  //     email: '',
  //     contactNumber: '',
  //   });
  // };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Stockist"
      className="modal-container" // Apply the CSS class to the modal container
    >
      <div className="modal-header">Add Stockist</div>
      <form className="modal-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newStockist.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>GST Number:</label>
          <input
            type="text"
            name="gstNumber"
            value={newStockist.gstNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newStockist.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={newStockist.contactNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-header">
        
        <button className="modal-close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <form className="modal-form">
        {/* ... (rest of the form inputs) */}
        <div className="modal-buttons">
          <button
            type="button"
            className="add-button"
            onClick={handleSubmit}
          >
            Add Stockist
          </button>
        </div>
      </form>
      </form>
    </Modal>
  );
};

export default AddStockistModal;

