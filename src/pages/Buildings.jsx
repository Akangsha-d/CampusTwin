import Sidebar from '../components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Buildings() {
  const buildings = [
    { name: 'Engineering Block', occupancy: 85, status: 'High', color: '#f97316' },
    { name: 'Library', occupancy: 78, status: 'Normal', color: '#06b6d4' },
    { name: 'Auditorium', occupancy: 92, status: 'Full', color: '#ef4444' },
    { name: 'Admin Block', occupancy: 60, status: 'Normal', color: '#22c55e' },
    { name: 'Hostel A', occupancy: 65, status: 'Normal', color: '#22c55e' },
    { name: 'Sports Complex', occupancy: 45, status: 'Low', color: '#a78bfa' },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🏢 Buildings</h1>
          <p>Live occupancy and status of all campus buildings</p>
        </div>
        <div className="page-grid">
          {buildings.map(b => (
            <div className="page-card" key={b.name}>
              <h3>{b.name}</h3>
              <div style={{display:'flex',alignItems:'center',gap:'0.5rem',margin:'0.8rem 0'}}>
                <div style={{flex:1,height:'8px',background:'rgba(255,255,255,0.08)',borderRadius:'4px',overflow:'hidden'}}>
                  <div style={{width:`${b.occupancy}%`,height:'100%',background:b.color,borderRadius:'4px'}}></div>
                </div>
                <strong style={{color:b.color}}>{b.occupancy}%</strong>
              </div>
              <p>Status: <span style={{color:b.color}}>{b.status}</span></p>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )

}
export default Buildings