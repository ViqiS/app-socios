'use client'
import React, { useState, useRef } from "react";
import styles from './partners.module.css';
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

export default function Partners() {
  const [searchActive, setSearchActive] = useState(false);
  const searchContainerRef = useRef(null);
  const [associations, setAssociations] = useState([
    { name: 'John', associated: true },
    { name: 'Mary', associated: false },
    { name: 'Peter', associated: true },
    { name: 'Louise', associated: false },
    { name: 'Charles', associated: true }
  ]);



  const associateUser = (index) => {
    const updatedAssociations = [...associations];
    updatedAssociations[index].associated = true;
    setAssociations(updatedAssociations);
  };
  
  const deleteUser = (index) => {
    const updatedAssociations = [...associations];
    updatedAssociations[index].associated = false;
    setAssociations(updatedAssociations);
  };
  const handleSearchClick = () => {
    setSearchActive(!searchActive);
    
  };


  return (
    <>
    <section className={styles.containerPartners}>
      <h1 className={styles.titlePartners}>Partners</h1>
      <div className={searchActive ? `${styles.containerSearch} ${styles.activeContainerSearch}` : styles.containerSearch}>
      <span className={styles.searchPartner}>Search partner</span>
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
      </div>
      
      <div className={styles.containerUsers}>
          {associations.map((partner, index) => (
      <li className={styles.partnersList} key={index}>
        <Image src='/avatar-users.png'width={30} height={30}/>
        <p className={styles.name}>{partner.name}</p>
        {partner.associated ? (
          <button className={styles.buttonDelete} onClick={() => deleteUser(index)}>Not associated</button>
        ) : (
          <button className={styles.buttonAssociate}  onClick={() => associateUser(index)}>Associated</button>
        )}
      </li>
    ))}
      </div>
    </section>
    </>
  )
}