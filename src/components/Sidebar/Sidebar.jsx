// Sidebar.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const sidebarLinks = [
    { name: "Dashboard" },
    { name: "StreakAnalytics" },
    { name: "BadgeAnalytics" },
    { name: "UserAnalytics" },
    { name: "PaymentDetails" },
    { name: "CreateProfile" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500);
      if (window.innerWidth <= 1500) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isMobile ? 'mobile' : ''}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        <div className="sidebar-header">
          <h2>Caset Exchange</h2>
        </div>
        {sidebarLinks.map((item, index) => {
          const isActive = pathname === `/${item.name.toLowerCase()}`;
          return (
            <SidebarLink
              key={index}
              name={item.name}
              isActive={pathname === "/" && item.name === "Dashboard" ? true : isActive}
              onClick={isMobile ? toggleSidebar : undefined}
            />
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;