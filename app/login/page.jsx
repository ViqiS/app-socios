import React from 'react';
import styles from './login.module.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';

export default function Login() {
  return (
    <section className={styles.sectionLogin}>
      <div className={styles.divBackground}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.colorHex}>
        <div className={styles.containerLogin}>
          <h1 className={styles.title}>Sign in</h1>
          <div className={styles.containerInput}>
            <div className={styles.divUser}>
              <BiUser className={styles.icon} />
              <input type="text" className={styles.userName} placeholder='Username' />
            </div>
            <div className={styles.divPassword}>
              <MdPassword className={styles.icon} />
              <input type="password" className={styles.password} placeholder='********' />
            </div>
          </div>
          <button className={styles.buttonLogin}>LOGIN</button>
          <div className={styles.inputQuestions}>
            <div className={styles.divRemember}>
              <input type="checkbox" className={styles.rememberCheck} />
              <p className={styles.remember}>Remember</p>
            </div>
            <span className={styles.forgot}>Forgot your password?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
