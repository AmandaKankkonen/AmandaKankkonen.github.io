
import React from 'react';
import styles from './portfolio.module.scss';

const Port: React.FC = () => {
  return (
    <div className={styles.container}>

      <h2>Portfolio:</h2>
      <div className={styles.links}>
          <a className={styles.link1} href="https://github.com/varia-ict/varia-agile-20C-ryhma-1">
            Wolf Adventure game - group project
          </a>
          <a className={styles.link2} href="https://github.com/AmandaKankkonen/ThePhantomFields">
            Phantom Fields Java game - Co-project
          </a>
          <a className={styles.link3} href="https://play.unity.com/u/AmandaKankkonen">
            My WebGL Unity Play games(C#)
          </a>
          <a className={styles.link4} href="https://github.com/AmandaKankkonen/reactportfolio">
            React webpage for Ohjelmointi
          </a>
      </div>
    </div>
)};

export default Port;