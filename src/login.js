import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "./actions";

function Login() {
  const login = useSelector(state => state.Login);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      console.log(email, password);
      var payload = {
        email: email,
        password: password
      };
      dispatch(doLogin(payload));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{login.messages}</h2>
        <h1>LOGIN HERE</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
          />

          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            LOGIN
          </Button>
        </form>
      </header>
    </div>
  );
}

export default Login;
