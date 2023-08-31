import React, { useState, useEffect } from 'react';
import {TextField,Button,Table,TableBody,IconButton,TableCell,TableContainer,TableHead,TableRow,Paper,InputLabel,Radio,RadioGroup,FormControlLabel,Checkbox, Typography,} from '@mui/material';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel'
import './AddInvoice.css'; // Import your CSS file
import { Select, MenuItem } from '@mui/material';

const InvoiceForm = () => {
  const [stockistNames, setStockistNames] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [stockistName, setStockistName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [editRowIndex, setEditRowIndex] = useState(null);
  const calculateNetPrice = (rowData) => {
    // Calculate net price based on your logic using rowData and other fields
    const pricePerStrip = parseFloat(rowData.pricePerStrip);
    const discount = parseFloat(rowData.discount);
    const gstTotal = parseFloat(rowData.gstTotal);
    const numStrips = parseFloat(rowData.numStrips);
  
    // Calculate net price
    const totalPrice = pricePerStrip * numStrips;
    const discountAmount = (totalPrice * discount) / 100;
    const discountedPrice = totalPrice - discountAmount;
    const gstAmount = (discountedPrice * gstTotal) / 100;
    const netPrice = discountedPrice + gstAmount;
  
    return isNaN(netPrice) ? '' : netPrice.toFixed(2);
  };
  const calculateTotalPrice = (row) => {
    const netPrice = parseFloat(row.pricePerStrip); // Assuming pricePerStrip represents net price
    const numStrips = parseFloat(row.numStrips);
    const totalPrice = isNaN(netPrice) || isNaN(numStrips) ? '' : (netPrice * numStrips).toFixed(2);
    return totalPrice;
  };
  const [editedRow, setEditedRow] = useState({
    medicine: '',
    batch: '',
    batchExpiry: '',
    unitsPerStrip: '',
    numStrips: '',
    freeStrips: '',
    gstTotal: '',
    pricePerStrip: '',
    mrpPerStrip: '',
    discount: '',
    hsnCode: '',
    rackNo: '',
    boxNo: '',
   
  });

  const handleEditRow = (index) => {
    setEditRowIndex(index);
    setEditedRow(fetchedInvoices[index]);
  };

  const handleSaveEditRow = (index) => {
    const updatedRows = [...fetchedInvoices];
    updatedRows[index] = editedRow;
    setFetchedInvoices(updatedRows);
    setEditRowIndex(null);
    setEditedRow({
      medicine: '',
      batch: '',
      batchExpiry: '',
      unitsPerStrip: '',
      numStrips: '',
      freeStrips: '',
      gstTotal: '',
      pricePerStrip: '',
      mrpPerStrip: '',
      discount: '',
      hsnCode: '',
      rackNo: '',
      boxNo: '',
    });
  };

  const handleCancelEditRow = () => {
    setEditRowIndex(null);
    setEditedRow({
      medicine: '',
      batch: '',
      batchExpiry: '',
      unitsPerStrip: '',
      numStrips: '',
      freeStrips: '',
      gstTotal: '',
      pricePerStrip: '',
      mrpPerStrip: '',
      discount: '',
      hsnCode: '',
      rackNo: '',
      boxNo: '',
    });
  };
  const [newRowData, setNewRowData] = useState({
    medicine: '',
    batch: '',
    batchExpiry: '',
    unitsPerStrip: '',
    numStrips: '',
    freeStrips: '',
    gstTotal: '',
    pricePerStrip: '',
    mrpPerStrip: '',
    discount: '',
    hsnCode: '',
    rackNo: '',
    boxNo: '',
  });

  const handleAddRow = () => {
    setFetchedInvoices([...fetchedInvoices, newRowData]);
    setNewRowData({
      medicine: '',
      batch: '',
      batchExpiry: '',
      unitsPerStrip: '',
      numStrips: '',
      freeStrips: '',
      gstTotal: '', 
      pricePerStrip: '',
      mrpPerStrip: '',
      discount: '',
      hsnCode: '',
      rackNo: '',
      boxNo: '',
    });
    };

    const handleNewRowDataChange = (field, value) => {
      setNewRowData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

  const fetchStockistNames = async () => {
    try {
      // Replace this with your actual API call or data fetching logic
      const response = await fetch('http://localhost:8080/api/users/stockist');
      const data = await response.json();
      setStockistNames(data);
    } catch (error) {
      console.error('Error fetching stockist names:', error);
    }
  };

  useEffect(() => {
    fetchStockistNames();
  }, []);

  
//   // AddMedicine Functionality
  const handleAddMedicine = () => {
    // Logic to add medicine to the list
  };

  // const handleSaveInvoice = async() => {
  //   // Logic to save the invoice
   
  //   };
  
  const handleSaveInvoice = async () => {
    try {
      // Create an array to hold the medicine details for each row
      const medicines = fetchedInvoices.map((row) => ({
      
        medicine: row.medicine,
        batch: row.batch,
        batchExpiry: row.batchExpiry,
        unitsPerStrip: row.unitsPerStrip,
      numStrips: row.numStrips,
      freeStrips: row.freeStrips,
      gstTotal: row.gstTotal, 
      pricePerStrip: row.pricePerStrip,
      mrpPerStrip: row.mrpPerStrip,
      discount: row.discount,
      hsnCode: row.hsnCode,
      rackNo: row.rackNo,
      boxNo: row.boxNo,
 
        // Include other medicine properties here
      }));
      const invoiceData = {
        invoiceNumber,
        stockistName,
        invoiceDate,
        medicines,
        fetchedInvoices, // Include the array of medicine details
        remarks, // Include the remarks
        // Include other relevant properties from your form
      };
  
      // Send the invoiceData to the backend API for saving
      const response = await axios.post('http://localhost:8080/api/invoices/save', invoiceData);
  
      // Assuming you receive a response with a success message
      console.log('Invoice saved successfully:', response.data);
  
      // Clear the form fields or perform any necessary actions
      
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };
  

 const [fetchedInvoices, setFetchedInvoices] = useState([]);
  const [remarks, setRemarks] = useState('');
  const [discountType, setDiscountType] = useState('%');

  const handleDiscountTypeChange = (event) => {
    setDiscountType(event.target.value);
  };

  // Function to handle delete button click
  const handleDeleteRow = (index) => {
    const updatedRows = [...fetchedInvoices];
    updatedRows.splice(index, 1); 
    setFetchedInvoices(updatedRows);
  };
  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="invoice-container">
        <Typography style={{fontSize:30}}><b>Add Invoice</b></Typography>
      <div className="input-section">
        <TextField 
        size="small"
          label="Invoice Number"
          variant="standard"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        
        <Select
          style={{ fontSize: 16, minWidth: 200 }}
          variant="standard"
          value={stockistName}
          onChange={(e) => setStockistName(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Stockist Name' }}
        >
          <MenuItem value="" disabled>
            Stockist Name
          </MenuItem>
          {stockistNames.map((stockist) => (
            <MenuItem key={stockist.id} value={stockist.name}>
              {stockist.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
        
        size="small"
          label="Invoice Date"
          variant="standard"
          type="date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button onClick={handleAddMedicine} variant="contained" size="small">
          Add New Medicine
        </Button>
      </div>
      <div style={{ marginTop: '70px'}}>

<TableContainer component={Paper} elevation={2} style={{ width: '95%' }}>
  <Table style={{ borderCollapse: 'collapse' }}>
    <TableBody>
      <div>
    
        <TableCell>
          <InputLabel>Medicine</InputLabel>
          <TextField
            id="medicine"
            variant="outlined"
            size="small"
            fullWidth
            value={editRowIndex !== null ? editedRow.medicine : newRowData.medicine}
            onChange={(e) =>
              editRowIndex !== null
                ? setEditedRow({ ...editedRow, medicine: e.target.value })
                : handleNewRowDataChange('medicine', e.target.value)
            }
          />
        </TableCell>
        <TableCell>
          <InputLabel>Batch</InputLabel>
          <TextField
            id="batch"
            variant="outlined"
            size="small"
            fullWidth
            value={editRowIndex !== null ? editedRow.batch : newRowData.batch}
            onChange={(e) =>
              editRowIndex !== null
                ? setEditedRow({ ...editedRow, batch: e.target.value })
                : handleNewRowDataChange('batch', e.target.value)
            }
          />
        </TableCell>
        <TableCell>
          <InputLabel>Batch Expiry</InputLabel>
          <TextField
            type="date"
            id="batchExpiry"
            variant="outlined"
            size="small"
            fullWidth
            value={editRowIndex !== null ? editedRow.batchExpiry : newRowData.batchExpiry}
            onChange={(e) =>
              editRowIndex !== null
                ? setEditedRow({ ...editedRow, batchExpiry: e.target.value })
                : handleNewRowDataChange('batchExpiry', e.target.value)
            }
          />
        </TableCell>
        <TableCell>
  <InputLabel>Units/Strip</InputLabel>
  <TextField
    id="unitsPerStrip"
    variant="outlined"
    size="small"
    fullWidth
    value={
      editRowIndex !== null ? editedRow.unitsPerStrip : newRowData.unitsPerStrip
    }
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, unitsPerStrip: e.target.value })
        : handleNewRowDataChange('unitsPerStrip', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>Total Strips</InputLabel>
  <TextField
    id="numStrips"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.numStrips : newRowData.numStrips}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, numStrips: e.target.value })
        : handleNewRowDataChange('numStrips', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>Free Strips</InputLabel>
  <TextField
    id="freeStrips"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.freeStrips : newRowData.freeStrips}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, freeStrips: e.target.value })
        : handleNewRowDataChange('freeStrips', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>GST Total%</InputLabel>
  <Select
    labelId="gstTotalLabel"
    id="gstTotal"
    value={editRowIndex !== null ? editedRow.gstTotal : newRowData.gstTotal}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, gstTotal: e.target.value })
        : handleNewRowDataChange('gstTotal', e.target.value)
    }
    variant="outlined"
    size="small"
    fullWidth
  >
    <MenuItem value={5}>5%</MenuItem>
    <MenuItem value={12}>12%</MenuItem>
    <MenuItem value={18}>18%</MenuItem>
  </Select>
</TableCell>
<TableCell>
  <InputLabel>Price/Strip</InputLabel>
  <TextField
    id="pricePerStrip"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.pricePerStrip : newRowData.pricePerStrip}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, pricePerStrip: e.target.value })
        : handleNewRowDataChange('pricePerStrip', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>MRP/Strip</InputLabel>
  <TextField
    id="mrpPerStrip"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.mrpPerStrip : newRowData.mrpPerStrip}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, mrpPerStrip: e.target.value })
        : handleNewRowDataChange('mrpPerStrip', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>Discount%</InputLabel>
  <TextField
    id="discount"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.discount : newRowData.discount}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, discount: e.target.value })
        : handleNewRowDataChange('discount', e.target.value)
    }
  />
</TableCell>
</div>
<div>
<TableCell>
  <InputLabel>HSN Code</InputLabel>
  <TextField
    id="hsnCode"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.hsnCode : newRowData.hsnCode}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, hsnCode: e.target.value })
        : handleNewRowDataChange('hsnCode', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>Rack No</InputLabel>
  <TextField
    id="rackNo"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.rackNo : newRowData.rackNo}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, rackNo: e.target.value })
        : handleNewRowDataChange('rackNo', e.target.value)
    }
  />
</TableCell>
<TableCell>
  <InputLabel>Box No</InputLabel>
  <TextField
    id="boxNo"
    variant="outlined"
    size="small"
    fullWidth
    value={editRowIndex !== null ? editedRow.boxNo : newRowData.boxNo}
    onChange={(e) =>
      editRowIndex !== null
        ? setEditedRow({ ...editedRow, boxNo: e.target.value })
        : handleNewRowDataChange('boxNo', e.target.value)
    }
  />
</TableCell>

        <TableCell>
          <InputLabel>Net Price</InputLabel>
          <TextField
            id="netPrice"
            variant="outlined"
            size="small"
            readOnly
            fullWidth
            value={editRowIndex !== null ? calculateNetPrice(editedRow) : calculateNetPrice(newRowData)}
  />
          </TableCell>
        <TableCell>
          <Button
            onClick={editRowIndex !== null ? () => handleSaveEditRow(editRowIndex) : handleAddRow}
            variant="contained"
          >
            {editRowIndex !== null ? 'Save' : 'Add'}
          </Button>
          </TableCell>
          <TableCell>
          <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
        label="Add Tax On Free Strips"
      />
        </TableCell>
        
        </div>
    </TableBody>
  </Table>
</TableContainer>

      <>
     <div >
      <div style={{ marginTop: '70px'}}>
    <TableContainer component={Paper} elevation={2} style={{ width: '95%'}}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Table header cells */}
            <TableCell style={{ padding: '8px', border: '1px solid #e0e0e0', fontSize: '1rem' }}>Medicine</TableCell>

            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Batch</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Batch Expiry</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>GST</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>SGST</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>CGST</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Units per Strip</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Total Strips</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Price per Strip</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>MRP per Strip</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Discount</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>In Tax</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Total Price</TableCell>
            <TableCell style={{ padding: '8px',border: '1px solid #e0e0e0', fontSize: '1rem'}}>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Iterate through data to create table rows */}
          {fetchedInvoices.map((row, index) => (
            <TableRow key={index}>
              {/* Table cells for each data field */}
              <TableCell style={{ border: '1px solid #e0e0e0' }} >{row.medicine}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.batch}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.batchExpiry}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.gstTotal}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{(row.gstTotal / 2).toFixed(2)}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{(row.gstTotal / 2).toFixed(2)}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.unitsPerStrip}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.numStrips}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.pricePerStrip}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.mrpPerStrip}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.discount}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{row.inTax}</TableCell>
              <TableCell style={{ border: '1px solid #e0e0e0' }}>{calculateTotalPrice(row)}</TableCell>
              {/* Edit and Delete buttons */}
              <TableCell>
                {editRowIndex === index ? (
                      <>
                        <IconButton onClick={handleCancelEditRow}>
                          <CancelIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                      <IconButton onClick={() => handleEditRow(index)}>
                        <EditIcon />
                      </IconButton>
                
                <IconButton onClick={() => handleDeleteRow(index)}>
                  <DeleteIcon />
                </IconButton>
                </>
          )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
    <div  style={{ marginTop: '40px', marginLeft: '10px', width: '45%' }}>
    
    <InputLabel htmlFor="remarks" style={{ marginBottom: '8px' ,color:'black' }}>
         <b>Remarks</b> 
        </InputLabel>
        <TextField
          id="remarks"
          multiline
          fullWidth
          rows={5}          
          variant="outlined"
          value={remarks}
          onChange={handleRemarksChange}
        />
    
<TableContainer component={Paper} elevation={2} style={{marginTop:'-150px'  ,marginLeft:'600px', border:'1px solid black'}}>
      <Table >
        
        <TableBody >
          <TableRow >
          <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Total</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="total" variant="outlined"  size="small" fullWidth />
        </TableCell>
          </TableRow>
          <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Discount</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <RadioGroup
            row
            aria-label="discount-type"
            name="discount-type"
            value={discountType}
            onChange={handleDiscountTypeChange}
          >
            <FormControlLabel value="%" control={<Radio />} label="%" />
            <FormControlLabel value="Rs" control={<Radio />} label="Rs" />
          </RadioGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Total Discount</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="totalDiscount" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Total Tax (GST)</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="totalTax" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>CGST</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="cgst" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>SGST</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="sgst" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Gross Amount</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="grossAmount" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Round Off</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="roundOff" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Stocks Returned</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }}>
          <TextField id="stocksReturned" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black', borderRight: '1px solid black', fontSize: '1rem'}}>Purchase Amount</TableCell>
        <TableCell style={{ padding: '3px', borderBottom: '1px solid black' }} >
        <TextField id="purchaseAmount" variant="outlined" fullWidth size="small" />
        </TableCell>
      </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>
      <Button style={{ marginTop: '40px', marginRight: '50px'}} onClick={handleSaveInvoice} variant="contained" className="save-button">
        Save Invoice
      </Button>
    </div>
    </div>
  );
};

export default InvoiceForm;
