import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={`navbar ${sidebar ? 'active' : ''}`}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <nav className='nav-menu'>
            <ul className='nav-menu-items' >
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className='nav-link'>
                      {sidebar ? (
                        <div className='nav-text'>
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                      ) : (
                        item.icon
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
      <div className='top-navbar'>
        <div className='top-navbar-menu'>
          <div className='top-navbar-items'>
          <div className='dropdown'>
              <button className='dropbtn'>Invoice</button>
              <div className='dropdown-content'>
                <Link to='/StockistList' className='dropdown-link'>
                  Stockist
                </Link>
                <Link to='/sample' className='dropdown-link'>
                  Invoice Stock
                </Link>
                <Link to='/addInvoice' className='dropdown-link'>
                  Add Invoice
                </Link>
                <Link to='/stock-returns' className='dropdown-link'>
                  Stock Returns
                </Link>
                <Link to='/stock-returns-list' className='dropdown-link'>
                  Stock Returns List
                </Link>
              </div>
            </div>
            <Link to='/inventory' className='top-nav-link'>
              Inventory
            </Link>
            <Link to='/billing' className='top-nav-link'>
              Billing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
