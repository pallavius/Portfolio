import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  'Hero',
  'About Me',
  'Skills',
  'Services',
  'Portfolio',
  'Testimonials',
  'Blog',
  'Contact',
];

const initialForm = {
  hero: { name: '', title: '', tagline: '', profileImage: '' },
  about: { bio: '', email: '', phone: '', location: '', socials: '' },
  skills: [''],
  services: [ { title: '', description: '' }, { title: '', description: '' }, { title: '', description: '' } ],
  portfolio: [ { title: '', image: '', description: '' }, { title: '', image: '', description: '' }, { title: '', image: '', description: '' } ],
  testimonials: ['', '', ''],
  blog: { title: '', summary: '' },
  contact: { message: '', email: '', phone: '' },
};

const PortfolioForm = ({ initialData }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleNext = () => setStep((s) => Math.min(s + 1, sections.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  // Hero
  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, hero: { ...prev.hero, [name]: value } }));
  };
  // About
  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, about: { ...prev.about, [name]: value } }));
  };
  // Skills
  const handleSkillChange = (i, value) => {
    setForm((prev) => {
      const skills = [...prev.skills];
      skills[i] = value;
      return { ...prev, skills };
    });
  };
  const addSkill = () => setForm((prev) => ({ ...prev, skills: [...prev.skills, ''] }));
  const removeSkill = (i) => setForm((prev) => ({ ...prev, skills: prev.skills.filter((_, idx) => idx !== i) }));
  // Services
  const handleServiceChange = (i, e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const services = [...prev.services];
      services[i][name] = value;
      return { ...prev, services };
    });
  };
  // Portfolio
  const handleProjectChange = (i, e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const portfolio = [...prev.portfolio];
      portfolio[i][name] = value;
      return { ...prev, portfolio };
    });
  };
  // Testimonials
  const handleTestimonialChange = (i, value) => {
    setForm((prev) => {
      const testimonials = [...prev.testimonials];
      testimonials[i] = value;
      return { ...prev, testimonials };
    });
  };
  // Blog
  const handleBlogChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, blog: { ...prev.blog, [name]: value } }));
  };
  // Contact
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, contact: { ...prev.contact, [name]: value } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('portfolioProfile', JSON.stringify(form));
    navigate('/professionals');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Portfolio Form</h2>
      <div>
        <strong>Step {step + 1} of {sections.length}: {sections[step]}</strong>
      </div>
      <div style={{ margin: '1rem 0' }}>
        {/* Hero */}
        {step === 0 && (
          <div>
            <label>Name:<br /><input type="text" name="name" value={form.hero.name} onChange={handleHeroChange} required /></label><br />
            <label>Title:<br /><input type="text" name="title" value={form.hero.title} onChange={handleHeroChange} required /></label><br />
            <label>Tagline:<br /><input type="text" name="tagline" value={form.hero.tagline} onChange={handleHeroChange} /></label><br />
            <label>Profile Image URL:<br /><input type="text" name="profileImage" value={form.hero.profileImage} onChange={handleHeroChange} /></label>
          </div>
        )}
        {/* About Me */}
        {step === 1 && (
          <div>
            <label>Bio:<br /><textarea name="bio" value={form.about.bio} onChange={handleAboutChange} rows={3} /></label><br />
            <label>Email:<br /><input type="email" name="email" value={form.about.email} onChange={handleAboutChange} /></label><br />
            <label>Phone:<br /><input type="text" name="phone" value={form.about.phone} onChange={handleAboutChange} /></label><br />
            <label>Location:<br /><input type="text" name="location" value={form.about.location} onChange={handleAboutChange} /></label><br />
            <label>Socials (comma separated):<br /><input type="text" name="socials" value={form.about.socials} onChange={handleAboutChange} placeholder="LinkedIn, Twitter, GitHub" /></label>
          </div>
        )}
        {/* Skills */}
        {step === 2 && (
          <div>
            <label>Skills/Tags:</label><br />
            {form.skills.map((skill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <input type="text" value={skill} onChange={e => handleSkillChange(i, e.target.value)} />
                <button type="button" onClick={() => removeSkill(i)} disabled={form.skills.length === 1} style={{ marginLeft: 4 }}>-</button>
              </div>
            ))}
            <button type="button" onClick={addSkill} style={{ marginTop: 4 }}>Add Skill</button>
          </div>
        )}
        {/* Services */}
        {step === 3 && (
          <div>
            <label>Services (3):</label><br />
            {form.services.map((service, i) => (
              <div key={i} style={{ marginBottom: 8, border: '1px solid #eee', padding: 8 }}>
                <label>Title:<br /><input type="text" name="title" value={service.title} onChange={e => handleServiceChange(i, e)} /></label><br />
                <label>Description:<br /><input type="text" name="description" value={service.description} onChange={e => handleServiceChange(i, e)} /></label>
              </div>
            ))}
          </div>
        )}
        {/* Portfolio */}
        {step === 4 && (
          <div>
            <label>Portfolio Projects (3):</label><br />
            {form.portfolio.map((project, i) => (
              <div key={i} style={{ marginBottom: 8, border: '1px solid #eee', padding: 8 }}>
                <label>Title:<br /><input type="text" name="title" value={project.title} onChange={e => handleProjectChange(i, e)} /></label><br />
                <label>Image URL:<br /><input type="text" name="image" value={project.image} onChange={e => handleProjectChange(i, e)} /></label><br />
                <label>Description:<br /><input type="text" name="description" value={project.description} onChange={e => handleProjectChange(i, e)} /></label>
              </div>
            ))}
          </div>
        )}
        {/* Testimonials */}
        {step === 5 && (
          <div>
            <label>Testimonials (1–3):</label><br />
            {form.testimonials.map((testimonial, i) => (
              <div key={i} style={{ marginBottom: 4 }}>
                <input type="text" value={testimonial} onChange={e => handleTestimonialChange(i, e.target.value)} placeholder={`Testimonial ${i + 1}`} />
              </div>
            ))}
          </div>
        )}
        {/* Blog */}
        {step === 6 && (
          <div>
            <label>Blog Title:<br /><input type="text" name="title" value={form.blog.title} onChange={handleBlogChange} /></label><br />
            <label>Summary (optional):<br /><textarea name="summary" value={form.blog.summary} onChange={handleBlogChange} rows={2} /></label>
          </div>
        )}
        {/* Contact */}
        {step === 7 && (
          <div>
            <label>Message Text:<br /><textarea name="message" value={form.contact.message} onChange={handleContactChange} rows={2} /></label><br />
            <label>Email:<br /><input type="email" name="email" value={form.contact.email} onChange={handleContactChange} /></label><br />
            <label>Phone:<br /><input type="text" name="phone" value={form.contact.phone} onChange={handleContactChange} /></label>
          </div>
        )}
      </div>
      <div>
        <button type="button" className="btn" onClick={handleBack} disabled={step === 0}>Back</button>
        {step < sections.length - 1 && (
          <button type="button" className="btn" onClick={handleNext}>Next</button>
        )}
        {step === sections.length - 1 && (
          <button type="submit" className="btn">Submit</button>
        )}
      </div>
    </form>
  );
};

export default PortfolioForm; 