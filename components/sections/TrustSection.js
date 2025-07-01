import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import styles from '../../styles/Home.module.css';

const sponsors = [
  {
    name: 'UC3M',
    url: 'https://www.uc3m.es',
    logo: '/logos/uc3m.jpg',
  },
  {
    name: 'EOI',
    url: 'https://www.eoi.es',
    logo: '/logos/eoi.jpg',
  },
  {
    name: 'Santander X',
    url: 'https://www.santanderx.com',
    logo: '/logos/santander_x.jpg',
  },
  {
    name: 'FECOMA',
    url: 'https://fecoma.coop/',
    logo: '/logos/fecoma.jpg',
  },
];

export default function TrustSection() {
  return (
    <motion.section
      id="trust"
      className={styles.trustSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1>Confían en nosotros</h1>
      <FadeInWhenVisible className={styles.sponsorGrid}>
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sponsorLink}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={styles.sponsorLogo}
            />
          </a>
        ))}
      </FadeInWhenVisible>
    </motion.section>
  );
}
