import { configureStore } from "@reduxjs/toolkit";
import common from "./slice/common";

export const store = configureStore({
  reducer: {
    common,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
