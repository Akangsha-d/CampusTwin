import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Classrooms() {
  const [booked, setBooked] = useState(null)
  const rooms = [
    { id: 'CR-101', cap: 60, avail: true }, { id: 'CR-102', cap: 40, avail: false },
    { id: 'CR-201', cap: 80, avail: true }, { id: 'CR-202', cap: 30, avail: true },
    { id: 'SH-1', cap: 200, avail: false }, { id: 'LAB-A', cap: 25, avail: true },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🖥️ Classrooms</h1>
          <p>Book and manage classroom schedules</p>
        </div>
        {booked && <div style={{background:'rgba(34,197,94,0.15)',border:'1px solid #22c55e',borderRadius:'10px',padding:'1rem',marginBottom:'1.5rem',color:'#22c55e'}}>✅ {booked} has been booked successfully!</div>}
        <div className="page-grid">
          {rooms.map(r => (
            <div className="page-card" key={r.id}>
              <h3>Room {r.id}</h3>
              <p>Capacity: {r.cap} seats</p>
              <p style={{margin:'0.5rem 0'}}>Status: <span style={{color: r.avail ? '#22c55e' : '#ef4444'}}>{r.avail ? 'Available' : 'Occupied'}</span></p>
              <button
                disabled={!r.avail}
                onClick={() => setBooked(r.id)}
                style={{marginTop:'0.8rem',padding:'0.5rem 1rem',background: r.avail ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.05)',border:'none',borderRadius:'8px',color: r.avail ? 'white':'#4a5568',cursor: r.avail ? 'pointer':'not-allowed',width:'100%'}}
              >
                {r.avail ? '📅 Book Now' : '🚫 Unavailable'}
              </button>
            </div>
          ))}
        </div>
      </main>
       <CampusBot />
    </div>
  )
}
export default Classrooms