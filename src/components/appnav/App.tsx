import AboutMe from '../aboutme/aboutMe';
import styles from './App.module.scss';
import Port from '../portfolio/portfolio';
import CV from '../cv/cv';
import Footer from '../footer';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrGithub } from 'react-icons/gr';

const App: React.FC = () => {
  return (
       // Important! add your repositoryname to basename
       <Router basename='/reactportfolio'>

       {/* The navigation bar and other components you want to display on all pages come here */}
       <div className={styles.navbar}>
         <Link to='portfolio'>Portfolio</Link>
         <Link to='cv'>CV</Link>
         <a href='https://github.com/AmandaKankkonen?tab=repositories' target="_blank" rel="noreferrer noopener"><GrGithub color="lightblue" size="23" /></a>
         <a href='https://www.linkedin.com/in/amanda-kankkonen-038853212/' target="_blank" rel="noreferrer noopener"><AiOutlineLinkedin color="lightblue" size="23" /></a>
       </div>
       <AboutMe/>
       <Switch>
         {/* Changing content comes here */}
         <Route exact path='/portfolio' component={Port}/>
         <Route exact path='/cv' component={CV}/>
       </Switch>
       <Footer/>
       {/* The footer and other components you want to display on all pages come here */}
     </Router>
  )
}

export default App
