import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import styles from '../../styles/Home.module.css';
import FloatingProductDetail from '../FloatingProductDetail';

const products = [
  {
    id: 'gen',
    title: 'Generador de contenido',
    short: 'Crea ejercicios, resúmenes y exámenes al instante.',
    long:
      'SophIA genera materiales didácticos como test, flashcards, resúmenes y modelos de examen de forma automática.',
    image: '/img/gen-content.png',
  },
  {
    id: 'interactive',
    title: 'Entornos interactivos',
    short: 'Simula clases activas con rol, gamificación o proyectos.',
    long:
      'Implementa dinámicas de roleplay, proyectos o gamificación que el docente puede configurar según sus objetivos.',
    image: '/img/interactive.png',
  },
  {
    id: 'auto',
    title: 'Corrección automática',
    short: 'Evalúa tareas y tests según tus propios criterios.',
    long:
      'Define criterios de evaluación y deja que SophIA corrija actividades de forma automática y revisable.',
    image: '/img/auto-correct.png',
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(null);

  return (
    <motion.section
      id="products"
      className={`${styles.section} ${styles.products}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {active && (
        <FloatingProductDetail product={active} onClose={() => setActive(null)} />
      )}
      <h2 className={styles.productsTitle}>
        Potencia tu aula con inteligencia artificial
      </h2>
      <FadeInWhenVisible className={styles.productGrid}>
        {products.map((p) => (
          <div
            key={p.id}
            className={styles.productCard}
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <h3>{p.title}</h3>
            <p>{p.short}</p>
                        <button
              className={styles.productButton}
              onClick={() => setActive(p)}
              aria-label={`Más información sobre ${p.title}`}
            >
              +
            </button>
          </div>
        ))}
      </FadeInWhenVisible>
    </motion.section>
  );
}
