import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import styles from "../../styles/Home.module.css";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className={`${styles.section} ${styles.about}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1>Quiénes somos</h1>

      <FadeInWhenVisible className={styles.aboutContent}>
        {/* Columna izquierda: fundadores */}
        <div className={styles.aboutLeft}>
          <div className={styles.founderGrid}>
            <div className={styles.founderCard}>
              <a
                href="https://www.linkedin.com/in/guillermo-fer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/guillermo.jpeg"
                  alt="Guillermo Fernández"
                  className={styles.founderImage}
                />
              </a>
              <h3>Guillermo Fernández</h3>
              <p>
                Estudiante de Ingeniería Industrial en la UC3M. Ha estudiado en UC Berkeley y trabajado en McKinsey & Company y The Startup CFO. Apasionado por el impacto tecnológico con enfoque estructurado.
              </p>
            </div>

            <div className={styles.founderCard}>
              <a
                href="https://www.linkedin.com/in/samuel-garcia-dura-6aaa00226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/samuel.jpeg"
                  alt="Samuel García"
                  className={styles.founderImage}
                />
              </a>
              <h3>Samuel García</h3>
              <p>
                Estudiante de Derecho y Estudios Internacionales en la UC3M. Durante su estancia en Berkeley, trabajó en el Senado de California. Aporta una visión estratégica e institucional al proyecto.
              </p>
            </div>

            <div className={styles.founderCard}>
              <a
                href="https://www.linkedin.com/in/juan-leal-aliaga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/juan.jpeg"
                  alt="Juan Leal"
                  className={styles.founderImage}
                />
              </a>
              <h3>Juan Leal</h3>
              <p>
              Estudiante del Máster en Inteligencia Artificial en la UC3M, Juan es también desarrollador de software enfocado en IA dentro de SophIA y colaboró con Ferrovial Construction como AI Software Developer .</p>            </div>

            <div className={styles.founderCard}>
              <a
                href="https://www.linkedin.com/in/javier-pallares-de-bonrostro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/javier.jpeg"
                  alt="Javier Pallarés"
                  className={styles.founderImage}
                />
              </a>
              <h3>Javier Pallarés</h3>
              <p>
                Estudiante de Ingeniería Informática en la UC3M y trabajó en Deloitte en el área de Cyber T&T. Además, fue galardonado con el Premio a la Excelencia 2024 del Consejo Social de la UC3M.
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: resumen institucional */}
        <div className={styles.aboutRight}>
          <p>
            SophIA nace de la convicción de que la inteligencia artificial puede transformar la educación superior: no como sustituto del docente, sino como aliado que potencie la personalización, la eficiencia y el impacto del aprendizaje.
          </p>

          <p>
            El proyecto combina dos perspectivas complementarias: un enfoque técnico y estructurado centrado en la innovación con IA, y una visión estratégica e institucional orientada a las políticas educativas. Esta fusión permite abordar los desafíos de la transformación digital con solidez tecnológica y sensibilidad humanista.
          </p>

          <p>
            Desde la UC3M, estamos formalizando colaboraciones con grupos de investigación mediante <em>Ofertas de Servicio</em> (art. 60), una vía ágil y eficaz para validar el prototipo con docentes reales en entornos universitarios.
          </p>

          <p>
            Además, el próximo curso los fundadores estudiarán en <strong>Imperial College London</strong> y <strong>University College London</strong>, dos referentes europeos en innovación educativa. Esta dimensión internacional amplía la red académica y refuerza la ambición global del proyecto.
          </p>

          <blockquote className={styles.visionQuote}>
            <strong>
              La experiencia en Berkeley nos demostró cómo la IA puede revolucionar la enseñanza. Queremos traer esa visión a España.
            </strong>
          </blockquote>

        </div>


        </FadeInWhenVisible>
      </motion.section>
  );
}
