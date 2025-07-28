import React, { useEffect, useState } from 'react';
import PortfolioForm from '../components/PortfolioForm/PortfolioForm';

const EditProfile = () => {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('portfolioProfile');
    if (data) setInitialData(JSON.parse(data));
  }, []);

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <PortfolioForm initialData={initialData} />
    </div>
  );
};

export default EditProfile; 