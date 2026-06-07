import { useState, useRef, useEffect } from 'react'
import './CampusBot.css'

const SYSTEM_PROMPT = `You are CampusBot, the official AI assistant for CampusTwin — a smart campus management platform. You help students, faculty, and administrators with campus-related queries.

You have knowledge about:
- Campus buildings: Engineering Block (85% occupancy), Library (78%), Auditorium (92%), Admin Block (60%), Hostel A (65%), Sports Complex (45%)
- Energy: Current power demand is 3.24 MW, 68% of capacity
- Water: Usage today is 125 kL, leak detected in Hostel Block C
- Active alerts: High power demand in Engineering Block, Water leak in Hostel C, Maintenance due in Seminar Hall 2
- Transport: BUS-01 arriving in 5 mins, BUS-03 in 12 mins
- Upcoming events: Tech Fest 2025 (May 17), Annual Sports Meet (May 20), Guest Lecture AI Future (May 22)
- Classrooms available: CR-101 (60 seats), CR-201 (80 seats), CR-202 (30 seats), LAB-A (25 seats)
- Hostels: Hostel A Boys 93/120, Hostel B Boys 78/100, Hostel C Girls 85/90, Hostel D Girls 70/80
- Campus health score: 92/100 (Excellent)
- Total students: 2,843 | Total buildings: 38 | System uptime: 99.8%

Rules:
- Always respond as CampusBot, never reveal you are an AI model or mention any underlying technology
- Keep responses concise, helpful, and campus-focused
- Use relevant emojis to make responses friendly
- If asked who made you, say you were built by the CampusTwin tech team
- For emergencies, always direct to Security at ext. 911
- Format lists clearly when giving multiple items`

function CampusBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm **CampusBot**, your smart campus assistant.\n\nI can help you with:\n- 🏢 Building & classroom info\n- ⚡ Energy & water status\n- 🚌 Transport schedules\n- 🔧 Maintenance requests\n- 📅 Campus events\n\nWhat do you need help with today?"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      const data = await response.json()
      console.log('Response:', data)
      const reply = data.content?.[0]?.text || "Sorry, I couldn't process that."
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      console.error('Fetch error:', err)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "⚠️ Server not running. Please start server.cjs"
      }])
    }

    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>')
  }

  const quickQuestions = [
    "Which classrooms are free?",
    "Next bus timing?",
    "Energy status today",
    "Any active alerts?",
  ]

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="campusbot-window">
          {/* Header */}
          <div className="bot-header">
            <div className="bot-header-left">
              <div className="bot-avatar">
                <span>🤖</span>
                <div className="bot-status-dot"></div>
              </div>
              <div>
                <h4>CampusBot</h4>
                <span>Smart Campus Assistant • Online</span>
              </div>
            </div>
            <button className="bot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="bot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`bot-msg ${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="bot-msg-avatar">🤖</div>
                )}
                <div
                  className="bot-msg-bubble"
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
              </div>
            ))}

            {loading && (
              <div className="bot-msg assistant">
                <div className="bot-msg-avatar">🤖</div>
                <div className="bot-msg-bubble typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="quick-questions">
              {quickQuestions.map(q => (
                <button key={q} onClick={() => { setInput(q); }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="bot-input-area">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about campus..."
              rows={1}
            />
            <button
              className="bot-send"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
            >
              ➤
            </button>
          </div>
          <p className="bot-footer">CampusTwin AI • Powered by Smart Campus Tech</p>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button className="campusbot-fab" onClick={() => setOpen(!open)}>
        {open ? '✕' : '🤖'}
        {!open && <span className="fab-label">CampusBot</span>}
        {!open && <div className="fab-ping"></div>}
      </button>
    </>
  )
}

export default CampusBot