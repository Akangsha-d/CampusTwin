import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/Pages.css'
import CampusBot from '../Components/campusBot'
function Maintenance() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ loc: '', issue: '', desc: '' })
  const issues = [
    { id: 'M001', loc: 'Seminar Hall 2', issue: 'AC Maintenance Due', priority: 'Medium', status: 'Pending' },
    { id: 'M002', loc: 'Hostel Block C', issue: 'Water Pipe Leak', priority: 'High', status: 'In Progress' },
    { id: 'M003', loc: 'Library', issue: 'Projector Fault', priority: 'Low', status: 'Resolved' },
  ]
  return (
    <div className="page-layout">
      <Sidebar />
      <main className="page-main">
        <div className="page-header">
          <h1>🔧 Maintenance</h1>
          <p>Track and report maintenance issues</p>
        </div>
        {submitted && <div style={{background:'rgba(34,197,94,0.15)',border:'1px solid #22c55e',borderRadius:'10px',padding:'1rem',marginBottom:'1.5rem',color:'#22c55e'}}>✅ Issue reported successfully! Team will respond within 2 hours.</div>}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          <div className="page-card">
            <h3 style={{marginBottom:'1rem'}}>Report New Issue</h3>
            <input placeholder="Location" value={form.loc} onChange={e=>setForm({...form,loc:e.target.value})} style={{width:'100%',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'8px',padding:'0.6rem',color:'white',marginBottom:'0.7rem'}} />
            <input placeholder="Issue Type" value={form.issue} onChange={e=>setForm({...form,issue:e.target.value})} style={{width:'100%',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'8px',padding:'0.6rem',color:'white',marginBottom:'0.7rem'}} />
            <textarea placeholder="Description" value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} rows={3} style={{width:'100%',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'8px',padding:'0.6rem',color:'white',marginBottom:'0.7rem',resize:'none'}} />
            <button onClick={()=>{if(form.loc&&form.issue){setSubmitted(true);setForm({loc:'',issue:'',desc:''})}}} style={{width:'100%',padding:'0.7rem',background:'linear-gradient(90deg,#7c3aed,#06b6d4)',border:'none',borderRadius:'8px',color:'white',fontWeight:'600',cursor:'pointer'}}>Submit Report</button>
          </div>
          <div>
            {issues.map(i => (
              <div className="page-card" key={i.id} style={{marginBottom:'0.8rem'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <h3 style={{fontSize:'0.9rem'}}>{i.issue}</h3>
                  <span style={{fontSize:'0.75rem',color:i.status==='Resolved'?'#22c55e':i.status==='In Progress'?'#f97316':'#94a3b8'}}>{i.status}</span>
                </div>
                <p style={{fontSize:'0.78rem',color:'#64748b'}}>📍 {i.loc} | Priority: <span style={{color:i.priority==='High'?'#ef4444':i.priority==='Medium'?'#f97316':'#22c55e'}}>{i.priority}</span></p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CampusBot />
    </div>
  )
}
export default Maintenance