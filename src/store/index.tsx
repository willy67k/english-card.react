import { configureStore } from "@reduxjs/toolkit";
import common from "./slice/common";
import filter from "./slice/filter";

export const store = configureStore({
  reducer: {
    common,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
