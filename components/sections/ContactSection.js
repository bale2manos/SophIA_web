import { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function ContactSection() {
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profile || !name.trim() || !email.trim()) {
      setError('Por favor, selecciona tu perfil y completa nombre y email.');
      return;
    }
    setError('');
    const url =
      profile === 'profesor'
        ? 'https://calendly.com/sophia-demo/profesor'
        : 'https://calendly.com/sophia-demo/institucion';
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className={`${styles.section} ${styles.contact}`}>
      <h1>Contacta</h1>
      <p className={styles.contactDescription}>
        Solicita una demo personalizada y resuelve todas tus dudas.
      </p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="perfil"
              value="profesor"
              checked={profile === 'profesor'}
              onChange={() => setProfile('profesor')}
            />{' '}
            Profesor
          </label>
          <label>
            <input
              type="radio"
              name="perfil"
              value="institucion"
              checked={profile === 'institucion'}
              onChange={() => setProfile('institucion')}
            />{' '}
            Institución
          </label>
        </div>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Cuéntanos tus dudas..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          Agendar reunión
        </button>
      </form>
    </section>
  );
}
