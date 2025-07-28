import React from 'react';
import TemplateSelector from '../components/TemplateSelector/TemplateSelector';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Portfolio Generator</h1>
      <TemplateSelector />
      <p>Select a template to get started.</p>
    </div>
  );
};

export default Home; 
