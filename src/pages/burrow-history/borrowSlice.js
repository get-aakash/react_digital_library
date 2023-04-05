import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrow: {},
};
const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setborrow: (state, { payload }) => {
      state.borrow = payload;
    },
  },
});

const { reducer, actions } = borrowSlice;

export const { setborrow } = actions;

export default reducer;
