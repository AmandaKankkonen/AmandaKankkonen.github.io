import React from 'react'
import styles from './cv.module.scss'
import { kouludata } from './kouludata'

type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div className={styles.container}>
      <h2>Koulutus / Schooling</h2>
      <ul>
        {
          kouludata.map(x => {
            return (
              <li key={x.key}>{x.text}</li>
            )
          })
        }
      </ul>

      <h2>Viimeaikainen Työhistoria / Recent Employment History</h2>
      <ul>
      <li>(Kieli) Työharjoittelu -Vantaa Kaupunki/Tiedonjyvän Päiväkoti- 26/8-04/10/2019</li><br/>
      <li>Artist/Taitelija -Tanssija/Dancer- 31/08/2011-present/nykyään</li><br/>
      <li>Nanny/Au pair -Sara Ludena- 04/01/2014-06/06/2017 </li></ul><br/>
    </div>
  )
}

export default CV
