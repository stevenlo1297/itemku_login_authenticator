import login_token from "./loginauth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  Login: login_token
});

export default allReducers;
