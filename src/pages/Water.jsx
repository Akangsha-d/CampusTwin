import Sidebar from '../Components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Water() {
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>💧 Water Management</h1>
          <p>Monitor water usage and detect leaks</p>
        </div>
        <div className="page-grid">
          {[['Total Usage','125 kL','#06b6d4'],['Wastage Detected','3.2 kL','#ef4444'],['Tanks Full','4/6','#22c55e'],['Hostel Block C','Leak Detected 🚨','#f97316'],['Library','Normal ✅','#22c55e'],['Sports Complex','Normal ✅','#22c55e']].map(([l,v,c])=>(
            <div className="page-card" key={l}>
              <h3>{l}</h3>
              <strong style={{fontSize:'1.4rem',color:c}}>{v}</strong>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Water