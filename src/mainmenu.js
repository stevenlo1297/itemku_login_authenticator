import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { doLogout } from "./actions";
import Button from "@material-ui/core/Button";
function Mainmenu() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Main Menu</h1>
        <Button onClick={() => dispatch(doLogout())}>Logout</Button>
      </header>
    </div>
  );
}

export default Mainmenu;
