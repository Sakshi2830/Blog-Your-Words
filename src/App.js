import TopBar from "./components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/setting/Setting";
import Home from "./Pages/Home/Home";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  const user = true
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          {user ? <Home/>:<Register/>}
        </Route>
        <Route path="/login">
          {user ? <Home/>:<Login/>}
        </Route>
        <Route path="/write">
          {user ?<Write/>: <Register/>}
        </Route>
        <Route path="/setting">
          {user ? <Setting/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route> 
    </Switch>
    </Router>
  );
}

export default App;
