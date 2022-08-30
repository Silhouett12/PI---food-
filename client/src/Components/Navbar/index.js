import React from 'react'
import styles from './Navbar.module.css'
import logo from '../Images/food.png'
import logoTitle from '../Images/great food.png'
import githubLogo from '../Images/github.png'
const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.logoSection}>
            <div className={styles.logo}>
                <img alt='logo' src={logo} className={styles.logoImg}/>
            </div>
            <div className={styles.logoTitle}>
                <img alt='logoTitle' src={logoTitle}/>
            </div>
        </div>
        <div className={styles.itemsSection}>
                <div className={styles.githubLogo}>
                    <a href='https://github.com/Silhouett12/PI---food-'><img alt='githubLogo' src={githubLogo}/></a>
                </div>
                <div className={styles.pageLogo}>
                 HOLAAAAAAAA
                </div>
        </div>
    </div>
    </>
  )
}

export default Navbar