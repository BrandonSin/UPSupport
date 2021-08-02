import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Privacy from './components/pages/Privacy';
import Support from './components/pages/Support';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/UPSupport' exact component={Home}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Support' component={Support}/>
          <Route path='/Privacy' component={Privacy}/>

        
        </Switch>
        
      </Router>
     
    </>
    
  );
}

export default App;
