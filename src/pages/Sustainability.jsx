import Sidebar from '../components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Sustainability() {
  const metrics = [
    { label: 'Solar Energy Generated', value: '1.2 MW', icon: '☀️', color: '#eab308' },
    { label: 'Carbon Footprint Saved', value: '4.2 Tons', icon: '🌿', color: '#22c55e' },
    { label: 'Water Recycled', value: '40 kL', icon: '♻️', color: '#06b6d4' },
    { label: 'Trees Planted This Year', value: '120', icon: '🌳', color: '#22c55e' },
    { label: 'EV Charging Points', value: '8 Active', icon: '🔋', color: '#a78bfa' },
    { label: 'Waste Composted', value: '320 Kg', icon: '🗂️', color: '#f97316' },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🌱 Sustainability</h1>
          <p>Green campus initiatives and environmental impact</p>
        </div>
        <div className="page-grid">
          {metrics.map(m => (
            <div className="page-card" key={m.label} style={{textAlign:'center'}}>
              <div style={{fontSize:'2.5rem',marginBottom:'0.5rem'}}>{m.icon}</div>
              <strong style={{fontSize:'1.5rem',color:m.color}}>{m.value}</strong>
              <p style={{marginTop:'0.3rem'}}>{m.label}</p>
            </div>
          ))}
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Sustainability