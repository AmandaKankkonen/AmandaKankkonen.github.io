import React from 'react';
import styles from './aboutMe.module.scss';
import photo from './photos/image1.jpg';
import gif from './photos/hiwave.gif'


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} alt='myphoto'/>
      </div>
      <div className={styles.content}>
        <p>Hello, my name is</p>
        <h1>Amanda Kankkonen</h1>
        <p>Originally from the US, I am a 2nd year programming student currently 
           studying at Varia in Vantaa, Finland.<br/>
           I am native in English and fluent in Finnish (taso B2).
        </p>
          <h2>My language experience includes:</h2>
        <p>HTML & CSS/SASS, Java, Javascript, Typescript, REACT, C#, SQL/NoSQL</p>
      </div>
      <div className={styles.gif}>
        <img src={gif} alt='wavegif'/>
      </div>
    </div>
  )
}

export default AboutMe