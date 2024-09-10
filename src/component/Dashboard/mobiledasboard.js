import React, { useState } from 'react';
import '../Dashboard/mobile.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'; // Import TextField from MUI

function Mobiledasboard() {
  const [orders, setOrders] = useState([
    { id: 70443, date: '20/2/2567', customer: 'สมนึก ใจดี', status: 'รอการชำระ', color: 'orange' },
    { id: 39235, date: '26/2/2567', customer: 'สมหมาย ใจเย็น', status: 'ยกเลิกการชำระ', color: 'red' },
    { id: 13671, date: '10/2/2567', customer: 'สมบอย ดวงแข', status: 'ชำระสำเร็จ', color: 'green' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null); // วันที่เริ่มต้น
  const [endDate, setEndDate] = useState(null); // วันที่สิ้นสุด

  const filteredOrders = orders.filter(order =>
    order.customer.includes(searchTerm) ||
    order.id.toString().includes(searchTerm) ||
    (startDate && dayjs(order.date, 'D/M/YYYY').isSame(startDate, 'day')) ||
    (endDate && dayjs(order.date, 'D/M/YYYY').isSame(endDate, 'day'))
  );

  return (
    <div className="order-container">
      <header className="header">
        <h2>รายการใบสั่ง</h2>
        <button className="add-btn">เพิ่ม</button>
      </header>

      <div className="search-container">
  <input
    type="text"
    placeholder="ค้นหาชื่อผู้ใช้ หรือหมายเลขใบสั่ง"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {/* คอนเทนเนอร์ใหม่สำหรับจัดวาง DatePicker สองตัวในบรรทัดเดียวกัน */}
  <div className="datepickers-container">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="วันที่เริ่มต้น"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
        renderInput={(params) => (
          <TextField 
            {...params} 
            fullWidth 
            sx={{ marginTop: '10px' }} 
          />
        )}
      />
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="วันที่สิ้นสุด"
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
        renderInput={(params) => (
          <TextField 
            {...params} 
            fullWidth 
            sx={{ marginTop: '10px' }} 
          />
        )}
      />
    </LocalizationProvider>
  </div>
</div>

      <div className="order-list">
        {filteredOrders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <span>หมายเลขใบสั่ง: {order.id}</span>
              <span>วันที่ออกใบสั่ง: {order.date}</span>
            </div>
            <div className="order-customer">ผู้ขับขี่: {order.customer}</div>
            <div className="order-status">
              <span style={{ color: order.color }}>{order.status}</span>
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobiledasboard;
