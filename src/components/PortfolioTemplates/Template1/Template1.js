import React from 'react';
import Footer from '../../Common/Footer';

const Template1 = ({ data }) => {
  const { hero, about, skills, services, portfolio, testimonials, blog, contact } = data;

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fffbe6', padding: 24 }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: 24 }}>
        <img src={hero.profileImage} alt={hero.name} className="profile-img" />
        <h1>👤 {hero.name}</h1>
        <h2>{hero.title}</h2>
        <p>{hero.tagline}</p>
      </section>
      {/* About Me */}
      <section style={{ margin: '2rem 0' }}>
        <h3>📝 About Me</h3>
        <p>{about.bio}</p>
        <p>Email: {about.email} | Phone: {about.phone}</p>
        <p>Location: {about.location}</p>
        <p>Socials: {about.socials}</p>
      </section>
      {/* Skills */}
      <section style={{ margin: '2rem 0' }}>
        <h3>💡 Skills</h3>
        <ul style={{ display: 'flex', gap: 12, listStyle: 'none', padding: 0 }}>
          {skills.map((s, i) => <li key={i} style={{ background: '#ffe066', padding: '4px 12px', borderRadius: 8 }}>{s}</li>)}
        </ul>
      </section>
      {/* Services */}
      <section style={{ margin: '2rem 0' }}>
        <h3>🛠️ Services</h3>
        <div className="services-flex" style={{ display: 'flex', gap: 16 }}>
          {services.map((srv, i) => (
            <div key={i} style={{ background: '#fff3bf', padding: 16, borderRadius: 8, flex: 1 }}>
              <h4>{srv.title}</h4>
              <p>{srv.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Portfolio */}
      <section style={{ margin: '2rem 0' }}>
        <h3>📁 Portfolio</h3>
        <div className="portfolio-flex" style={{ display: 'flex', gap: 16 }}>
          {portfolio.map((proj, i) => (
            <div key={i} style={{ background: '#e7f5ff', padding: 16, borderRadius: 8, flex: 1 }}>
              <img src={proj.image} alt={proj.title} className="portfolio-img" />
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section style={{ margin: '2rem 0' }}>
        <h3>💬 Testimonials</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {testimonials.filter(Boolean).map((t, i) => (
            <li key={i} style={{ background: '#d3f9d8', margin: '8px 0', padding: 12, borderRadius: 8 }}>
              <em>"{t}"</em>
            </li>
          ))}
        </ul>
      </section>
      {/* Blog */}
      <section style={{ margin: '2rem 0' }}>
        <h3>📰 Blog</h3>
        <h4>{blog.title}</h4>
        <p>{blog.summary}</p>
      </section>
      {/* Contact */}
      <section style={{ margin: '2rem 0' }}>
        <h3>📞 Contact</h3>
        <p>{contact.message}</p>
        <p>Email: {contact.email} | Phone: {contact.phone}</p>
      </section>
      <Footer />
    </div>
  );
};

export default Template1; 