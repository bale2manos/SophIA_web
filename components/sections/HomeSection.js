import styles from '../../styles/Home.module.css';

export default function HomeSection() {
  return (
    <section id="home" className={`${styles.section} ${styles.home}`}>
      <div className={styles.homeContent}>
        <img
          src="/logos/sophia.png"
          alt="SophIA logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.tagline}>La IA al servicio de los profesores.</h1>
        <p className={styles.description}>
          SophIA es una plataforma educativa basada en IA que ayuda a personalizar
          el aprendizaje, automatizar tareas docentes y mejorar la experiencia del
          alumnado sin sustituir el papel del profesor. Una IA pensada para
          profesores: crea materiales, da feedback y adapta contenidos en
          segundos. Sin complicaciones, sin perder el control.
        </p>
      </div>
    </section>
  );
}
