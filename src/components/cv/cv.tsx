import React from 'react'
import styles from './cv.module.scss'
import { kouludata } from './kouludata'
import { workdata } from './workdata'

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
      {
          workdata.map(x => {
            return (
              <li key={x.key}>{x.text}</li>
            )
          })
        }</ul>
    </div>
  )
}

export default CV
