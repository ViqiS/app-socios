import React from 'react';
import Promotions from '../components/Promotions';
import CreatePromotion from '../components/CreatePromotion';
import styles from './discounts.module.css';

export default function Discounts() {
    return (
        <section className={styles.containerDiscounts}>

            <div className={styles.containerDiscountsActive}>
                <h1 className={styles.titleDiscounts}>Active discounts</h1>
                <div className={styles.containerPromotions}>
                    <Promotions/>
                </div>
            </div>

            <div className={styles.containerCreatePromotion}>
                <CreatePromotion/>
            </div>

        </section>

    )
}