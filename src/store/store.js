// store.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// Создаем хранилище Redux с редьюсером и применяем промежуточное ПО для поддержки асинхронных действий
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
