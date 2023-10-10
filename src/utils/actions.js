// actions.js

// Импортируем необходимые константы для действий
import {
  LOAD_DATA,
  LOAD_MORE_DATA,
  SET_DATA,
  HIDE_BUTTON,
} from "./actionTypes";
import axios from "axios";

// import API from "./api"; // Импортируем модуль для работы с API
const API_ENDPOINT = "https://layout.solvintech.ru/nuxt/api/";

// Действие для загрузки данных
export const loadData = () => async (dispatch) => {
  // const API = {
  //   getData: () => axios.get(`${API_ENDPOINT}`),
  //   getMoreData: (startIndex) =>
  //     axios.get(`${API_ENDPOINT}?startIndex=${startIndex}`),
  // };

  try {
    // const response = await axios.get(`${API_ENDPOINT}`);

    const response = await fetch("https://layout.solvintech.ru/nuxt/api/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const data = response.data;

    // Отправляем полученные данные в хранилище
    // dispatch(setData(data));

    if (data.length <= 4) {
      // Если загруженные данные содержат не более 4 элементов, скрываем кнопку
      dispatch(hideButton());
    }
  } catch (error) {
    // Обрабатываем ошибку загрузки данных
    console.error("Error loading data", error);
  }
};

// Действие для подгрузки дополнительных данных
// export const loadMoreData = () => async (dispatch, getState) => {
//   try {
//     const { data } = getState(); // Получаем текущие загруженные данные из хранилища
//     const response = await API.getMoreData(data.length);
//     const moreData = response.data;

//     // Обновляем хранилище, добавляя новые данные
//     dispatch(setData([...data, ...moreData]));

//     if (moreData.length <= 0) {
//       // Если больше данных не получено, скрываем кнопку
//       dispatch(hideButton());
//     }
//   } catch (error) {
//     // Обрабатываем ошибку загрузки данных
//     console.error("Error loading more data", error);
//   }
// };

// Действие для обновления хранилища с данными
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

// Действие для скрытия кнопки подгрузки данных
export const hideButton = () => ({
  type: HIDE_BUTTON,
});
