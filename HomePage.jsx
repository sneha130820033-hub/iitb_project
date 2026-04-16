import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Workshop Booking Platform</h1>
        <p>Connect with expert instructors and enhance your skills through hands-on workshops.</p>
        <a href="/workshops" className="cta-button">Browse Workshops</a>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals and academic experts.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Hands-on Learning</h3>
          <p>Practical workshops designed to build real skills.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Flexible Schedule</h3>
          <p>Find workshops that fit your calendar.</p>
        </div>
      </section>
    </div>
  )
}

export default HomePage