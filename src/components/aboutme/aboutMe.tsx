import React from 'react'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
      <body>
    <div className="about-me">
        <p>Hello, my name is</p>
    <h1>Amanda Kankkonen</h1></div>
    <br/>
    <div>
        <p>Originally from US, I am a 2nd year programming student currently studying at Varia in Vantaa, Finland.
	<br/><br/><h2>My language experience includes:</h2><br/><br/>
    HTML & CSS/SASS, Java, Javascript, Typescript, REACT, C#</p></div>
    </body>
  )
}

export default AboutMe