import React from "react";
import Image from "next/image";
import styles from './promotions.module.css';

export default function Promotions() {
  const promociones = [
    {
      title: "20% DE DESCUENTO",
      caducidad: "Vencimiento 10/03/2024",
      socio: "Mc Donalds",
      imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
    {
    title: "50% DE DESCUENTO",
    caducidad: "Vencimiento 23/12/2023",
    socio: "Nike",
    imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
    {
      title: "25% DE DESCUENTO",
      caducidad: "Vencimiento 04/05/2023",
      socio: "BurgerKing",
      imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
    {
      title: "2x1",
      caducidad: "Vencimiento 30/05/2023",
      socio: "Amazon",
      imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
    {
      title: "15% DE DESCUENTO",
      caducidad: "Vencimiento 28/05/2023",
      socio: "Nike",
      imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
    {
      title: "3x2",
      caducidad: "Vencimiento 15/05/2023",
      socio: "Nike",
      imagen: "https://media.informabtl.com/wp-content/uploads/2019/12/8c3dc6b5-bigstock-business-advertising-promotion-269394103.jpg"
    },
  ]

  const cards = promociones.map((promo, index) => (
    <div key={index} className={styles.card}>
          <figure className={styles.containerImage}>
            <Image className={styles.imagePromotion} src={promo.imagen} alt="Promotions" width={100} height={100}/>
          </figure>
          <div className={styles.info}>
            <p className={styles.titleCard}>{promo.title}</p>
            <div>
            <p className={styles.caducidad}>{promo.caducidad}</p>
            <p className={styles.socio}>Socio: {promo.socio}</p>
            </div>
          </div>
        </div>
  ))

  return (
    <section className={styles.containerPromotions}>
      <div className={styles.containerCards}>
      {cards}
      </div>

    </section>
  )
}