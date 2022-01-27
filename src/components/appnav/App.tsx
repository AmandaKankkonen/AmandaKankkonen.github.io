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

const App: React.FC = () => {
  return (
       // Important! add your repositoryname to basename
       <Router basename='/reactportfolio'>

       {/* The navigation bar and other components you want to display on all pages come here */}
       <div className={styles.navbar}>
         <Link to='portfolio'>Portfolio</Link>
         <Link to='CV'>CV</Link>
         <a href='https://www.linkedin.com/in/amanda-kankkonen-038853212/' target="_blank">LinkedIn</a>
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
