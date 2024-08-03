import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/Dashboard/DashBoard";
import BadgeAnalytics from "./pages/BadgeAnalytics/BadgeAnalytics";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import UserAnalytics from "./pages/UserAnalytics.jsx/UserAnalytics";
import StreakAnalytics from "./pages/StreakAnalytics/StreakAnalytics";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridTemplateColumns = windowWidth <= 1500 ? "0.01fr 5fr" : "1fr 5fr";

  return (
    <Router>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridTemplateColumns,
        }}
      >
        <div>
          <Sidebar />
        </div>
        <div style={{
          display:"flex",
          flexDirection:"column"
        }}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/badgeanalytics" element={<BadgeAnalytics />} />
            <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/paymentdetails" element={<PaymentDetails />} />
            <Route path="/useranalytics" element={<UserAnalytics />} />
            <Route path="/streakanalytics" element={<StreakAnalytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;