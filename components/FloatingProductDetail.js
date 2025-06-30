import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function FloatingProductDetail({ product, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className={styles.productModalOverlay} onClick={onClose}>
      <div
        className={styles.productModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h2>{product.title}</h2>
        <p>{product.long}</p>
      </div>
    </div>
  );
}
