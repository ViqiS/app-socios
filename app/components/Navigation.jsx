'use client'
import React, { useState, useEffect, useRef } from 'react';
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
    label: "Partner",
    route: "/notifications"
  },
  {
    label: "My account",
    route: "/my-account"
  }
]

export default function Navigation() {
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const searchContainerRef = useRef(null);

  const handleMenuOpen = () => {
    console.log('handleMenuOpen called');
    setMenuOpen(!menuOpen);
    setSearchActive(false);
    setNotificationsOpen(false);
  };
  
  const handleSearchClick = () => {
    setSearchActive(!searchActive);
    setMenuOpen(false);
    setNotificationsOpen(false);
  };
      
  const handleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
    setMenuOpen(false);
    setSearchActive(false);
  };
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        // Verificar si el clic ocurrió fuera de las solapas
        if (
          !event.target.closest('.divMenu') && 
          !event.target.closest('.divUl') && 
          !event.target.closest('.activeInput') &&
          !searchContainerRef.current.contains(event.target)
          ) {
          setMenuOpen(false);
          setSearchActive(false);
          setNotificationsOpen(false);
        }
      };
  
      // Agregar el evento de escucha de clic al documento
      document.addEventListener('click', handleOutsideClick);
  
      // Limpiar el evento cuando el componente se desmonte
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [menuOpen, notificationsOpen, searchActive]); // El evento de cerrar todo cuando haces click en cualquier lado ocurre solo cuando uno de los estados está ocurriendo


  return (
    <section className={styles.navbar}>

        <div className={styles.divMenu} onClick={handleMenuOpen}>
          <RxHamburgerMenu className={styles.menuHam}/>
        </div>
        <div className={menuOpen ? `${styles.divUl} ${styles.divUlActive}` : styles.divUl}>
          <ul className={styles.ulNavMenu}>
            {links.map(({ label, route }) => (
              <li key={route} className={menuOpen ? `${styles.liNavMenu} ${styles.liNavActive}` : styles.liNavMenu}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={searchActive ? `${styles.divRight} ${styles.activeRight}` : styles.divRight}>
          <div className={searchActive ? `${styles.divSearch} ${styles.activeSearch}` : styles.divSearch}>
            <input 
              type="search"
              name="" 
              id="" 
              placeholder="Find partners" 
              ref={searchContainerRef}
              className={searchActive ? `${styles.searchInput} ${styles.activeInput}` : styles.searchInput}/>
            <BiSearch className={styles.iconSearch} onClick={handleSearchClick}/>
          </div>

          <div className={styles.notfications} onClick={handleNotifications}>
            <IoNotificationsSharp className={styles.iconNotif}/>
          </div>
          <div className={notificationsOpen ? `${styles.containerNotif} ${styles.activeNotif}` : styles.containerNotif}>
            <ul className={styles.ulNotif}>
              <li className={styles.liNotif}>Notificacion 1
              <span className={styles.mensajeNotif}>Mensaje de notificacion</span>
              </li>
              <li className={styles.liNotif}>Notificacion 2 
              <span className={styles.mensajeNotif}>Mensaje de notificacion</span>
              </li>
              <li className={styles.liNotif}>Notificacion 3 
              <span className={styles.mensajeNotif}>Mensaje de notificacion</span>
              </li>
            </ul>
          </div>
        </div>
      
    </section>
  );
}
