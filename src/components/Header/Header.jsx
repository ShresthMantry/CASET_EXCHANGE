// import React from "react";
// import "./Header.css";
// import { FaSearch, FaUserCircle } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="logo">
//           {/* <img src="path_to_logo" alt="Finance Logo" /> */}
//           <span className="logo-font">Welcome, Shresth!</span>
//         </div>
//       </div>
//       <div className="navbar-right">
//         <div className="search-bar">
//           <input type="text" placeholder="Search your items" />
//           <FaSearch className="search-icon" />
//         </div>
//         <div className="user-profile">
//           <FaUserCircle size={40} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './Header.css'; // Make sure to import the CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          {/* <img src="path_to_logo" alt="Finance Logo" /> */}
          {/* <span className="logo-font">Welcome, Shresth!</span>/ */}
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search your items" />
          <FaSearch className="search-icon" />
        </div>
        <div className="user-profile">
          <FaUserCircle size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Header;