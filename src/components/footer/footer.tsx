import React from 'react'
// import styles from '../cv/cv.module.scss'
import styles from './footer.module.scss';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.container}>
      <a href="mailto: amandakankkonen@gmail.com">
        amandakankkonen@gmail.com
      </a>
    </footer>
  )
}

export default Footer