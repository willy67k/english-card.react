import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  times: string[] | "all";
}

const initialState: FilterState = {
  times: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTimes: (state, action: PayloadAction<string[] | "all">) => {
      state.times = action.payload;
    },
  },
});

export const { setTimes } = filterSlice.actions;
export default filterSlice.reducer;
