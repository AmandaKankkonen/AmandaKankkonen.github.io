
import React from 'react';
import styles from './portfolio.module.scss';

const Port: React.FC = () => {
  return (
    <div className={styles.container}>

      <h2>Portfolio:</h2>
      <div className={styles.links}>
          <a href="https://github.com/AmandaKankkonen/varia-agile-20C-ryhma-1">Wolf Game - Unity group project</a>
          <a href="https://github.com/AmandaKankkonen/ThePhantomFields">Phantom Fields Java Game - Co-project</a>
          <a href="https://play.unity.com/u/AmandaKankkonen">My WebGL Unity Play games(C#)</a>
          <a href="https://github.com/AmandaKankkonen/reactportfolio">React Webpage for Ohjelmointi</a>
      </div>
    </div>
)};

export default Port;