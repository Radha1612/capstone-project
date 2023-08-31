import React, { useState, useEffect } from 'react';
import './StockistList.css';
import ExcelJS from 'exceljs';
import AddStockistModal from './AddStockistModal';
import{ TextField, Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper }from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
const StockistList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStockists, setFilteredStockists] = useState([]);
  const [stockists, setStockists] = useState([

  ]);
  useEffect(() => {
    // Fetch stockist data from the backend
    async function fetchStockists() {
      try {
        const response = await axios.get('http://localhost:8080/api/users/stockist');
        const stockistData = response.data.map(stockist => ({
          ...stockist,
          billedAmount: '0',
          paidAmount: '0',
          balance: '0',
        }));
        setStockists(stockistData);
        fetchStockists();
      } catch (error) {
        console.error('Error fetching stockists:', error);
      }
    }

    fetchStockists();
  }, []);
;


//delete functionality
const handleDeleteStockist = async (id) => {
  try {
    // Send a delete request to the backend
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    
    // Remove the stockist from the list
    const response = await axios.get('http://localhost:8080/api/users/stockist');
      setStockists(response.data);
  } catch (error) {
    console.error('Error deleting stockist:', error);
  }
};



  const [newStockist, setNewStockist] = useState({
    name: ' ',
    gstNumber: '',
    email: '',
    createdDate: '',
    billedAmount: '',
    paidAmount: '',
    balance: '',
  });


  //search functionality
  const handleSearch = () => {
    const filtered = stockists.filter((stockist) => {
      return (
        stockist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stockist.gstNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stockist.email.toLowerCase().includes(searchQuery.toLowerCase())
        // Add more fields as needed for your search
      );
    });
    setFilteredStockists(filtered);
  };

  //dowloading in excel functionality
  
  const handleDownloadExcel = async () => {
    try {
      // Function to convert stockists data to Excel format
      const data = stockists.map((stockist) => ({
        Name: stockist.name,
        'GST Number': stockist.gstNumber,
        Email: stockist.email,
        'Created Date': stockist.createdDate,
        'Billed Amount': stockist.billedAmount,
        'Paid Amount': stockist.paidAmount,
        Balance: stockist.balance,
      }));
  
      // Create a new workbook
      const workbook = new ExcelJS.Workbook();
  
      // Add a worksheet to the workbook
      const worksheet = workbook.addWorksheet('Stockists');
  
      // Define the columns and their headers
      worksheet.columns = [
        { header: 'Name', key: 'Name', width: 15 },
        { header: 'GST Number', key: 'GST Number', width: 15 },
        { header: 'Email', key: 'Email', width: 30 },
        { header: 'Created Date', key: 'Created Date', width: 15 },
        { header: 'Billed Amount', key: 'Billed Amount', width: 15 },
        { header: 'Paid Amount', key: 'Paid Amount', width: 15 },
        { header: 'Balance', key: 'Balance', width: 15 },
      ];
  
      // Populate the data rows
      data.forEach((stockist) => {
        worksheet.addRow(stockist);
      });
  
      // Generate the buffer containing the Excel data
      const excelBuffer = await workbook.xlsx.writeBuffer();
  
      // Create a Blob from the Excel buffer
      const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
  
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
  
      // Create a link and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'stockists_data.xlsx';
      link.click();
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };
  
  //Add stockist

  const handleAddStockist = () => {
    setStockists(prevStockists => [...prevStockists, newStockist]);
    setNewStockist({
      name: '',
      gstNumber: '',
      email: '',
      createdDate: '',
      billedAmount: ' ',
      paidAmount: '',
      balance: ' ',
    });
  };
  
  return (
    <div className="stockist-list-content" >
      <h2>Export Stockist</h2>
      <form>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextField label="From date" variant="outlined" InputLabelProps={{ shrink: true }} type="date" />
          <TextField label="To date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
          <TextField label="List of Stockist" variant="outlined" />
          <Button variant="contained" onClick={handleDownloadExcel}>
            Export
          </Button>
        </div>
      </form>
      <form className="search-add-form">
        <div className="search">
          <TextField
            type="text"
            placeholder="Search"
            name="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
          className="add-button"
        >
          Add Stockist
        </Button>
        <AddStockistModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={handleAddStockist}
        />
      </form>
      <TableContainer component={Paper} style={{ marginTop: '40px'}}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>GST Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Billed Amount</TableCell>
              <TableCell>Paid Amount</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchQuery ? (
              filteredStockists.length > 0 ? (
                filteredStockists.map((stockist) => (
                  <TableRow key={stockist.id}>
                    <TableCell>{stockist.name}</TableCell>
                    <TableCell>{stockist.gstNumber}</TableCell>
                    <TableCell>{stockist.email}</TableCell>
                    <TableCell>{stockist.createdDate}</TableCell>
                    <TableCell>{stockist.billedAmount}</TableCell>
                    <TableCell>{stockist.paidAmount}</TableCell>
                    <TableCell>{stockist.balance}</TableCell>
                    <TableCell>
                      <Link to={`/update/${stockist.id}`}>
                        <Button>Edit</Button>
                      </Link>
                      <Button onClick={() => handleDeleteStockist(stockist.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8}>No Results Found</TableCell>
                </TableRow>
              )
            ) : (
              stockists.map((stockist) => (
                <TableRow key={stockist.id}>
                  <TableCell>
                  <Link to={`/sample/${stockist.id}`}>{stockist.name}</Link>
                </TableCell>
                  <TableCell>{stockist.gstNumber}</TableCell>
                  <TableCell>{stockist.email}</TableCell>
                  <TableCell>{stockist.createdDate}</TableCell>
                  <TableCell>{stockist.billedAmount}</TableCell>
                  <TableCell>{stockist.paidAmount}</TableCell>
                  <TableCell>{stockist.balance}</TableCell>
                  <TableCell>
                    <Link to={`/update/${stockist.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button onClick={() => handleDeleteStockist(stockist.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockistList;