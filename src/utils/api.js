import axios from "axios";

const API_ENDPOINT = "https://layout.solvintech.ru/nuxt/api/";

const API = {
  getData: () => axios.get(`${API_ENDPOINT}`),
  getMoreData: (startIndex) =>
    axios.get(`${API_ENDPOINT}?startIndex=${startIndex}`),
};

export default API;
