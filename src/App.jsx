import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Buildings from './pages/Buildings'
import Classrooms from './pages/Classrooms'
import Hostels from './pages/Hostels'
import Energy from './pages/Energy'
import Water from './pages/Water'
import Maintenance from './pages/Maintenance'
import Transport from './pages/Transport'
import Security from './pages/Security'
import Sustainability from './pages/Sustainability'
import Reports from './pages/Reports'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/water" element={<Water />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/security" element={<Security />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App