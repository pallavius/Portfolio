import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateSelector = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    setSelected(templateId);
    localStorage.setItem('selectedTemplate', templateId);
    navigate('/edit-profile');
  };

  return (
    <div>
      <h2>Choose Your Template</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div
          style={{ border: selected === 1 ? '2px solid #f90' : '1px solid #ccc', padding: '1rem', cursor: 'pointer' }}
          onClick={() => handleSelect(1)}
        >
          <h3>Template 1</h3>
          <p>Preview of Template 1</p>
        </div>
        <div
          style={{ border: selected === 2 ? '2px solid #f90' : '1px solid #ccc', padding: '1rem', cursor: 'pointer' }}
          onClick={() => handleSelect(2)}
        >
          <h3>Template 2</h3>
          <p>Preview of Template 2</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector; 