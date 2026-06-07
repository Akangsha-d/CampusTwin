import Sidebar from '../Components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Security() {
  const alerts = [
    { type: 'High Power Demand', loc: 'Engineering Block', time: '10:21 AM', level: 'red' },
    { type: 'Water Leak Detected', loc: 'Hostel Block C', time: '09:47 AM', level: 'orange' },
    { type: 'Maintenance Due', loc: 'AC - Seminar Hall 2', time: '09:15 AM', level: 'yellow' },
    { type: 'Unauthorized Access Attempt', loc: 'Server Room', time: '08:30 AM', level: 'red' },
  ]
  const colors = { red: '#ef4444', orange: '#f97316', yellow: '#eab308' }
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🛡️ Security</h1>
          <p>Active alerts, CCTV, and access control</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          <div>
            <h3 style={{marginBottom:'1rem'}}>Active Alerts ({alerts.length})</h3>
            {alerts.map(a => (
              <div className="page-card" key={a.type+a.time} style={{marginBottom:'0.8rem',borderLeft:`3px solid ${colors[a.level]}`}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <strong style={{color:colors[a.level]}}>{a.type}</strong>
                  <small style={{color:'#64748b'}}>{a.time}</small>
                </div>
                <p style={{color:'#64748b',fontSize:'0.8rem'}}>📍 {a.loc}</p>
              </div>
            ))}
          </div>
          <div className="page-card">
            <h3 style={{marginBottom:'1rem'}}>CCTV Status</h3>
            {['Main Gate','Engineering Block','Library Entrance','Hostel A','Parking Lot'].map(cam => (
              <div key={cam} style={{display:'flex',justifyContent:'space-between',padding:'0.6rem 0',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                <span style={{fontSize:'0.85rem'}}>📷 {cam}</span>
                <span style={{color:'#22c55e',fontSize:'0.78rem'}}>● Live</span>
              </div>
            ))}
            <button style={{marginTop:'1rem',width:'100%',padding:'0.7rem',background:'rgba(239,68,68,0.3)',border:'1px solid rgba(239,68,68,0.5)',borderRadius:'8px',color:'#ef4444',fontWeight:'600',cursor:'pointer'}}>🆘 Trigger Emergency Alert</button>
          </div>
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Security