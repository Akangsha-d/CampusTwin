import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const [role, setRole] = useState('admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      navigate('/dashboard')
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <div className="brand">
          <div className="brand-logo">C</div>
          <div>
            <h2>Campus<span>Twin</span></h2>
            <p>Smart Campus. Smarter Tomorrow.</p>
          </div>
        </div>

        <div className="hero-text">
          <h1>One Campus,<br /><span>Infinite Possibilities</span></h1>
          <p>Real-time insights, intelligent operations,<br />and seamless connectivity across your campus.</p>
        </div>

        <div className="stats-row">
          <div className="stat"><span className="stat-icon">👥</span><strong>2,843</strong><small>Students</small></div>
          <div className="stat"><span className="stat-icon">🏢</span><strong>38</strong><small>Buildings</small></div>
          <div className="stat"><span className="stat-icon">⚡</span><strong>3.2 MW</strong><small>Live Power</small></div>
          <div className="stat"><span className="stat-icon">🛡️</span><strong>99.8%</strong><small>System Uptime</small></div>
        </div>

        <div className="login-footer">
          <p>Powered by <span className="accent-cyan">Intelligence.</span> <span className="accent-blue">Driven by Data.</span></p>
          <p className="secure-line">🔒 Secure • Reliable • Real-time</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Sign in to manage your smart campus</p>

          <div className="role-tabs">
            <button
              className={role === 'admin' ? 'active' : ''}
              onClick={() => setRole('admin')}
            >👤 Admin / Staff</button>
            <button
              className={role === 'student' ? 'active' : ''}
              onClick={() => setRole('student')}
            >🎓 Student / Faculty</button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrap">
                <span>✉️</span>
                <input
                  type="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrap">
                <span>🔒</span>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="form-row">
              <label className="remember">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
                Remember me
              </label>
              <a href="#" className="forgot">Forgot password?</a>
            </div>

            <button type="submit" className="sign-in-btn">Sign In →</button>
          </form>

          <div className="divider"><span>or continue with</span></div>

          <button className="social-btn google" onClick={() => navigate('/dashboard')}>
            <img src="https://www.google.com/favicon.ico" alt="G" width="18" /> Continue with Google
          </button>
          <button className="social-btn microsoft" onClick={() => navigate('/dashboard')}>
            <span style={{color:'#f25022',fontWeight:'bold'}}>⊞</span> Continue with Microsoft
          </button>
          <button className="social-btn apple" onClick={() => navigate('/dashboard')}>
             Continue with Apple
          </button>

          <p className="new-user">New to CampusTwin? <a href="#">Request Access</a></p>
          <p className="copyright">© 2025 CampusTwin Platform • All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Login