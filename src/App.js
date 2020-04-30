import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import AddBlog from "./components/blogs/AddBlog";
import Blogs from "./components/blogs/Blogs";
import UpdateBlog from "./components/blogs/UpdateBlog";
import AuthenticateComponent from './components/auth/AuthenticateComponent';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
        <Switch>
          <Route exact path="/login" component={Login} ></Route>

          {/* <AuthenticateComponent/> */}
          <Route exact path='/check/:id' render={(props) => <AuthenticateComponent customcomponent={UpdateBlog} {...props} />} />
          <Route exact path='/create' render={(props) => <AuthenticateComponent customcomponent={AddBlog}{...props} />} />
          <Route exact path='/blogs' render={(props) => <AuthenticateComponent customcomponent={Blogs}{...props} />} />
          <Route exact path='/blog-update/:id' render={(props) => <AuthenticateComponent customcomponent={UpdateBlog} {...props} />} />
          {/* <Route exact path='/blog-update/:id'   render={()=><AuthenticateComponent customcomponent={UpdateBlog} />} /> */}
          {/* <Route exact path="/blogs" component={Blogs} ></Route> */}




          {/* render={(props) => <Greeting text="Hello, " {...props} /> */}
        </Switch>
        {/* </header> */}
      </div>
    </Router>
  );
}

export default App;
