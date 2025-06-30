import styles from '../../styles/Home.module.css';

const sponsors = [
  {
    name: 'UC3M',
    url: 'https://www.uc3m.es',
    logo: '/logos/uc3m.svg',
  },
  {
    name: 'EOI',
    url: 'https://www.eoi.es',
    logo: '/logos/eoi.svg',
  },
  {
    name: 'Santander X',
    url: 'https://www.santanderx.com',
    logo: '/logos/santanderx.svg',
  },
  {
    name: 'FECOMA',
    url: 'https://fecoma.info',
    logo: '/logos/fecoma.svg',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className={`${styles.section} ${styles.trust}`}>
      <h1>Confían en nosotros</h1>
      <div className={styles.trustLogos}>
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={styles.trustLogoImg}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
