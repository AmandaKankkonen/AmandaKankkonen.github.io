// App.tsx
//import MyFirstComponent from '../firstcomponent/myFirstComponent';
//import SomeExampleComponent from '../examplecomponent/someExampleComponent';
//import ClickCount from '../clickcount/clickCount';
import AboutMe from '../aboutme/aboutMe';
import styles from './App.module.scss';
import Port from '../portfolio/portfolio';
import CV from '../cv/cv';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App: React.FC = () => {
  return (
       // Important! add your repositoryname to basename
       <Router basename='./aboutme/aboutMe'>
      
       {/* The navigation bar and other components you want to display on all pages come here */}
       <div className={styles.navbar}>
         <Link to='aboutMe'>Front page</Link>
         <Link to='portfolio'>My portfolio</Link>
         <Link to='CV'>My CV</Link>
       </div>
 
       <Switch>
         {/* Changing content comes here */}
         <Route exact path='/aboutMe' component={AboutMe} />
         <Route exact path='/portfolio' component={Port}/>
         <Route exact path='/cv' component={CV}/>
       </Switch>
 
       {/* The footer and other components you want to display on all pages come here */}
     </Router>
  )
}

export default App
