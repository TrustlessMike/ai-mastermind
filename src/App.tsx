import './index.css'

function App() {
  return (
    <main>
      <header className="header">
        <span className="brain-icon">🧠</span>
        AI MASTERMIND
      </header>

      <section>
        <h1>AI Mastermind</h1>
        <p className="subheadline">
          Weekly conversations on AI, automation, and what's actually working.
        </p>
        <p className="supporting">No fluff. Just builders sharing notes.</p>
      </section>

      <section className="logistics">
        <div className="logistics-item">
          <span>📅</span> Every Wednesday
        </div>
        <div className="logistics-item">
          <span>🕗</span> 8:00 PM Eastern
        </div>
        <div className="logistics-item">
          <span>💻</span> Google Meet
        </div>
      </section>

      <section>
        <a href="https://ai-mastermind-one.vercel.app/" target="_blank" className="cta" rel="noreferrer">
          Join Us <span>→</span>
        </a>
      </section>

      <footer className="footer">
        <p>A collaborative initiative by <strong>Cortana Solutions</strong></p>
        <p>Free weekly meetup. RSVP to get the calendar invite.</p>
      </footer>
    </main>
  )
}

export default App
