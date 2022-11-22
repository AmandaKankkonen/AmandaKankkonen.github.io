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
           studying at Varia in Vantaa, Finland. During my programming studies at Varia
           I have been efficiently taught how to create unique, engaging games using C# 
           and Unity - both independently and in collaboration with my colleagues utilizing
           Agile/Scrum methods. I've learned to make websites that are not only attractive,
           but functional on both the front and back end. Most of my framework experience
           is with React, and I prefer VScode. I love to learn new things and can't wait to
           see what the future offers. I am nearing the end of my program (Class of 2023) and
           am available for full-time work. Native English, Fluent Finnish. Full authorized
           to work in Finland & USA.
          <br></br>Currently learning: Lua, Kotlin, iOS/Android mobile games
        </p>
          <h2>My language experience includes:</h2>
        <p>Java, Javascript, Typescript, React, C#, C, HTML & CSS/SASS, SQL/NoSQL</p>
          <h2>Some backend framework experience including:</h2>
        <p>Node.js/Express, REST, MongoDB</p>
      </div>
      <div className={styles.gif}>
        <img src={gif} alt='wavegif'/>
      </div>
    </div>
  )
}

export default AboutMe