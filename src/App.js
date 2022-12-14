import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Login from './pages/login/Login'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>       
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>          

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/services'>
          <Services />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
