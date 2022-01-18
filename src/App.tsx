// App.tsx
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';
import styles from './App.module.scss';
import Port from './components/portfolio';
import CV from './components/cv';
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
         <Link to='/'>Front page</Link>
         <Link to='example'>Look my example component</Link>
         <Link to='clickCount'>Click Counter</Link>
         <Link to='portfolio'>My portfolio</Link>
         <Link to='CV'>My CV</Link>
       </div>
 
       <Switch>
         {/* Changing content comes here */}
         <Route exact path='/' component={MyFirstComponent} />
         <Route exact path='/example' component={SomeExampleComponent}/>
         <Route exact path='/clickCount' component={ClickCount}/>
         <Route exact path='/portfolio' component={Port}/>
         <Route exact path='/cv' component={CV}/>
       </Switch>
 
       {/* The footer and other components you want to display on all pages come here */}
 
     </Router>
  )
}

export default App
