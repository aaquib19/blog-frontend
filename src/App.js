import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddBlog from "./components/blogs/AddBlog";
import Blogs from "./components/blogs/Blogs";
import UpdateBlog from "./components/blogs/UpdateBlog";
import AuthenticateComponent from './components/auth/AuthenticateComponent';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/register" component={Register} ></Route>

        <Route exact path='/update/:id' render={(props) => <AuthenticateComponent customcomponent={UpdateBlog} {...props} />} />
        <Route exact path='/create' render={(props) => <AuthenticateComponent customcomponent={AddBlog}{...props} />} />
        <Route exact path='/blogs' render={(props) => <AuthenticateComponent customcomponent={Blogs}{...props} />} />
        <Route exact path='/blog-update/:id' render={(props) => <AuthenticateComponent customcomponent={UpdateBlog} {...props} />} />

      </Switch>
      {/* </div> */}
    </Router >
  );
}

export default App;
