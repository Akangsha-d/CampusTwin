import Sidebar from '../Components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Hostels() {
  const hostels = [
    { name: 'Hostel A (Boys)', rooms: 120, occupied: 93, facilities: 'WiFi, Gym, Cafeteria' },
    { name: 'Hostel B (Boys)', rooms: 100, occupied: 78, facilities: 'WiFi, Library' },
    { name: 'Hostel C (Girls)', rooms: 90, occupied: 85, facilities: 'WiFi, Gym, Common Room' },
    { name: 'Hostel D (Girls)', rooms: 80, occupied: 70, facilities: 'WiFi, Cafeteria' },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🏨 Hostels</h1>
          <p>Occupancy and facility management for all hostels</p>
        </div>
        <div className="page-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          {hostels.map(h => (
            <div className="page-card" key={h.name}>
              <h3>{h.name}</h3>
              <p style={{margin:'0.5rem 0'}}>Rooms: {h.occupied}/{h.rooms} occupied</p>
              <div style={{height:'8px',background:'rgba(255,255,255,0.08)',borderRadius:'4px',overflow:'hidden',margin:'0.7rem 0'}}>
                <div style={{width:`${Math.round(h.occupied/h.rooms*100)}%`,height:'100%',background:'linear-gradient(90deg,#7c3aed,#06b6d4)',borderRadius:'4px'}}></div>
              </div>
              <p style={{fontSize:'0.78rem',color:'#64748b'}}>{h.facilities}</p>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )

}
export default Hostels