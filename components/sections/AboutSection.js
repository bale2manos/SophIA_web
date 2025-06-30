import styles from "../../styles/Home.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <h1>Quiénes somos</h1>

      <h2>Historia</h2>
      <p>Samu y yo</p>

      <h2>Equipo fundador</h2>
      <p>
        El equipo fundador es uno de los grandes activos de SophIA:&nbsp;
        <strong>Guillermo</strong> aporta visión técnica y estratégica, mientras
        que
        <strong>Samuel</strong> complementa con enfoque institucional y
        pedagógico.
      </p>

      <h3>Guillermo Fernández Rodríguez</h3>
      <p>
        Guillermo Fernández Rodríguez es estudiante del grado en Ingeniería
        Industrial en la Universidad Carlos III de Madrid (UC3M). Ha realizado
        una estancia académica en la Universidad de California, Berkeley, y ha
        trabajado como analista en McKinsey &amp; Company, así como en The
        Startup CFO, donde ha participado en proyectos de transformación
        digital. Su perfil se caracteriza por un sólido dominio técnico,
        pensamiento estructurado y orientación a resultados con impacto.
      </p>

      <h3>Samuel García Durá</h3>
      <p>
        Samuel García Durá cursa el doble grado en Derecho y Estudios
        Internacionales en la UC3M. Durante su intercambio académico en
        Berkeley, recibió una beca para realizar prácticas en el Senado del
        Estado de California, centradas en el análisis del uso de la
        inteligencia artificial en el sector energético. Su trayectoria aporta
        una perspectiva humanista y estratégica, especialmente valiosa en
        ámbitos como las políticas públicas, la regulación tecnológica y la
        comunicación institucional, todos ellos cruciales para una implantación
        ética y sostenible de la inteligencia artificial en el ámbito educativo.
      </p>

      <h2>Colaboraciones</h2>
      <p>
        Además, el equipo se encuentra en proceso de formalizar colaboraciones
        activas con grupos de investigación y departamentos de la propia
        Universidad Carlos III de Madrid (UC3M), a través de la modalidad de
        Ofertas de Servicio regulada en el Artículo 60. Esta modalidad contempla
        "trabajos que no generen resultados protegibles a través de derechos de
        propiedad intelectual e industrial, cuyo importe no supere
        aproximadamente los 6.000 € y cuyo plazo no exceda aproximadamente de
        seis meses" (modelo en Contratos). Este marco permite establecer
        acuerdos ágiles y de corto plazo, proporcionando un entorno favorable
        para el desarrollo, pilotaje y validación tecnológica del proyecto.
      </p>

      <p>
        Asimismo, está previsto que ambos fundadores cursen el próximo año
        académico en dos de las instituciones europeas más relevantes en el
        ámbito de la tecnología educativa e innovación: Imperial College London
        y University College London (UCL). Este componente internacional no solo
        amplía su red de contactos y oportunidades, sino que también consolida
        la proyección global de SophIA.
      </p>

      <p>
        En conjunto, esta combinación de capacidades técnicas, estratégicas e
        institucionales posiciona al equipo de SophIA como un motor fundamental
        para el desarrollo y escalabilidad del proyecto.
      </p>

      <blockquote>
        <p>
          <strong>
            Nuestra experiencia conjunta en Berkeley nos sorprendió por el uso
            de la IA en la educación estadounidense y nos inspira a introducir
            un cambio revolucionario en el sistema universitario español.
          </strong>
        </p>
      </blockquote>
    </section>
  );
}
