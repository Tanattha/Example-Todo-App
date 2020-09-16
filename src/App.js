import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="logo" className="NavImg" />
          </a>
          <Link to="/contact" className="nav-link">
            <img src="img/contactIcon.png" alt="logo" className="NavImg" />
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
