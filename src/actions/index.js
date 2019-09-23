export const doLogin = ({ email, password }) => {
  return {
    type: "LOGIN_AUTH",
    payload: { name: email, password: password }
  };
};

export const doLogout = () => {
  return {
    type: "LOGOUT"
  };
};
