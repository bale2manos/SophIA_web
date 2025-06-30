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
    <section id="trust" className={styles.trustSection}>
      <h1>Confían en nosotros</h1>
      <div className={styles.sponsorGrid}>
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
    </section>

  );
}
