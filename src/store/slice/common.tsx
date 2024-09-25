import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  user?: string | null;
  initialShowTitle: boolean;
  initialShowTrans: boolean;
}

const initialState: CommonState = {
  user: null,
  initialShowTitle: true,
  initialShowTrans: true,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setInitialShowTitle: (state, action: PayloadAction<boolean>) => {
      state.initialShowTitle = action.payload;
    },
    setInitialShowTrans: (state, action: PayloadAction<boolean>) => {
      state.initialShowTrans = action.payload;
    },
  },
});

export const { setInitialShowTitle, setInitialShowTrans } = commonSlice.actions;
export default commonSlice.reducer;
