import Sidebar from '../Components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Energy() {
  const data = [
    { block: 'Engineering Block', mw: 1.2, status: 'High' },
    { block: 'Auditorium', mw: 0.8, status: 'Normal' },
    { block: 'Library', mw: 0.4, status: 'Normal' },
    { block: 'Hostel Complex', mw: 0.6, status: 'Normal' },
    { block: 'Admin Block', mw: 0.24, status: 'Low' },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>⚡ Energy Management</h1>
          <p>Real-time power consumption across campus</p>
        </div>
        <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem'}}>
          {[['Total Today','3.24 MW','#06b6d4'],['Peak Demand','4 MW','#f97316'],['Saved This Week','0.5 MW','#22c55e']].map(([l,v,c])=>(
            <div key={l} className="page-card" style={{flex:1,textAlign:'center'}}>
              <p style={{color:'#94a3b8',fontSize:'0.8rem'}}>{l}</p>
              <strong style={{fontSize:'1.6rem',color:c}}>{v}</strong>
            </div>
          ))}
        </div>
        <div className="page-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          {data.map(d => (
            <div className="page-card" key={d.block}>
              <h3>{d.block}</h3>
              <strong style={{fontSize:'1.4rem',color:'#06b6d4'}}>{d.mw} MW</strong>
              <p style={{color: d.status==='High'?'#ef4444':d.status==='Low'?'#22c55e':'#94a3b8'}}>● {d.status}</p>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Energy