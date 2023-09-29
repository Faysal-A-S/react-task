import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import { Api } from "../features/api/Api";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    filter: filterSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(Api.middleware),
});
