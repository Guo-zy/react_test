import axios from "axios";
import {LOADING_TOGGLE} from "../store/action/actionTypes"
import store from "../store/index"

export function requestAPI(config) {
  const instance = axios.create({
    baseURL: "http://localhost:8081/todolist",
    timeout: 5000,
  });
  instance.interceptors.request.use(
    (req) => {
      store.dispatch({type :LOADING_TOGGLE , value :  true })
      return req;
    },
    (error) => error
  );
  instance.interceptors.response.use(
    (req) => {
      store.dispatch({type :LOADING_TOGGLE , value  : false })
      return req;
    },
    (error) => error
  );
  return instance(config);
}

//TODO
//  export default new Promise({baseURL : "https://5e9ec500fb467500166c4658.mockapi.io/todos"})
