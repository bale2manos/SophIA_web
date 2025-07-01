import { useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import styles from '../../styles/Home.module.css';

export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.section
      id="contact"
      className={`${styles.section} ${styles.contact}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1>Contacta</h1>
      <p className={styles.contactDescription}>
        Solicita una demo personalizada y agéndala directamente con nuestro equipo.
      </p>

      <FadeInWhenVisible className={styles.contactContainer}>
        {/* Widget Calendly */}
        <div className={styles.calendlyContainer}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/bale2manos/30min?background_color=f3ecda&text_color=000000&primary_color=1d6391"
            style={{ minWidth: '100%', height: '700px' }}
          ></div>
        </div>

        {/* Texto lateral */}
        <div className={styles.textContainer}>
          <h2>¿Por qué agendar una demo?</h2>
          <p>
            SophIA fusiona tecnología e innovación educativa para ofrecerte una solución adaptada
            a tu contexto docente o institucional.
          </p>
          <ul>
            <li>✔ Análisis personalizado según tu perfil</li>
            <li>✔ Demostración práctica con ejemplos reales</li>
            <li>✔ Resolución de dudas en directo</li>
            <li>✔ Sin compromiso</li>
          </ul>
          <p>
            Tanto si eres docente como si representas a una institución, estaremos encantados de mostrarte cómo SophIA puede marcar la diferencia en tu día a día.
          </p>
        </div>
      </FadeInWhenVisible>
    </motion.section>
  );
}
