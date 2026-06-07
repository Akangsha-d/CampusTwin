import Sidebar from '../Components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Transport() {
  const buses = [
    { id: 'BUS-01', route: 'City Center → Campus', status: 'On Route', eta: '5 min', occupancy: 72 },
    { id: 'BUS-02', route: 'North Campus → Main Gate', status: 'At Stop', eta: 'Now', occupancy: 45 },
    { id: 'BUS-03', route: 'Hostel → Library', status: 'On Route', eta: '12 min', occupancy: 88 },
    { id: 'BUS-04', route: 'Campus → Railway Station', status: 'Scheduled', eta: '30 min', occupancy: 0 },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🚌 Transport</h1>
          <p>Live bus tracking and campus transport management</p>
        </div>
        <div className="page-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          {buses.map(b => (
            <div className="page-card" key={b.id}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.5rem'}}>
                <h3>{b.id}</h3>
                <span style={{fontSize:'0.75rem',padding:'0.2rem 0.6rem',borderRadius:'20px',background: b.status==='On Route'?'rgba(34,197,94,0.2)':b.status==='At Stop'?'rgba(6,182,212,0.2)':'rgba(255,255,255,0.1)',color: b.status==='On Route'?'#22c55e':b.status==='At Stop'?'#06b6d4':'#94a3b8'}}>{b.status}</span>
              </div>
              <p style={{fontSize:'0.82rem',color:'#94a3b8'}}>{b.route}</p>
              <p style={{marginTop:'0.5rem'}}>⏱️ ETA: <strong>{b.eta}</strong> | 👥 {b.occupancy}% full</p>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Transport