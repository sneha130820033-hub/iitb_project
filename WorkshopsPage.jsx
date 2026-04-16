import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkshopCard from '../components/WorkshopCard'
import './WorkshopsPage.css'

const WorkshopsPage = () => {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This will fetch from Django API once connected
    const fetchWorkshops = async () => {
      try {
        // Placeholder: replace with actual API endpoint
        // const response = await axios.get('http://localhost:8000/api/workshops/')
        // setWorkshops(response.data)
        setWorkshops([
          { id: 1, title: 'Python for Beginners', instructor: 'Dr. Smith', date: '2026-05-15', seats: 20 },
          { id: 2, title: 'Web Development with React', instructor: 'Prof. Johnson', date: '2026-05-22', seats: 15 },
          { id: 3, title: 'Data Science Essentials', instructor: 'Dr. Lee', date: '2026-05-29', seats: 25 },
        ])
      } catch (error) {
        console.error('Error fetching workshops:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkshops()
  }, [])

  return (
    <div className="workshops-page">
      <h1>Available Workshops</h1>
      {loading ? (
        <div className="loading">Loading workshops...</div>
      ) : (
        <div className="workshops-grid">
          {workshops.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WorkshopsPage