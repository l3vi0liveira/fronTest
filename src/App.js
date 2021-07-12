import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";

import Home from "./pages/Home";

import Chat from "./pages/Chat";

import User from "./pages/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/chat" component={Chat}></Route>
          <Route component={Home} path="/" exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
