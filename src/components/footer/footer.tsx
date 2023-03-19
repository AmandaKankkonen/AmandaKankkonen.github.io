import React from 'react'
// import styles from '../cv/cv.module.scss'
import styles from './footer.module.scss';
import photo from './email.png'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.icon}>
        <img src={photo} alt='emailIcon'/> 
      </div>
      <a href="mailto: amandakankkonen@gmail.com">
        amandakankkonen@gmail.com
      </a>
    </footer>
  )
}

export default Footer