import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
    },
    fetchDataSuccess(state, action) {
      state.data = [...state.data, ...action.payload];
      state.isLoading = false;
    },
    fetchDataFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export const selectData = (state) => state.data.data;
export const selectIsLoading = (state) => state.data.isLoading;

export default dataSlice.reducer;
