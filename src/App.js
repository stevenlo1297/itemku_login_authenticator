import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import Mainmenu from "./mainmenu";
import Login from "./login";

function App() {
  function LoginToken() {
    const login_token = useSelector(state => state.Login);
    console.log(login_token);
    if (login_token.login === 0) {
      return <Login />;
    }
    return <Mainmenu />;
  }
  return <LoginToken />;
}

export default App;
