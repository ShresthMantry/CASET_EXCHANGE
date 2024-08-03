import React, { useState } from 'react';
import './Paymentdetails.css';

const PaymentDetails = () => {
  const initialTnxHistory = [
    { tnxID: 'Tnx00123', amount: 127.10, date: '2024-07-25', status: 'Credited' },
    { tnxID: 'Tnx00124', amount: 127.10, date: '2024-07-25', status: 'Pending' },
    { tnxID: 'Tnx00125', amount: 127.10, date: '2024-07-25', status: 'On Hold' },
    { tnxID: 'Tnx00126', amount: 127.10, date: '2024-07-25', status: 'Pending' },
    { tnxID: 'Tnx00127', amount: 127.10, date: '2024-07-25', status: 'On Hold' },
    { tnxID: 'Tnx00128', amount: 127.10, date: '2024-07-25', status: 'On Hold' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Pending');
  const [dateFilter, setDateFilter] = useState({ start: '', end: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => setStatusFilter(e.target.value);
  const handleDateChange = (e) => setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });

  const filteredTnxHistory = initialTnxHistory
    .filter((tnx) =>
      tnx.tnxID.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((tnx) => statusFilter === 'Pending' ? true : tnx.status === statusFilter)
    .filter((tnx) => {
      const tnxDate = new Date(tnx.date);
      const startDate = dateFilter.start ? new Date(dateFilter.start) : null;
      const endDate = dateFilter.end ? new Date(dateFilter.end) : null;
      return (!startDate || tnxDate >= startDate) && (!endDate || tnxDate <= endDate);
    });

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTnxHistory.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="payment-details">
      <div className="header">
        <div className="stat-box">
          <h2>Monthly Revenue</h2>
          <p>2,345</p>
          <span>+16.4% from last week</span>
        </div>
        <div className="stat-box">
          <h2>Amount Initiated</h2>
          <p>2,345</p>
          <span>+16.4% from last week</span>
        </div>
        <div className="stat-box">
          <h2>Amount Pending</h2>
          <p>2,345</p>
          <span>+16.4% from last week</span>
        </div>
        <div className="stat-box">
          <h2>Amount Settled</h2>
          <p>2,345</p>
          <span>+16.4% from last week</span>
        </div>
      </div>
      
      <h1>Transaction Statistics</h1>
      <section>
        <div className="filters">
          <div className="filter-group">
            <input
              type="text"
              id="search"
              placeholder="Search by ID"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-group">
            <select id="status" value={statusFilter} onChange={handleFilterChange}>
              <option value="Pending">Pending</option>
              <option value="Credited">Credited</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
          <div className="filter-group">
            <input
              type="date"
              id="startDate"
              name="start"
              placeholder="Start Date"
              value={dateFilter.start}
              onChange={handleDateChange}
            />
          </div>
          <div className="filter-group">
            <input
              type="date"
              id="endDate"
              name="end"
              placeholder="End Date"
              value={dateFilter.end}
              onChange={handleDateChange}
            />
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
            {currentTransactions.map((tnx, index) => (
              <tr key={index}>
                <td>{tnx.tnxID}</td>
                <td>${tnx.amount}</td>
                <td>{tnx.date}</td>
                <td className={tnx.status.replace(' ', '-').toLowerCase()}>{tnx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {[...Array(Math.ceil(filteredTnxHistory.length / transactionsPerPage)).keys()].map(number => (
            <button key={number + 1} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaymentDetails;
