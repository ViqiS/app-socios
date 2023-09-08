'use client'
import React, { useState } from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoNotificationsSharp } from 'react-icons/io5';

const links = [{
    label: "Home",
    route: "/home"
  },
  {
    label: "Discounts",
    route: "/discounts"
  },
  {
    label: "Socios",
    route: "/notifications"
  },
  {
    label: "My account",
    route: "/my-account"
  }
]

export default function Navigation() {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  }

/*   const midpoint = Math.ceil(links.length / 2);
  const firstHalf = links.slice(0, midpoint);
  const secondHalf = links.slice(midpoint);
 */
  return (
    <section className={styles.navbar}>

        <div className={styles.divMenu}>
          <RxHamburgerMenu className={styles.menuHam}/>
        </div>
        <div className={styles.divUl}>
          <ul className={styles.ulNavMenu}>
            {links.map(({ label, route }) => (
              <li key={route} className={styles.liNavMenu}>
                <Link href={route}>{label}</Link>
              /</li>
            ))}
          </ul>
        </div>

        <div className={searchActive ? `${styles.divRight} ${styles.activeRight}` : styles.divRight}>
          <div className={searchActive ? `${styles.divSearch} ${styles.activeSearch}` : styles.divSearch}>
            <input type="search" name="" id="" placeholder="Find partners"  className={searchActive ? `${styles.searchInput} ${styles.activeInput}` : styles.searchInput}/>
            <BiSearch className={styles.iconSearch} onClick={handleSearchClick}/>
          </div>

          <div className={styles.notfications}>
            <IoNotificationsSharp className={styles.iconNotif}/>
          </div>
        </div>

            {/* <div className={styles.navLeft}>
        <ul className={styles.ulNav}>
          {firstHalf.map(({ label, route }) => (
            <li key={route} className={styles.liNav}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div> */}
{/* 
      <div className={styles.navRight}>
        <ul className={styles.ulNav}>
        {secondHalf.map(({ label, route }) => (
          <li key={route} className={styles.liNav}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
        </ul>
      </div> */}
      
    </section>
  );
}
