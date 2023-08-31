import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Pharmacy from './pages/Pharmacy';
import Lab from './pages/Lab';
import Training from './pages/Training';
import Robin from './pages/Robin';
import FrontDesk from './pages/Front-Desk';
import { RegsisterPatient } from './pages/FrontDesk/RegsisterPatient';
import StockistList from './pages/StockistList';
import AddInvoice from './pages/AddInvoice';
import Sample from './pages/Sample';
import EditInvoice from './pages/EditInvoice';
const invoiceData = [{Export: ' ', Pay: ' ', Amount: ' ', Paid: ' ', 'Invoice Numb': ' ', Date: ' ', 'Billed Amount': ' ', Balance: ' ', Actions: ' ', },];
function App() {
  return (
    
    <>
       
      <Router>
      <Navbar />
      
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/StockistList' element={<StockistList />} />
          <Route path='/sample/:id' element={<Sample data={invoiceData} />} />
          <Route path ='/regPatient' element={<RegsisterPatient />}/>
          {/* <Route path='/Returns' element={<Returns/>} /> */}
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/pharmacy' element={<Pharmacy/>} />
          <Route path='/lab' element={<Lab/>} />
          <Route path='/Training' element={<Training/>}/>
         <Route path='/robin' element={<Robin/>} />
         <Route path='/front-desk' element={<FrontDesk/>} />
         <Route path='/addInvoice' element={<AddInvoice/>}/>
         <Route path='/editInvoice/:id' element={<EditInvoice/>}/>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
