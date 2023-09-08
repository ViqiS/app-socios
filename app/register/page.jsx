import React from 'react';
import styles from './register.module.css';
import { FaRegUser } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdDriveFileRenameOutline, MdPassword } from 'react-icons/md';
import Link from 'next/link';

const links = [{
  label: 'Do you already have an account?',
  route: '/login'
}]
export default function Login() {
  return (
    <section className={styles.sectionLogin}>
      
      <div className={styles.shape}>
        <div className={styles.containerCheckIn}>
        <FaRegUser className={styles.iconAccount}/>
          <h1 className={styles.title}>Register</h1>
          <div className={styles.containerInput}>
            <div className={styles.divUser}>
              <BiUser className={styles.icon} />
              <input type="text" className={styles.userName} placeholder='Username' />
            </div>
            <div className={styles.divPassword}>
              <MdPassword className={styles.icon} />
              <input type="password" className={styles.password} placeholder='********' />
            </div>
            <div className={styles.divName}>
              <MdDriveFileRenameOutline className={styles.icon} />
              <input type="text" className={styles.name} placeholder='First name and last name' />
            </div>
            <div className={styles.divCommerce}>
              <BsShop className={styles.icon} />
              <input type="text" className={styles.commerce} placeholder='Name of your store' />
            </div>
            <div className={styles.divEmail}>
              <HiOutlineMail className={styles.icon} />
              <input type="email" className={styles.email} placeholder='Email' />
            </div>
            <div className={styles.divPlataform}>
              <span className={styles.spanPlataform}>Choose your platform: </span>
              <select name='select' className={styles.checkPlatform} >
              <option value="magento">Magento</option>
              <option value="woocommerce">WooCommerce</option>
                </select>
              </div>
          </div>
          <button className={styles.buttonCheckIn}>Check in</button>
          <div className={styles.inputQuestions}> 
            {links.map(({ label, route }) => 
            <span key={route} className={styles.already}>
              <Link href={route}>
                {label}
              </Link>
            </span>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}
