import React, { useState, useEffect } from 'react';
import { TextField, Button,Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import useParams hook to get the id parameter


const Update = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [stockist, setStockist] = useState({
    medicine: '',
    batch: '',
    batchExpiry: '',
    gst: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch the existing stockist data from the backend API when the component mounts
    const fetchStockist = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/invoices/${id}`);
        setStockist(response.data);
      } catch (error) {
        console.error('Error fetching stockist data:', error);
      }
    };

    fetchStockist();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStockist((prevStockist) => ({
      ...prevStockist,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/invoices/${id}`, stockist);
      alert('Stockist data updated successfully!');
    } catch (error) {
      console.error('Error updating stockist data:', error);
      alert('Error updating stockist data. Please try again later.');
    }
  };

  return (
    <Box maxWidth="sm" sx={{ marginTop: 4 }} component={Paper} elevation={2} style={{ width: '95%', marginLeft:'600px'}}>
      <Typography variant="h4" align="center" gutterBottom marginTop={6}>
        Edit Invoice
      </Typography>
      
      <form>
        <div>
        <TextField
          name="medicine"
          label="Medicine"
          fullWidth
          value={stockist.medicine}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: '70%',color:'1px solid black' }}  
        />
        <TextField
          name="batch"
          label="Batch"
          fullWidth
          value={stockist.batch}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: '70%',color:'1px solid black' }}  
        />
        </div>
        <TextField
          name="batchExpiry"
          label="Batch Expiry"
         fullWidth
         type='date'
          value={stockist.batchExpiry}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: '70%',color:'1px solid black' }}  
        />
       <TextField
          name="gst"
          label="GST"
          fullWidth
          value={stockist.gst}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: '70%',color:'1px solid black' }}  
        />
        <Link to="/addInvoice">
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update Stockist
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default Update;