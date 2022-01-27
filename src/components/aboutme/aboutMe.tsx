import React from 'react';
import styles from './aboutMe.module.scss';

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Hello, my name is</p>
        <h1>Amanda Kankkonen</h1>
      </div>
      <div className={styles.content}>
        <p>Originally from the US, I am a 2nd year programming student currently studying at Varia in Vantaa, Finland.</p>
          <h2>My language experience includes:</h2><p> HTML & CSS/SASS, Java, Javascript, Typescript, REACT, C#, SQL/NoSQL
        </p>
      </div>
    </div>
  )
}

export default AboutMe