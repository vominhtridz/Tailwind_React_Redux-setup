import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counter/CounterSlice.tsx";
export default configureStore({
    reducer: counterReducer,
});
