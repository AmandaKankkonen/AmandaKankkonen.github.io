import React from 'react'
import styles from './cv.module.scss'

type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Koulutus / Schooling</h1>
      <ul><li>Varia ammattikoulu -ICT Ohjelmointi- 01/02/2021-present/nykyään</li><br/>
      <li>Suomi B1.2-B2.1 Intensiivikurssi -Omnia- 31/08/2020-28/11/2020</li><br/>
      <li>YKI-Valmentava -Helsingin Työväenopisto- 19/01/2020-09/03/2020</li><br/>
      <li>Kynsiteknikko -New Skills Academy- 05/12/2019-11/12/2019</li><br/>
      <li>Suomi B1.1-B1.2 Intensiivisesti -Helsingin Työväenopisto- 27/10/2019-5/12/2019</li><br/>
      <li>Suomen kieli A1-B1 -Arffman- 12/11/2018-13/05/2019</li><br/>
     <li>Lukio/High School -Dunedin HS- 2008 </li></ul>

<h1>Viimeaikainen Työhistoria / Recent Employment History</h1>
<ul>
<li>Artist/Taitelija -Tanssija/Dancer- 31/08/2011-present/nykyään</li><br/>
<li>Nanny/Au pair -Sara Ludena- 04/01/2014-06/06/2017 </li></ul><br/>
</div>
  )
}

export default CV
