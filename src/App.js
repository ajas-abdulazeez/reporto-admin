import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ReportsPage from "./pages/ReportsPage";


const App = () => {
  
  const [activePath, setActivePath] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot" element={<ForgetPasswordPage />} /> */}
    
        <Route path="/" element={<MainLayout activePath={activePath} />} >
            <Route index element={<DashboardPage setActivePath={setActivePath} />} />
            <Route path="/reports" element={<ReportsPage setActivePath={setActivePath} />} />
            {/* <Route path="/inventory" element={<InventoryPage setActivePath={setActivePath} />} /> */}
        </Route>

        <Route path="*" element={<p><h1>404!</h1></p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;