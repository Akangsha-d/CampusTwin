import Sidebar from '../components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Reports() {
  const reports = [
    { title: 'Monthly Energy Report', date: 'May 2025', type: 'Energy', size: '2.4 MB' },
    { title: 'Occupancy Analysis Q1', date: 'Apr 2025', type: 'Occupancy', size: '1.8 MB' },
    { title: 'Water Usage Report', date: 'May 2025', type: 'Water', size: '0.9 MB' },
    { title: 'Security Incident Log', date: 'May 2025', type: 'Security', size: '1.2 MB' },
    { title: 'Sustainability Impact Report', date: 'Apr 2025', type: 'Sustainability', size: '3.1 MB' },
    { title: 'Maintenance Log - April', date: 'Apr 2025', type: 'Maintenance', size: '0.7 MB' },
  ]
  const typeColor = { Energy:'#06b6d4', Occupancy:'#7c3aed', Water:'#3b82f6', Security:'#ef4444', Sustainability:'#22c55e', Maintenance:'#f97316' }
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>📊 Reports</h1>
          <p>Download and view campus analytics reports</p>
        </div>
        <div className="page-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          {reports.map(r => (
            <div className="page-card" key={r.title} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <span style={{fontSize:'0.72rem',color:typeColor[r.type],background:`rgba(0,0,0,0.3)`,padding:'0.2rem 0.6rem',borderRadius:'20px',marginBottom:'0.5rem',display:'inline-block'}}>{r.type}</span>
                <h3 style={{fontSize:'0.9rem'}}>{r.title}</h3>
                <p style={{color:'#64748b',fontSize:'0.78rem'}}>{r.date} • {r.size}</p>
              </div>
              <button onClick={() => alert(`Downloading ${r.title}...`)} style={{background:'rgba(124,58,237,0.3)',border:'1px solid rgba(124,58,237,0.5)',color:'#a78bfa',borderRadius:'8px',padding:'0.5rem 0.8rem',cursor:'pointer',fontSize:'0.8rem',flexShrink:0}}>⬇️ Download</button>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Reports