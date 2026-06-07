import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/Dashboard.css'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: '🏠', label: 'Dashboard', path: '/dashboard' },
    { icon: '🗺️', label: 'Campus Map', path: '/buildings' },
    { icon: '🏢', label: 'Buildings', path: '/buildings' },
    { icon: '🖥️', label: 'Classrooms', path: '/classrooms' },
    { icon: '🏨', label: 'Hostels', path: '/hostels' },
    { icon: '⚡', label: 'Energy', path: '/energy' },
    { icon: '💧', label: 'Water', path: '/water' },
    { icon: '🔧', label: 'Maintenance', path: '/maintenance' },
    { icon: '🚌', label: 'Transport', path: '/transport' },
    { icon: '🛡️', label: 'Security', path: '/security' },
    { icon: '🌱', label: 'Sustainability', path: '/sustainability' },
    { icon: '📊', label: 'Reports', path: '/reports' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo-sm">C</div>
        <div>
          <h3>Campus<span>Twin</span></h3>
          <p>Smart Campus. Smarter Tomorrow.</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.label}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="user-info" style={{marginTop:'auto'}}>
        <div className="avatar">A</div>
        <div>
          <strong>Arjun Sharma</strong>
          <small>Admin</small>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar