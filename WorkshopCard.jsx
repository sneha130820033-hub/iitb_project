import './WorkshopCard.css'

const WorkshopCard = ({ workshop }) => {
  return (
    <div className="workshop-card">
      <h3>{workshop.title}</h3>
      <p className="instructor">👨‍🏫 {workshop.instructor}</p>
      <p className="date">📅 {workshop.date}</p>
      <p className="seats">👥 {workshop.seats} seats available</p>
      <button className="register-btn">Register</button>
    </div>
  )
}

export default WorkshopCard