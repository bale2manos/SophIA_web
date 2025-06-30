import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>SophIA</title>
        <meta name="description" content="SophIA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#home" className={styles.logo}>SophIA</a>
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">Quiénes somos</a>
            <a href="#trust">Confían en nosotros</a>
            <a href="#contact">Contacta</a>
          </div>
        </nav>
        <section id="home" className={`${styles.section} ${styles.home}`}>
          <h1>Home</h1>
        </section>
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <h1>Quiénes somos</h1>
        </section>
        <section id="trust" className={`${styles.section} ${styles.trust}`}>
          <h1>Confían en nosotros</h1>
        </section>
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <h1>Contacta</h1>
        </section>
      </div>
    </>
  );
}
