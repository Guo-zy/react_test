import axios from "axios";


export function requestShop(config) {
    const instance = axios.create({
      baseURL: "https://5e9ec500fb467500166c4658.mockapi.io",
      timeout: 5000
    });
    return instance(config);
  }