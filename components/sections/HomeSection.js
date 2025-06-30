'use client';
import { useEffect, useState, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';

export default function HomeSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`${styles.section} ${styles.home}`}>
      {mounted && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 40, density: { enable: true, area: 800 } },
              color: { value: '#5ba2c5' },
              shape: { type: 'circle' },
              opacity: { value: 0.3, anim: { enable: true, speed: 1, minimumValue: 0.1 } },
              size: { value: { min: 2, max: 6 } },
              move: { enable: true, speed: 2, random: true, outModes: 'bounce' },
              links: { enable: true, distance: 150, color: '#d3bfae', opacity: 0.2, width: 1 },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 0,
          }}
        />
      )}

      <motion.div
        className={styles.homeContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className={styles.leftColumn}>
          <img src="/img/home.png" alt="Ilustración SophIA" className={styles.heroImage} />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.logoContainer}>
          <img src="/logos/sophia.png" alt="SophIA logo" className={styles.heroLogo} />
          <span className={styles.logoText}>SophIA</span>
          </div>
          <h1 className={styles.tagline}>La IA al servicio de los profesores.</h1>
          <p className={styles.description}>
            SophIA es una plataforma educativa basada en IA que ayuda a personalizar
            el aprendizaje, automatizar tareas docentes y mejorar la experiencia del
            alumnado sin sustituir el papel del profesor. Una IA pensada para
            profesores: crea materiales, da feedback y adapta contenidos en
            segundos. Sin complicaciones, sin perder el control.
          </p>
          <button className={styles.ctaButton} onClick={scrollToContact}>
            Solicita una demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
