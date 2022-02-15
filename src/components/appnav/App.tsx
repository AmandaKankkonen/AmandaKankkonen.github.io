import AboutMe from '../aboutme/aboutMe';
import styles from './App.module.scss';
import Port from '../portfolio/portfolio';
import CV from '../cv/cv';
import Footer from '../footer/footer';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrGithub } from 'react-icons/gr';
import Navbar from '../navbar/navbar';

const App: React.FC = () => {
  return (
    // Important! add your repositoryname to basename
    <div className={styles.container}>

      <Router basename='/reactportfolio'>
        <Navbar />
        <AboutMe/>
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/portfolio' component={Port}/>
          <Route exact path='/cv' component={CV}/>
        </Switch>
        <Footer/>
        {/* The footer and other components you want to display on all pages come here */}
      </Router>
    </div>
  )
}

export default App
