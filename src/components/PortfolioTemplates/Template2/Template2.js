import React from 'react';
import Footer from '../../Common/Footer';

const Template2 = ({ data }) => {
  const { hero, about, skills, services, portfolio, testimonials, blog, contact } = data;

  return (
    <div style={{ fontFamily: 'serif', background: '#e3fafc', padding: 24 }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'left', padding: 24, background: '#99e9f2', borderRadius: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src={hero.profileImage} alt={hero.name} className="profile-img" />
          <div>
            <h1 style={{ margin: 0 }}>👤 {hero.name}</h1>
            <h2 style={{ margin: 0 }}>{hero.title}</h2>
            <p>{hero.tagline}</p>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section style={{ margin: '2rem 0', background: '#c5f6fa', borderRadius: 12, padding: 16 }}>
        <h3>📝 About Me</h3>
        <p>{about.bio}</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>Email: {about.email}</span>
          <span>Phone: {about.phone}</span>
          <span>Location: {about.location}</span>
        </div>
        <p>Socials: {about.socials}</p>
      </section>
      {/* Skills */}
      <section style={{ margin: '2rem 0' }}>
        <h3>💡 Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {skills.map((s, i) => <span key={i} style={{ background: '#22b8cf', color: '#fff', padding: '4px 12px', borderRadius: 8 }}>{s}</span>)}
        </div>
      </section>
      {/* Services */}
      <section style={{ margin: '2rem 0', background: '#a5d8ff', borderRadius: 12, padding: 16 }}>
        <h3>🛠️ Services</h3>
        <div className="services-flex" style={{ display: 'flex', gap: 16 }}>
          {services.map((srv, i) => (
            <div key={i} style={{ background: '#fff', padding: 16, borderRadius: 8, flex: 1, boxShadow: '0 2px 8px #ccc' }}>
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
            <div key={i} style={{ background: '#fff', padding: 16, borderRadius: 8, flex: 1, boxShadow: '0 2px 8px #ccc' }}>
              <img src={proj.image} alt={proj.title} className="portfolio-img" />
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section style={{ margin: '2rem 0', background: '#d0ebff', borderRadius: 12, padding: 16 }}>
        <h3>💬 Testimonials</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {testimonials.filter(Boolean).map((t, i) => (
            <li key={i} style={{ background: '#fff', margin: '8px 0', padding: 12, borderRadius: 8, boxShadow: '0 2px 8px #ccc' }}>
              <em>"{t}"</em>
            </li>
          ))}
        </ul>
      </section>
      {/* Blog */}
      <section style={{ margin: '2rem 0', background: '#e3fafc', borderRadius: 12, padding: 16 }}>
        <h3>📰 Blog</h3>
        <h4>{blog.title}</h4>
        <p>{blog.summary}</p>
      </section>
      {/* Contact */}
      <section style={{ margin: '2rem 0', background: '#fff', borderRadius: 12, padding: 16 }}>
        <h3>📞 Contact</h3>
        <p>{contact.message}</p>
        <p>Email: {contact.email} | Phone: {contact.phone}</p>
      </section>
      <Footer />
    </div>
  );
};

export default Template2; 