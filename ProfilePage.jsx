import { useState } from 'react'
import './ProfilePage.css'

const ProfilePage = () => {
  const [user] = useState({
    name: 'John Doe',
    role: 'Coordinator',
    email: 'john.doe@example.com',
    workshopsAttended: 5,
    workshopsOrganized: 2
  })

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">👤</div>
          <div>
            <h2>{user.name}</h2>
            <span className="role-badge">{user.role}</span>
          </div>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Email</span>
            <span className="value">{user.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Workshops Attended</span>
            <span className="value">{user.workshopsAttended}</span>
          </div>
          <div className="detail-item">
            <span className="label">Workshops Organized</span>
            <span className="value">{user.workshopsOrganized}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary">Edit Profile</button>
          <button className="btn-secondary">Change Password</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage