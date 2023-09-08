import React from 'react';
import styles from './login.module.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';
import Link from 'next/link';

const links = [{
  label: "You don't have an account?",
  route: '/register'
}]

export default function Login() {
  return (
    <section className={styles.sectionLogin}>
      
      <div className={styles.shape}>
        <div className={styles.containerLogin}>
          <RiAccountCircleFill className={styles.iconAccount}/>
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
          <button className={styles.buttonLogin}>
            <Link href='/home'>Login</Link>
            </button>
          <div className={styles.inputQuestions}>
            <div className={styles.divRemember}>
              <input type="checkbox" className={styles.rememberCheck} />
              <p className={styles.remember}>Remember</p>
            </div>
            {links.map(({ label, route }) => 
            <span key={route} className={styles.have}>
              <Link href={route}>
                {label}
              </Link>
            </span>
            )}
          </div>
          <div className={styles.divForgot}>
            <span className={styles.forgot}>Forgot your password?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
