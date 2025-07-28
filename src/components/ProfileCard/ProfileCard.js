import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  const { hero, about, skills } = profile;

  return (
    <div className="card" style={{ maxWidth: 350 }}>
      {/* Profile Image */}
      <div>
        {hero.profileImage && <img src={hero.profileImage} alt={hero.name} className="profile-img" />}
      </div>
      {/* Name, Role, Bio, Skills */}
      <h3>{hero.name}</h3>
      <p><strong>{hero.title}</strong></p>
      <p>{about.bio}</p>
      <div>Skills: {skills && skills.map((s, i) => <span key={i} style={{ marginRight: 4 }}>{s}</span>)}</div>
      {/* View Portfolio Button */}
      <button className="btn" style={{ marginTop: 12 }} onClick={() => navigate('/portfolio/1')}>View Portfolio</button>
      <button className="btn" style={{ marginTop: 8, marginLeft: 8 }} onClick={() => navigate('/edit-profile')}>Edit Profile</button>
    </div>
  );
};

export default ProfileCard; 