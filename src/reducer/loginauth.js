const InitialLoginState = {
  login: 0,
  messages: "",
  authToken: ""
};

const login_token = (state = InitialLoginState, action) => {
  if (action.type === "LOGIN_TRUE") {
    return Object.assign({}, state, {
      login: action.payload.success,
      messages: action.payload.message,
      authToken: action.payload.data.access_token
    });
  }
  if (action.type === "LOGIN_FAIL") {
    return Object.assign({}, state, {
      login: action.payload.success,
      messages: action.payload.message
    });
  }
  if (action.type === "SERVER_OFF") {
    return Object.assign({}, state, {
      messages: "tidak dapat terhubung ke server"
    });
  }
  if (action.type === "LOGOUT") {
    return InitialLoginState;
  }
  return state;
};

export default login_token;
