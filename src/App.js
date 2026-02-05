import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import InitiativeList from "./pages/InitiativeList";
import InitiativeDetail from "./pages/InitiativeDetail";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/initiatives" element={<InitiativeList />} />

        <Route path="/initiative/:id" element={<InitiativeDetail />} />

      </Routes>

    </Router>
  );
}


export default App;
