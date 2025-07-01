import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import HomeSection from '../components/sections/HomeSection';
import ProductsSection from '../components/sections/ProductsSection';
import AboutSection from '../components/sections/AboutSection';
import TrustSection from '../components/sections/TrustSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <>
      <Head>
        <title>SophIA</title>
        <meta name="description" content="SophIA" />
      </Head>
      <div className={styles.container}>
        <motion.nav
          className={styles.navbar}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className={styles.logo}>
            <img src="/logos/sophia.png" alt="SophIA logo" className={styles.logoImage} />
            <span>SophIA</span>
          </a>
          <div className={styles.links}>
            <a href="#home" className={active === 'home' ? 'active' : ''}>Home</a>
            <a href="#products" className={active === 'products' ? 'active' : ''}>Productos</a>
            <a href="#about" className={active === 'about' ? 'active' : ''}>Quiénes somos</a>
            <a href="#trust" className={active === 'trust' ? 'active' : ''}>Confían en nosotros</a>
            <a href="#contact" className={active === 'contact' ? 'active' : ''}>Contacta</a>
          </div>
        </motion.nav>
        <HomeSection />
        <ProductsSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
      </div>
    </>
  );
}
