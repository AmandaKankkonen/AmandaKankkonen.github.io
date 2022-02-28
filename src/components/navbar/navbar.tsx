import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { GrGithub } from 'react-icons/gr'
import { SiUnity } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar}>
        <Link to='portfolio'>Portfolio</Link>
        <Link to='cv'>CV</Link>

        <a href='https://github.com/AmandaKankkonen?tab=repositories'
        target="_blank"
        rel="noreferrer noopener"
        >
        <GrGithub color="hotpink" size="23" />
        </a>

        <a href='https://play.unity.com/u/AmandaKankkonen'
        target="_blank"
        rel="noreferrer noopener"
        >
        <SiUnity color="hotpink" size="23" />
        </a>

        <a href='https://www.linkedin.com/in/amanda-kankkonen-038853212/'
        target="_blank"
        rel="noreferrer noopener"
        >
        <AiOutlineLinkedin color="hotpink" size="23" />
        </a>


    </div>
  )
}

export default Navbar
