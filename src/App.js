import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Container/About/About';
import Home from './Container/Home/Home';
import Blogs from './Container/Blogs/Blogs';
import WorkExperience from './Container/WorkExperience/WorkExperience';
import Contact from './Container/Contact/Contact';
import { useState } from 'react';


const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const onNavToggleClick = () => {
    setNavToggle(!navToggle);
  }
  const routes = (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/workExperience" component={WorkExperience} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
      <Redirect to="/" exact />
    </Switch>
  );
  return (
    <div className="app">
      <div className={`app__sidebar ${navToggle ? 'nav-toggle' : ''}`} onClick={onNavToggleClick}>
        <Navbar />
      </div>

      <div className="app_navbarToggle" onClick={onNavToggleClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>

      <div className="app__main">
        <div className="app__mainContent">
          {routes}
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
