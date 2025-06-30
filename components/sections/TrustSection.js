import { useRef } from 'react';
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
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 0;
    el.scrollBy({ left: dir * (cardWidth + 24) * 2, behavior: 'smooth' });
  };

  return (
    <section id="trust" className={styles.trustSection}>
    <h1 className={styles.title}>Confían en nosotros</h1>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
          onClick={() => scroll(-1)}
          aria-label="Anterior"
        >
          &#8249;
        </button>
        <div className={styles.carouselTrack} ref={trackRef}>
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
        </div>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
          onClick={() => scroll(1)}
          aria-label="Siguiente"
        >
          &#8250;
        </button>
      </div>
    </section>

  );
}
