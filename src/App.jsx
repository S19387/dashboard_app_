// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './pages/Dashboard/DashboardPage';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> Login route */}
        <Route path="/dashboard" element={<DashboardPage />} />  {/* Dashboard route */}
        <Route path="/profile" element={<Profile />} />  {/* Profile route */}
        <Route path="/settings" element={<Settings />} /> {/* Settings route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

