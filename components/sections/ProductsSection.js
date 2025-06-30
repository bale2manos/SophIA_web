import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import FloatingProductDetail from '../FloatingProductDetail';

const products = [
  {
    id: 'gen',
    title: 'Generador de contenido',
    short: 'Crea ejercicios, res\u00famenes y ex\u00e1menes al instante.',
    long:
      'SophIA genera materiales did\u00e1cticos como test, flashcards, res\u00famenes y modelos de examen de forma autom\u00e1tica.',
    image: '/img/gen-content.jpg',
  },
  {
    id: 'interactive',
    title: 'Entornos interactivos',
    short: 'Simula clases activas con rol, gamificaci\u00f3n o proyectos.',
    long:
      'Implementa din\u00e1micas de roleplay, proyectos o gamificaci\u00f3n que el docente puede configurar seg\u00fan sus objetivos.',
    image: '/img/interactive.jpg',
  },
  {
    id: 'auto',
    title: 'Correcci\u00f3n autom\u00e1tica',
    short: 'Eval\u00faa tareas y tests seg\u00fan tus propios criterios.',
    long:
      'Define criterios de evaluaci\u00f3n y deja que SophIA corrija actividades de forma autom\u00e1tica y revisable.',
    image: '/img/auto-correct.jpg',
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="products" className={`${styles.section} ${styles.products}`}>
      {active && (
        <FloatingProductDetail product={active} onClose={() => setActive(null)} />
      )}
      <div className={styles.productGrid}>
        {products.map((p) => (
          <div
            key={p.id}
            className={styles.productCard}
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <button
              className={styles.productButton}
              onClick={() => setActive(p)}
              aria-label={`M\u00e1s informaci\u00f3n sobre ${p.title}`}
            >
              +
            </button>
            <h3>{p.title}</h3>
            <p>{p.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
