import React from "react";
import styles from './promotions.module.css';

export default function Promotions() {
  return (
    <section className={styles.containerPromotions}>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <figure className={styles.containerImage}>
            <img className={styles.imagePromotion} src="https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg" alt="" />
          </figure>
          <div className={styles.info}>
            <p className={styles.caducidad}>Vencimiento 10/03/2024</p>
            <p className={styles.socio}>Socio: Mi socio</p>
          </div>
        </div>
      </div>

    </section>
  )
}