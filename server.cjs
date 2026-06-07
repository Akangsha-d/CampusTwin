const express = require('express')
const cors = require('cors')
const https = require('https')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/chat', (req, res) => {
  const { messages, system } = req.body

  const groqMessages = [
    { role: 'system', content: system },
    ...messages
  ]

  const body = JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    max_tokens: 1000,
    messages: groqMessages
  })

  const options = {
    hostname: 'api.groq.com',
    path: '/openai/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Length': Buffer.byteLength(body)
    }
  }

  const apiReq = https.request(options, (apiRes) => {
    let data = ''
    apiRes.on('data', chunk => data += chunk)
    apiRes.on('end', () => {
      try {
        const parsed = JSON.parse(data)
        const reply = parsed.choices?.[0]?.message?.content || "Sorry, I couldn't process that."
        res.json({ content: [{ text: reply }] })
      } catch (e) {
        res.status(500).json({ error: 'Parse error' })
      }
    })
  })

  apiReq.on('error', (e) => {
    console.error('Error:', e)
    res.status(500).json({ error: 'Request failed' })
  })

  apiReq.write(body)
  apiReq.end()
})

app.listen(3001, () => console.log('✅ CampusTwin API server running on port 3001'))