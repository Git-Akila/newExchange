import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../src/Navbar/Layout'; // Import the Layout component
import Login from '../src/Pages/Login/Login';
import Dashboard from '../src/Pages/Dashboard';

const App = () => {
  const token = localStorage.getItem("token"); 

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
