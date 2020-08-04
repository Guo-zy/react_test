import axios from "axios";


export function requestItem(config) {
    const instance = axios.create({
      baseURL: "https://5e9ec500fb467500166c4658.mockapi.io",
      timeout: 5000
    });
    return instance(config);
  }

  
export function modifyItemStatus(config) {
  const instance = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
    timeout: 5000
  });
  return instance(config);
}

export function insertItem(config) {
  const instance = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
    timeout: 5000
  });
  return instance(config);
}

export function deleteItem(config) {
  const instance = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
    timeout: 5000
  });
  return instance(config);
}