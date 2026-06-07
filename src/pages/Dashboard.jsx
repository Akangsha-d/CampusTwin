import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'
import campus from '../assets/campus.jpg'
import CampusBot from '../Components/campusBot'
function Dashboard() {
  const navigate = useNavigate()

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
    <div className="dashboard-layout">
      {/* SIDEBAR */}
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
              className={`nav-item ${item.label === 'Dashboard' ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="premium-box">
          <p>⭐ Go Premium</p>
          <small>Unlock advanced analytics</small>
          <button className="upgrade-btn">Upgrade Now →</button>
        </div>

        <div className="user-info">
          <div className="avatar">A</div>
          <div>
            <strong>Akangsha Das</strong>
            <small>Admin</small>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* TOPBAR */}
        <div className="topbar">
          <div>
            <h2>Dashboard</h2>
            <p>Real-time overview of your smart campus</p>
          </div>
          <div className="topbar-right">
            <div className="search-bar">
              <span>🔍</span>
              <input placeholder="Search anything..." />
            </div>
            <div className="weather-widget">☀️ 28°C Sunny</div>
            <div className="notif-btn">🔔 <span className="badge">3</span></div>
            <div className="time-widget">
              <small>Wed, 15 May 2026</small>
              <strong>10:34 AM</strong>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="stat-cards">
          <div className="stat-card purple">
            <div className="card-header"><span>❤️ Campus Health Score</span></div>
            <div className="card-value">92<span>/100</span></div>
            <div className="card-sub green">✅ Excellent</div>
          </div>
          <div className="stat-card blue">
            <div className="card-header"><span>👥 Live Occupancy</span></div>
            <div className="card-value">68<span>%</span></div>
            <div className="card-sub">2,843 People</div>
          </div>
          <div className="stat-card teal">
            <div className="card-header"><span>⚡ Power Demand</span></div>
            <div className="card-value">3.24<span> MW</span></div>
            <div className="card-sub">68% of Capacity</div>
          </div>
          <div className="stat-card orange">
            <div className="card-header"><span>💧 Water Usage</span></div>
            <div className="card-value">125<span> kL</span></div>
            <div className="card-sub">Today</div>
          </div>
          <div className="stat-card red">
            <div className="card-header"><span>🚨 Active Alerts</span></div>
            <div className="card-value">3</div>
            <button className="view-all-link" onClick={() => navigate('/security')}>View all →</button>
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="middle-row">
          {/* Map Section */}
          <div className="campus-map-section">
            <div className="section-header">
              <div>
                <h3>Live Campus Overview</h3>
                <p>Real-time status of buildings and facilities</p>
              </div>
              <button className="view-map-btn" onClick={() => navigate('/buildings')}>View Full Map →</button>
            </div>
            <div className="map-placeholder">
              <img 
                src={campus} 
                alt="Campus" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  position: 'absolute',
                  top: 0, left: 0,
                  opacity: 0.6
                }} 
              />
              <div className="map-overlay-tag" style={{top:'20%',left:'15%'}}>
                📚 LIBRARY<br/><small>78% Occupancy</small>
              </div>
              <div className="map-overlay-tag hostel" style={{top:'55%',left:'20%'}}>
                🏠 HOSTEL A<br/><small>65% Occupancy</small>
              </div>
              <div className="map-overlay-tag red-tag" style={{top:'15%',right:'10%'}}>
                🎭 AUDITORIUM<br/><small>92% Occupancy</small>
              </div>
              <div className="map-overlay-tag" style={{top:'25%',right:'20%'}}>
                🔬 ENGINEERING BLOCK<br/><small>85% Occupancy</small>
              </div>
              <div className="map-overlay-tag sports" style={{bottom:'15%',right:'25%'}}>
                🏃 SPORTS COMPLEX<br/><small>45% Occupancy</small>
              </div>
              <div className="campus-glow"></div>
            </div>
          </div>
          {/* Alerts + Events */}
          <div className="right-panels">
            <div className="alerts-panel">
              <div className="panel-header">
                <h3>Active Alerts</h3>
                <button onClick={() => navigate('/security')}>View All →</button>
              </div>
              <div className="alert-item red-alert">
                <span>🔴</span>
                <div>
                  <strong>High Power Demand</strong>
                  <small>Engineering Block</small>
                </div>
                <span className="alert-time">10:21 AM</span>
              </div>
              <div className="alert-item orange-alert">
                <span>🟠</span>
                <div>
                  <strong>Water Leak Detected</strong>
                  <small>Hostel Block C</small>
                </div>
                <span className="alert-time">09:47 AM</span>
              </div>
              <div className="alert-item yellow-alert">
                <span>🟡</span>
                <div>
                  <strong>Maintenance Due</strong>
                  <small>AC - Seminar Hall 2</small>
                </div>
                <span className="alert-time">09:15 AM</span>
              </div>
            </div>

            <div className="events-panel">
              <div className="panel-header">
                <h3>Upcoming Events</h3>
                <button>View Calendar →</button>
              </div>
              <div className="event-item">
                <div className="event-date"><strong>17</strong><small>MAY</small></div>
                <div><strong>Tech Fest 2025</strong><small>Seminar Hall & Ground</small></div>
              </div>
              <div className="event-item">
                <div className="event-date"><strong>20</strong><small>MAY</small></div>
                <div><strong>Annual Sports Meet</strong><small>Sports Complex</small></div>
              </div>
              <div className="event-item">
                <div className="event-date"><strong>22</strong><small>MAY</small></div>
                <div><strong>Guest Lecture: AI Future</strong><small>Auditorium</small></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-row">
          {/* Energy Chart */}
          <div className="energy-section">
            <div className="panel-header">
              <h3>Energy Consumption</h3>
              <select className="week-select"><option>This Week</option></select>
            </div>
            <div className="energy-stat">
              <strong>3.24 MW</strong> <span>Avg. Daily Usage</span>
              <span className="up">↑ 12.5%</span>
            </div>
            <div className="bar-chart">
              {[
                { day: 'Mon', h: 60 }, { day: 'Tue', h: 75 },
                { day: 'Wed', h: 50 }, { day: 'Thu', h: 85 },
                { day: 'Fri', h: 70 }, { day: 'Sat', h: 40 }, { day: 'Sun', h: 30 }
              ].map(b => (
                <div key={b.day} className="bar-wrap">
                  <div className="bar" style={{ height: `${b.h}%` }}></div>
                  <small>{b.day}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Occupancy */}
          <div className="occupancy-section">
            <div className="panel-header">
              <h3>Top Buildings by Occupancy</h3>
              <button onClick={() => navigate('/buildings')}>View All →</button>
            </div>
            {[
              { name: 'Auditorium', pct: 92, color: '#ef4444' },
              { name: 'Engineering Block', pct: 85, color: '#f97316' },
              { name: 'Library', pct: 78, color: '#06b6d4' },
              { name: 'Admin Block', pct: 60, color: '#22c55e' },
              { name: 'Hostel A', pct: 45, color: '#eab308' },
            ].map(b => (
              <div key={b.name} className="occ-row">
                <span>{b.name}</span>
                <div className="occ-bar-bg">
                  <div className="occ-bar-fill" style={{ width: `${b.pct}%`, background: b.color }}></div>
                </div>
                <span className="occ-pct">{b.pct}%</span>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-section">
            <h3>Quick Actions</h3>
            <div className="qa-grid">
              <button className="qa-btn purple" onClick={() => navigate('/classrooms')}>
                <span>🖥️</span> Book Classroom
              </button>
              <button className="qa-btn orange" onClick={() => navigate('/maintenance')}>
                <span>⚠️</span> Report Issue
              </button>
              <button className="qa-btn blue" onClick={() => navigate('/hostels')}>
                <span>🔧</span> Request Service
              </button>
              <button className="qa-btn green" onClick={() => navigate('/classrooms')}>
                <span>📅</span> View Timetable
              </button>
              <button className="qa-btn cyan" onClick={() => navigate('/transport')}>
                <span>🚌</span> Transport Tracker
              </button>
              <button className="qa-btn red" onClick={() => navigate('/security')}>
                <span>🆘</span> Emergency
              </button>
            </div>
          </div>
        </div>
      </main>
      <CampusBot />
    </div>
  )
}

export default Dashboard