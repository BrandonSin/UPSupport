import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Privacy from './components/pages/Privacy';
import Support from './components/pages/Support';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Support' component={Support}/>
          <Route path='/Privacy' component={Privacy}/>

        
        </Switch>
        
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
    
  );
}

export default App;
