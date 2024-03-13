import { Tuple, configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee.slice";
import logger from "redux-logger";
const rootReducer = { employeeSlice };

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
