import React from "react";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound"
import {Footer} from "./components/layout/Footer"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import {AddUser} from "./components/users/AddUser"
import {EditUser} from "./components/users/EditUser"
import {User} from "./components/users/User"
function App() {
  return (
    <Router>

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/add" component={AddUser}/>
          <Route path="/users/edit/:id" component={EditUser}/>
          <Route path="/users/:id" component={User}/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
