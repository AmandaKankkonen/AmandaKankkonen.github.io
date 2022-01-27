import AboutMe from '../aboutme/aboutMe';
import styles from './App.module.scss';
import Port from '../portfolio/portfolio';
import CV from '../cv/cv';
import Footer from '../footer';
import {
  BrowserRouter as Router,
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
