import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import AddBlog from "./components/blogs/AddBlog";
import Blogs from "./components/blogs/Blogs";
import AuthenticateComponent from './components/auth/AuthenticateComponent';

function App() {
  return (
   <Router>
      <div className="App">
      {/* <header className="App-header"> */}
      <Switch>
      <Route exact path="/login" component={Login} ></Route>

        {/* <AuthenticateComponent/> */}
        {/* <Route exact path='/create'   component={AuthenticateComponent} customcomponent={AddBlog}/> */}
        <Route exact path='/create'   render={()=><AuthenticateComponent customcomponent={AddBlog} />} />
        <Route exact path='/blogs'   render={()=><AuthenticateComponent customcomponent={Blogs} />} />
        {/* <Route exact path="/blogs" component={Blogs} ></Route> */}
     

     

      {/* render={(props) => <Greeting text="Hello, " {...props} /> */}
      </Switch>
      {/* </header> */}
    </div>
   </Router>
  );
}

export default App;
