import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomeSection from '../components/sections/HomeSection';
import ProductsSection from '../components/sections/ProductsSection';
import AboutSection from '../components/sections/AboutSection';
import TrustSection from '../components/sections/TrustSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>SophIA</title>
        <meta name="description" content="SophIA" />
      </Head>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#home" className={styles.logo}>
            <img src="/logos/sophia.png" alt="SophIA logo" className={styles.logoImage} />
            <span>SophIA</span>
          </a>
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">Quiénes somos</a>
            <a href="#trust">Confían en nosotros</a>
            <a href="#contact">Contacta</a>
          </div>
        </nav>
        <HomeSection />
        <ProductsSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
      </div>
    </>
  );
}
