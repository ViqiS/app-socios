import React from 'react';
import styles from './createPromotion.module.css';


export default function CreatePromotion() {
  return (

    <section className={styles.containerCreatePromotion}>
    <h1 className={styles.titleCreate}>Create new promotion</h1>

    <div className={styles.containerInput}>
      <label className={styles.labelInput}>
        <p className={styles.pInput}>Title</p>
        <input 
        type="text" 
        placeholder='Title'
        className={styles.input}
        />
      </label>

      <label className={styles.labelInput}>
        <p className={styles.pInput}>Date</p>
        <input 
        type="date" 
        placeholder='Lapse'
        className={styles.input}
        />
      </label>
      
      <div className={styles.containerSelect}>
      <label htmlFor='partners' className={styles.labelSelect}>Select partner</label>
      <select className={styles.select} name='select' id='partners'>
      <option value="">User 1</option>
      <option value="">User 2</option>
      <option value="">User 3</option>
      <option value="">User 4</option>
      </select>
      </div>

      <label className={`${styles.labelInput} ${styles.labelImage}`}>
        <p className={styles.pInput}>Choose image</p>
        <input 
        type="file"
        placeholder='Select Image'
        className={`${styles.input} ${styles.inputImage}`}
        />
      </label>
      
      
      
    </div>

    <button className={styles.buttonCreate}>Create promotion</button>
    </section>

  )
}