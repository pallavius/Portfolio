import React, { useEffect, useState } from 'react';
import Template1 from '../components/PortfolioTemplates/Template1/Template1';
import Template2 from '../components/PortfolioTemplates/Template2/Template2';

const Portfolio = () => {
  const [profile, setProfile] = useState(null);
  const [template, setTemplate] = useState(1);

  useEffect(() => {
    const data = localStorage.getItem('portfolioProfile');
    const selected = localStorage.getItem('selectedTemplate');
    if (data) setProfile(JSON.parse(data));
    if (selected) setTemplate(Number(selected));
  }, []);

  if (!profile) {
    return <div><h1>Portfolio Page</h1><p>No profile data found.</p></div>;
  }

  return (
    <div>
      <h1>Portfolio Page</h1>
      {template === 1 ? (
        <Template1 data={profile} />
      ) : (
        <Template2 data={profile} />
      )}
    </div>
  );
};

export default Portfolio; 