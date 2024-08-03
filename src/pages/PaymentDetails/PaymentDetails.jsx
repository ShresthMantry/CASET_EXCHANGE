// src/PaymentDetails.js
import React, { useState } from 'react';
import './Paymentdetails.css';

const PaymentDetails = () => {
  const initialTnxHistory = [
    { tnxID: 'TXN12345', amount: 150, date: '2024-07-25', status: 'Completed' },
    { tnxID: 'TXN12346', amount: 200, date: '2024-07-20', status: 'Completed' },
    { tnxID: 'TXN12347', amount: 300, date: '2024-08-01', status: 'Pending' },
    { tnxID: 'TXN12348', amount: 400, date: '2024-07-29', status: 'Pending' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState({ start: '', end: '' });
  const [amountFilter, setAmountFilter] = useState({ min: '', max: '' });

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => setStatusFilter(e.target.value);
  const handleDateChange = (e) => setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  const handleAmountChange = (e) => setAmountFilter({ ...amountFilter, [e.target.name]: e.target.value });

  const filteredTnxHistory = initialTnxHistory
    .filter((tnx) =>
      tnx.tnxID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tnx.amount.toString().includes(searchTerm) ||
      tnx.date.includes(searchTerm) ||
      tnx.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((tnx) => statusFilter === 'All' ? true : tnx.status === statusFilter)
    .filter((tnx) => {
      const tnxDate = new Date(tnx.date);
      const startDate = dateFilter.start ? new Date(dateFilter.start) : null;
      const endDate = dateFilter.end ? new Date(dateFilter.end) : null;
      return (!startDate || tnxDate >= startDate) && (!endDate || tnxDate <= endDate);
    })
    .filter((tnx) => {
      const minAmount = parseFloat(amountFilter.min) || 0;
      const maxAmount = parseFloat(amountFilter.max) || Infinity;
      return tnx.amount >= minAmount && tnx.amount <= maxAmount;
    });

  return (
    <div className="payment-details">
      <h1>Payment Details</h1>
      
      <section>
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search by ID, amount, date..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-group">
            <label htmlFor="status">Status</label>
            <select id="status" value={statusFilter} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="start"
              value={dateFilter.start}
              onChange={handleDateChange}
            />
          </div>
          <div className="filter-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="end"
              value={dateFilter.end}
              onChange={handleDateChange}
            />
          </div>
          <div className="amount-filter-group">
            <label>Amount Range</label>
            <div className="amount-inputs">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={amountFilter.min}
                onChange={handleAmountChange}
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={amountFilter.max}
                onChange={handleAmountChange}
              />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTnxHistory.map((tnx, index) => (
              <tr key={index}>
                <td>{tnx.tnxID}</td>
                <td>${tnx.amount}</td>
                <td>{tnx.date}</td>
                <td>{tnx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaymentDetails;
