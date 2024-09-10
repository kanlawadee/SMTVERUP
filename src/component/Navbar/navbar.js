import React, { useState } from 'react';
import { FaBars, FaSignOutAlt } from 'react-icons/fa'; // For hamburger and logout icon
import './nav.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="top-navbar">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h2 className='nav-name'>ชื่อเจ้าหน้าที่จราจร</h2>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeSidebar}>รายการใบสั่ง</li>
          <li className="logout" onClick={closeSidebar}>
            <FaSignOutAlt /> ออกจากระบบ
          </li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
