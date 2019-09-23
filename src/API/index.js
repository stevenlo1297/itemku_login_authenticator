import axios from "axios";

export const getLogin = async payload => {
  console.log(payload.name);
  return await axios.post("http://192.168.2.46:8090/v1/auth/login", {
    email: payload.name,
    password: payload.password,
    client_id: "asd"
  });
};
