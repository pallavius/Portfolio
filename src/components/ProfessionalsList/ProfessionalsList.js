import React, { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfessionalsList = () => {
  const [profile, setProfile] = useState(null);
  const [skillFilter, setSkillFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('portfolioProfile');
    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  const matchesSkill = (profile, filter) => {
    if (!filter) return true;
    return profile.skills.some(s => s.toLowerCase().includes(filter.toLowerCase()));
  };
  const matchesRole = (profile, filter) => {
    if (!filter) return true;
    return profile.hero.title.toLowerCase().includes(filter.toLowerCase());
  };

  const showProfile = profile && matchesSkill(profile, skillFilter) && matchesRole(profile, roleFilter);

  return (
    <div>
      <h2>Professionals</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Filter by skill"
          value={skillFilter}
          onChange={e => setSkillFilter(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Filter by role"
          value={roleFilter}
          onChange={e => setRoleFilter(e.target.value)}
        />
      </div>
      {showProfile ? (
        <ProfileCard profile={profile} />
      ) : (
        <p>No profiles found matching the filter.</p>
      )}
    </div>
  );
};

export default ProfessionalsList; 