import React from 'react'
import styles from './cv/cv.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.container}>
<footer><a href="mailto: amandakankkonen@gmail.com">amandakankkonen@gmail.com</a></footer>
    </div>
  )
}

export default Footer