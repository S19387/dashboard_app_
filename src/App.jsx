import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import DashboardPage from './pages/Dashboard/DashboardPage';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Dashboard route */}
        <Route 
          path="/dashboard" 
          element={<PrivateRoute element={<DashboardPage />} />} 
        />

        {/* Other public routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<StatsPage/>}/>

        {/* Redirect to login if no route matches */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
