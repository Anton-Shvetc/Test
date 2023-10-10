import {
  LOAD_DATA,
  LOAD_MORE_DATA,
  SET_DATA,
  HIDE_BUTTON,
} from "./actionTypes";

const initialState = {
  data: [],
  showButton: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case HIDE_BUTTON:
      return {
        ...state,
        showButton: false,
      };
    default:
      return state;
  }
};

export default reducer;
