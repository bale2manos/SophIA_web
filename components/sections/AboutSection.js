import styles from "../../styles/Home.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <h1>Quiénes somos</h1>
      <p>
        Somos Guillermo y Samuel, estudiantes de la UC3M que descubrieron en
        Berkeley el enorme potencial de la inteligencia artificial aplicada a la
        educación. Con SophIA queremos acercar esa revolución al sistema
        universitario español.
      </p>

      <div className={styles.founderGrid}>
        <div className={styles.founderCard}>
          <h3>Guillermo Fernández</h3>
          <p>
            Ingeniero con experiencia en McKinsey y proyectos de
            digitalización.
          </p>
        </div>
        <div className={styles.founderCard}>
          <h3>Samuel García</h3>
          <p>
            Jurista e internacionalista, becado en el Senado de California para
            estudiar IA.
          </p>
        </div>
      </div>

      <p>
        Colaboramos con grupos de investigación de la UC3M para pilotar y
        validar SophIA.
      </p>

      <blockquote>
        <p>
          <strong>
            La experiencia en Berkeley nos demostró cómo la IA puede
            revolucionar la enseñanza. Queremos llevar esa visión a España.
          </strong>
        </p>
      </blockquote>
    </section>
  );
}
